# Supabase Setup Guide for POGO Web App

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up / Sign in with GitHub
3. Click "New Project"
4. Fill in:
   - **Project name**: `POGO`
   - **Database password**: Generate strong password (save it!)
   - **Region**: Choose closest to your users
5. Click "Create new project" (takes 2-3 minutes)

---

## 2. Get Your Credentials

After project creation:
1. Go to **Settings → API**
2. Copy these values and save in `.env`:
   ```
   VITE_SUPABASE_URL=your_project_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

---

## 3. Create Database Tables

Go to **SQL Editor** and run this script:

```sql
-- Create users table (Supabase auth_users links to this)
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  phone_number TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create tasks table
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  time TIME,
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  category TEXT DEFAULT 'work',
  done BOOLEAN DEFAULT FALSE,
  alarm_time INTEGER DEFAULT 15,
  sound BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  CONSTRAINT unique_user_task UNIQUE(user_id, title, date)
);

-- Create notifications table
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT,
  type TEXT DEFAULT 'info' CHECK (type IN ('info', 'alarm', 'success', 'error')),
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create settings table
CREATE TABLE user_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  default_alarm_time INTEGER DEFAULT 15,
  enable_notifications BOOLEAN DEFAULT TRUE,
  enable_sound BOOLEAN DEFAULT TRUE,
  theme TEXT DEFAULT 'dark',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;

-- Row Level Security Policies
-- Users can only see their own data
CREATE POLICY "Users can see own profile"
  ON users FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  USING (auth.uid() = id);

-- Users can only see their own tasks
CREATE POLICY "Users can see own tasks"
  ON tasks FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create tasks"
  ON tasks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tasks"
  ON tasks FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own tasks"
  ON tasks FOR DELETE
  USING (auth.uid() = user_id);

-- Users can only see their own notifications
CREATE POLICY "Users can see own notifications"
  ON notifications FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can see own settings"
  ON user_settings FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own settings"
  ON user_settings FOR UPDATE
  USING (auth.uid() = user_id);

-- Create indexes for performance
CREATE INDEX idx_tasks_user_id ON tasks(user_id);
CREATE INDEX idx_tasks_date ON tasks(date);
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
```

---

## 4. Enable Phone Authentication

1. Go to **Authentication → Providers**
2. Find "Phone"
3. Click "Enable"
4. Configure phone template (auto-filled)
5. Click "Save"

---

## 5. Configure Email/Password Auth (Optional Backup)

1. Go to **Authentication → Providers**
2. "Email" is auto-enabled
3. Configure redirect URLs:
   - Local: `http://localhost:5173`
   - Production: `https://yourdomain.com`

---

## 6. Set Up Storage Bucket (For Profile Pictures)

1. Go to **Storage**
2. Click "New bucket"
3. Name: `avatars`
4. Check "Public bucket"
5. Click "Create bucket"

---

## 7. Get Started!

Now you're ready! The React app will:
- ✅ Connect to Supabase
- ✅ Handle phone number registration
- ✅ Authenticate users securely
- ✅ Store tasks per user
- ✅ Show personalized dashboard

Run the app:
```bash
cd web-app
npm install
npm run dev
```

Your app will be at `http://localhost:5173`
