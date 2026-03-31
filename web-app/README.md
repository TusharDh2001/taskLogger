# POGO Web App

The modern React-based web version of POGO, your AI-powered task manager with Supabase integration.

## Features

✅ **User Authentication**
- Phone number + password registration (with confirmation)
- Secure login with Supabase Auth
- Automatic session management

✅ **Task Management**
- Create, edit, delete tasks
- Mark tasks as complete
- Priority levels (low, medium, high)
- Real-time sync with Supabase

✅ **User Dashboard**
- Personal task list
- Completion statistics
- Task analytics
- User profile management

✅ **Legal Compliance**
- Privacy Policy
- Terms of Service
- GDPR Compliance Statement
- Payment Processing Agreement (optional)

✅ **Security & Privacy**
- Row-Level Security (RLS) on database
- Encrypted connections
- Secure password storage
- User data isolation

## Tech Stack

- **Frontend**: React 18, React Router, Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth)
- **State Management**: React Hooks
- **UI Components**: Lucide Icons
- **Build Tool**: Vite
- **Styling**: Tailwind CSS

## Prerequisites

- Node.js 16+ and npm/yarn
- Supabase account and project
- Environment variables configured

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create `.env.local` in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_URL=http://localhost:3001
```

Get these values from your Supabase project settings.

### 3. Setup Supabase Database

Follow the [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) guide to:
1. Create the database schema
2. Enable Row-Level Security policies
3. Configure phone authentication
4. Set up storage buckets

### 4. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Project Structure

```
src/
├── pages/
│   ├── Auth.jsx              # Login/Sign up
│   ├── Dashboard.jsx         # Main task manager
│   ├── PrivacyPolicy.jsx     # Privacy policy
│   ├── TermsOfService.jsx    # Terms of service
│   └── GDPR.jsx              # GDPR compliance
├── lib/
│   └── supabase.js           # Supabase client
├── App.jsx                   # Router & main app
├── main.jsx                  # Entry point
└── index.css                 # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Authentication Flow

### Sign Up Process
1. User enters phone number, password, and full name
2. Password is confirmed (asked twice)
3. Account created with Supabase Auth
4. User profile created in `users` table
5. Default settings initialized
6. User redirected to dashboard

### Sign In Process
1. User enters phone number and password
2. Authenticated with Supabase Auth
3. User redirected to dashboard
4. Session automatically maintained

## Database Schema

### Users Table
- `id` - UUID (primary key)
- `phone_number` - User's phone number
- `full_name` - User's display name
- `avatar_url` - Profile picture URL
- `created_at` - Account creation timestamp
- `updated_at` - Last update timestamp

### Tasks Table
- `id` - UUID (primary key)
- `user_id` - Owner of the task
- `title` - Task title
- `description` - Task description (optional)
- `completed` - Completion status
- `priority` - Task priority (low, medium, high)
- `due_date` - Due date (optional)
- `created_at` - Creation timestamp
- `updated_at` - Last update timestamp

### User Settings Table
- `id` - UUID (primary key)
- `user_id` - User reference
- `default_alarm_time` - Default alarm minutes before due date
- `enable_notifications` - Notification preference
- `enable_sound` - Sound notification preference
- `theme` - UI theme preference (dark/light)
- `created_at` - Creation timestamp
- `updated_at` - Last update timestamp

### Notifications Table
- `id` - UUID (primary key)
- `user_id` - User reference
- `task_id` - Related task
- `message` - Notification message
- `read` - Read status
- `created_at` - Creation timestamp

## Security

### Row-Level Security (RLS) Policies

All tables have RLS enabled with policies ensuring:
- Users can only see their own data
- Users can only modify their own records
- Admins have full access
- Public data (like legal documents) is readable by all

### Best Practices Implemented

✅ Password hashing with bcrypt
✅ Secure token management
✅ HTTPS/SSL enforcement
✅ CORS configuration
✅ SQL injection prevention
✅ XSS protection

## API Integration

The frontend communicates with Supabase API for:
- Authentication
- User profiles
- Task CRUD operations
- Real-time updates via WebSockets
- File storage

## Legal Documents

### Privacy Policy
Covers data collection, usage, and user rights.

### Terms of Service
Terms for using the application.

### GDPR Compliance
GDPR-specific data handling and user rights.

## Deployment

### Deploy to Vercel

```bash
npm run build
vercel deploy
```

### Deploy to Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### Environment Variables for Production

Set these in your deployment platform:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_API_URL`

## Development Tips

### Debug Real-Time Updates
Open browser console to see Supabase subscription logs.

### Test RLS Policies
Create multiple test accounts and verify data isolation.

### Performance Optimization
- Component lazy loading ready
- Image optimization recommended
- Database indexes for frequently queried fields

## Troubleshooting

### Connection Issues
- Verify Supabase URL and keys
- Check CORS settings in Supabase
- Ensure network access to Supabase

### Authentication Errors
- Clear browser cookies/localStorage
- Verify phone number format
- Check password requirements (min 6 chars)

### Database Errors
- Run SUPABASE_SETUP.md migration script
- Verify RLS policies are enabled
- Check user has correct role permissions

## Support

For issues and feature requests, open an issue or contact:
- **Email**: support@pogo.app
- **Privacy Concerns**: privacy@pogo.app
- **Data Protection**: dpo@pogo.app

## License

MIT License - See LICENSE file for details

## Next Steps

1. ✅ Complete Supabase setup
2. ✅ Launch web version
3. 🔄 Create React Native mobile apps (iOS & Android)
4. 🔄 Add advanced features (AI task suggestions, team collaboration)
5. 🔄 Implement premium subscription tiers

---

**Ready to use POGO?** Start by [setting up Supabase](./SUPABASE_SETUP.md) then run `npm run dev` to get started!
