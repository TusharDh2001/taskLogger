# FlowDesk — Vercel Edition
## Hosted · Free · Open Source Models via Groq API

---

## Stack
| Layer | Tool |
|-------|------|
| Backend | Python + Flask (Vercel serverless) |
| Speech-to-Text | Groq Whisper (whisper-large-v3-turbo) |
| LLM | Groq LLaMA3 (llama3-8b-8192) |
| Storage | Browser localStorage |
| Frontend | Vanilla HTML/CSS/JS |

---

## Deploy in 4 steps

### 1. Get a free Groq API key
Go to https://console.groq.com → sign up → API Keys → Create key
Copy the key (starts with `gsk_...`)

### 2. Push to GitHub
```bash
git init
git add .
git commit -m "FlowDesk"
gh repo create flowdesk --public --push
```

### 3. Deploy to Vercel
```bash
npm i -g vercel
vercel
```
Or go to vercel.com → New Project → import your GitHub repo.

### 4. Add the API key
Vercel Dashboard → your project → Settings → Environment Variables:

| Name | Value |
|------|-------|
| GROQ_API_KEY | gsk_xxxxxxxxxxxxxxxxx |

Redeploy once: `vercel --prod`

---

## Run locally (for testing)
```bash
pip install flask groq
export GROQ_API_KEY=gsk_xxxxxxxxx
python api/index.py
```
Open http://localhost:5000

---

## Change the LLM model
Edit `api/index.py`:
```python
GROQ_MODEL = "llama3-8b-8192"      # fast, free
# GROQ_MODEL = "llama3-70b-8192"   # smarter, still free
# GROQ_MODEL = "mixtral-8x7b-32768" # Mixtral
```

---

## File structure
```
flowdesk-vercel/
├── api/
│   └── index.py       ← Flask app (all routes)
├── static/
│   └── index.html     ← Full frontend
├── vercel.json        ← Vercel routing config
├── requirements.txt   ← Python deps
└── README.md
```
