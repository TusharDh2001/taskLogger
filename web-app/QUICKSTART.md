# Quick Start Guide - POGO Web App

Get the POGO web app running in 5 minutes!

## 1️⃣ Prerequisites

- Node.js 16+ ([Download](https://nodejs.org))
- npm or yarn
- Supabase account (free at [supabase.com](https://supabase.com))

## 2️⃣ Clone & Setup

```bash
# Navigate to web-app directory
cd web-app

# Install dependencies
npm install
```

## 3️⃣ Configure Supabase

### Option A: Existing Supabase Project
1. Open [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **Settings → API**
4. Copy:
   - Project URL
   - `anon` public key

### Option B: Create New Project
1. Sign up at [supabase.com](https://supabase.com) (free tier)
2. Click "New Project"
3. Fill in project details
4. Wait for project to initialize
5. Copy credentials from Settings → API

## 4️⃣ Environment Setup

Create `.env.local` in the `web-app` directory:

```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
VITE_API_URL=http://localhost:3001
```

**Example:**
```env
VITE_SUPABASE_URL=https://xyzabc.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_API_URL=http://localhost:3001
```

## 5️⃣ Setup Database Schema

Follow the [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) guide:

1. Open Supabase Dashboard → SQL Editor
2. Copy and run all SQL from SUPABASE_SETUP.md
3. Wait for all queries to complete
4. Verify tables are created

**Quick Check:**
- Tables tab should show: `users`, `tasks`, `user_settings`, `notifications`
- Check RLS is enabled on all tables

## 6️⃣ Start Development Server

```bash
npm run dev
```

Open your browser and visit: **http://localhost:3000**

## 🎯 Try It Out

### Create Your First Account
1. Click "Sign Up"
2. Enter phone number (any format)
3. Create password
4. Confirm password
5. Enter full name
6. Click "Create Account"

### Create Your First Task
1. Type a task in the input field
2. Click the **+** button
3. Watch it appear instantly!

## 📱 Test Features

- ✅ Create multiple tasks
- ✅ Mark tasks as complete
- ✅ Delete tasks
- ✅ Check completion stats
- ✅ Try signing in/out

## 🚀 Ready to Deploy?

See [DEPLOYMENT.md](./DEPLOYMENT.md) for production deployment steps!

## 📚 Learn More

- [Full README](./README.md) - Complete documentation
- [Supabase Setup Guide](./SUPABASE_SETUP.md) - Database configuration
- [Deployment Guide](./DEPLOYMENT.md) - Deploy to production

## ❓ Troubleshooting

### Port Already in Use
```bash
# Change port in vite.config.js or use:
npm run dev -- --port 3001
```

### Supabase Connection Error
- Check `.env.local` has correct URLs/keys
- Verify Supabase project is active
- Check internet connection
- Restart development server

### Page Loads but Shows Blank Screen
- Open browser console (F12)
- Check for error messages
- Verify environment variables loaded
- Check Supabase credentials

### Can't Sign Up
- Ensure Supabase database schema is set up
- Check browser console for errors
- Verify RLS policies are enabled
- Check that users table exists

### Real-time Updates Not Working
- Verify Supabase is running
- Check browser WebSocket connection in DevTools
- Restart dev server

## 💡 Pro Tips

- Use `your-phone-number@pogo.local` format for testing
- Create test accounts with different phone numbers
- Monitor Supabase logs in Dashboard for debugging
- Use browser DevTools to inspect network requests

## 🎉 Success!

Your POGO app is running! You can now:
- ✅ Manage tasks
- ✅ Track progress
- ✅ Deploy to production

**Questions?** Check [README.md](./README.md) or reach out to support@pogo.app

---

**Next Step:** Deploy to production with [DEPLOYMENT.md](./DEPLOYMENT.md)
