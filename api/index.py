"""
FlowDesk — Vercel Edition
Stack: Flask + Groq Whisper (STT) + Groq LLaMA3 (LLM)
All open-source models, free Groq API tier, no local dependencies.
"""

import os, json, datetime, traceback, tempfile
from pathlib import Path
from flask import Flask, request, jsonify, send_from_directory

# ── Groq ──────────────────────────────────────────────────────────────────────
try:
    from groq import Groq
    GROQ_AVAILABLE = True
except ImportError:
    GROQ_AVAILABLE = False

app = Flask(__name__, static_folder="../static")

GROQ_MODEL       = "llama3-8b-8192"          # free open-source LLaMA3 on Groq
WHISPER_MODEL    = "whisper-large-v3-turbo"   # free Whisper on Groq

def get_groq():
    key = os.environ.get("GROQ_API_KEY", "")
    if not key:
        raise RuntimeError("GROQ_API_KEY environment variable not set")
    if not GROQ_AVAILABLE:
        raise RuntimeError("groq package not installed — run: pip install groq")
    return Groq(api_key=key)


# ── Routes ────────────────────────────────────────────────────────────────────

@app.route("/")
def index():
    return send_from_directory("../static", "index.html")


@app.route("/api/status")
def status():
    key_set = bool(os.environ.get("GROQ_API_KEY"))
    return jsonify({
        "groq_key_set":   key_set,
        "groq_available": GROQ_AVAILABLE,
        "whisper_model":  WHISPER_MODEL,
        "llm_model":      GROQ_MODEL,
        "mode":           "vercel+groq",
    })


@app.route("/api/transcribe", methods=["POST"])
def transcribe():
    if "audio" not in request.files:
        return jsonify({"error": "No audio file provided"}), 400

    audio_file = request.files["audio"]
    suffix = ".webm"
    if audio_file.filename:
        ext = Path(audio_file.filename).suffix.lower()
        if ext in (".wav", ".mp3", ".ogg", ".m4a", ".webm", ".mp4"):
            suffix = ext

    # Save to temp file (Groq SDK needs a file path or file-like object)
    with tempfile.NamedTemporaryFile(suffix=suffix, delete=False) as tmp:
        audio_file.save(tmp.name)
        tmp_path = tmp.name

    try:
        client = get_groq()
        with open(tmp_path, "rb") as f:
            result = client.audio.transcriptions.create(
                file=(f"recording{suffix}", f, audio_file.mimetype or "audio/webm"),
                model=WHISPER_MODEL,
                response_format="text",
            )
        transcript = result if isinstance(result, str) else getattr(result, "text", str(result))
        return jsonify({"transcript": transcript.strip()})

    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500
    finally:
        try:
            os.unlink(tmp_path)
        except Exception:
            pass


@app.route("/api/generate", methods=["POST"])
def generate():
    data = request.get_json(silent=True) or {}
    text = (data.get("text") or "").strip()
    if not text:
        return jsonify({"error": "No text provided"}), 400

    today = datetime.date.today().strftime("%A, %B %d")
    now   = datetime.datetime.now().strftime("%H:%M")

    prompt = f"""Today is {today}, current time is {now}.

The user said: "{text}"

Extract every actionable task. For each task return:
- text: clear task description
- time: scheduled HH:MM (24hr) based on context or spread naturally
- duration: estimated minutes (integer)
- priority: high | medium | low
- category: work | personal | health | learning | other

IMPORTANT: Return ONLY a raw JSON array. No markdown, no explanation, no code fences.

Example:
[{{"text":"Review Q3 report","time":"10:00","duration":45,"priority":"high","category":"work"}}]

Extract from: "{text}"
"""

    try:
        client = get_groq()
        response = client.chat.completions.create(
            model=GROQ_MODEL,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.2,
            max_tokens=1000,
        )
        raw = response.choices[0].message.content.strip()

        # Strip markdown fences if model added them
        raw = raw.replace("```json", "").replace("```", "").strip()

        # Extract JSON array robustly
        start = raw.find("[")
        end   = raw.rfind("]") + 1
        if start == -1 or end == 0:
            return jsonify({"error": f"Model returned no JSON array. Got: {raw[:200]}"}), 500

        todos_raw = json.loads(raw[start:end])

        valid_priorities = {"high", "medium", "low"}
        valid_categories = {"work", "personal", "health", "learning", "other"}
        today_str = datetime.date.today().isoformat()

        todos = []
        for i, t in enumerate(todos_raw):
            if not isinstance(t, dict) or not t.get("text"):
                continue
            todos.append({
                "id":       f"{datetime.datetime.now().timestamp()}-{i}",
                "text":     str(t.get("text", "")).strip(),
                "time":     t.get("time") or None,
                "duration": int(t.get("duration") or 30),
                "priority": t.get("priority", "medium") if t.get("priority") in valid_priorities else "medium",
                "category": t.get("category", "other")  if t.get("category") in valid_categories else "other",
                "done":     False,
                "date":     today_str,
                "created":  datetime.datetime.now().isoformat(),
            })

        return jsonify({"todos": todos})

    except json.JSONDecodeError as e:
        return jsonify({"error": f"JSON parse error: {e}. Raw output: {raw[:300]}"}), 500
    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500


# ── Stats (in-memory for Vercel — todos stored in browser localStorage) ───────
@app.route("/api/stats", methods=["POST"])
def stats():
    """
    Vercel has no persistent disk, so todos are stored in the browser.
    The frontend POSTs its local todos here to compute stats server-side.
    """
    all_todos = request.get_json(silent=True) or []

    from collections import defaultdict
    daily = defaultdict(lambda: {"total": 0, "done": 0})
    cat_count = defaultdict(int)

    for t in all_todos:
        d = t.get("date", "")
        daily[d]["total"] += 1
        if t.get("done"):
            daily[d]["done"] += 1
        cat_count[t.get("category", "other")] += 1

    last7 = []
    for i in range(6, -1, -1):
        dt  = datetime.date.today() - datetime.timedelta(days=i)
        key = dt.isoformat()
        d   = daily.get(key, {"total": 0, "done": 0})
        pct = round(d["done"] / d["total"] * 100) if d["total"] else 0
        last7.append({
            "date":  key,
            "label": dt.strftime("%a"),
            "total": d["total"],
            "done":  d["done"],
            "pct":   pct,
        })

    all_total = len(all_todos)
    all_done  = sum(1 for t in all_todos if t.get("done"))
    valid_days = [d for d in last7 if d["total"] > 0]
    avg_pct    = round(sum(d["pct"] for d in valid_days) / len(valid_days)) if valid_days else 0

    categories = [
        {"category": cat, "total": cnt, "done": sum(1 for t in all_todos if t.get("category")==cat and t.get("done"))}
        for cat, cnt in cat_count.items()
    ]

    return jsonify({
        "last7":      last7,
        "categories": categories,
        "all_total":  all_total,
        "all_done":   all_done,
        "avg_pct":    avg_pct,
    })


# ── Local dev entrypoint ──────────────────────────────────────────────────────
if __name__ == "__main__":
    print("\n🚀 FlowDesk (Vercel edition) running at http://localhost:5000")
    print("   Set GROQ_API_KEY env var before starting.\n")
    app.run(debug=True, port=5000)
