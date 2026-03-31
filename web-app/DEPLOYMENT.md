# POGO Web App Deployment Guide

Complete guide to deploy the POGO web app to production.

## Pre-Deployment Checklist

- [ ] Supabase project created and configured
- [ ] Database schema migrated (run SUPABASE_SETUP.md)
- [ ] Environment variables set correctly
- [ ] All tests passing
- [ ] Code reviewed and merged to main branch
- [ ] Legal documents updated with company info
- [ ] SSL certificate obtained
- [ ] Domain name configured

## Environment Variables

Create `.env.production` with these variables:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
VITE_API_URL=https://api.yourdomain.com
```

### How to Get Supabase Credentials

1. Go to Supabase Dashboard
2. Select your project
3. Settings → API
4. Copy:
   - Project URL → `VITE_SUPABASE_URL`
   - `anon` public key → `VITE_SUPABASE_ANON_KEY`

## Deployment Platforms

### Option 1: Vercel (Recommended for React)

#### Step 1: Prepare for Deployment
```bash
npm run build
```

#### Step 2: Create Vercel Account
- Visit [vercel.com](https://vercel.com)
- Sign up with GitHub/GitLab/Bitbucket
- Connect your repository

#### Step 3: Configure Environment Variables
1. In Vercel Dashboard → Project Settings
2. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_API_URL`

#### Step 4: Deploy
```bash
npm install -g vercel
vercel login
vercel --prod
```

#### Step 5: Configure Custom Domain
1. Vercel Dashboard → Domains
2. Add your domain
3. Update DNS records as instructed

#### Vercel Build Settings
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

---

### Option 2: Netlify

#### Step 1: Prepare
```bash
npm run build
```

#### Step 2: Create Netlify Account
- Visit [netlify.com](https://netlify.com)
- Sign up with GitHub/GitLab/Bitbucket
- Click "New site from Git"

#### Step 3: Connect Repository
1. Select your Git provider
2. Authorize Netlify
3. Choose your repository

#### Step 4: Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `dist`

#### Step 5: Set Environment Variables
1. Netlify Dashboard → Site Settings → Build & Deploy → Environment
2. Add all VITE variables

#### Step 6: Deploy
Netlify will automatically deploy on every push to main branch.

#### Step 7: Configure Custom Domain
1. Site Settings → Domain Management
2. Add custom domain
3. Update DNS or use Netlify nameservers

---

### Option 3: AWS S3 + CloudFront

#### Step 1: Create S3 Bucket
```bash
aws s3 mb s3://pogo-app --region us-east-1
```

#### Step 2: Build App
```bash
npm run build
```

#### Step 3: Deploy to S3
```bash
aws s3 sync dist/ s3://pogo-app --delete
```

#### Step 4: Configure CloudFront
1. AWS Console → CloudFront
2. Create distribution
3. Point to S3 bucket
4. Add SSL certificate
5. Configure domain

#### Step 5: Set Up CI/CD
Add GitHub Actions workflow:

```yaml
name: Deploy to AWS

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      - run: aws s3 sync dist/ s3://pogo-app --delete
```

---

### Option 4: Docker + Heroku

#### Step 1: Create Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
```

#### Step 2: Create .dockerignore
```
node_modules
npm-debug.log
dist
.git
.env
```

#### Step 3: Deploy to Heroku
```bash
heroku login
heroku create pogo-app
heroku config:set VITE_SUPABASE_URL=your_url
heroku config:set VITE_SUPABASE_ANON_KEY=your_key
git push heroku main
```

---

## Post-Deployment Verification

### 1. Test Authentication
- [ ] Sign up with new account works
- [ ] Phone number validation works
- [ ] Password confirmation works
- [ ] Sign in works
- [ ] Sign out works

### 2. Test Dashboard
- [ ] Can create tasks
- [ ] Can edit tasks
- [ ] Can delete tasks
- [ ] Can complete tasks
- [ ] Real-time updates work
- [ ] Stats display correctly

### 3. Test Legal Pages
- [ ] Privacy Policy loads
- [ ] Terms of Service loads
- [ ] GDPR page loads
- [ ] All links work

### 4. Performance Checks
- [ ] Page load time < 3s
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 3s
- [ ] Cumulative Layout Shift < 0.1

### 5. Security Checks
- [ ] HTTPS enforced
- [ ] Headers correct (CSP, X-Frame-Options)
- [ ] CORS properly configured
- [ ] No API keys exposed in client code

Use Lighthouse for automated testing:
```bash
npm install -g lighthouse
lighthouse https://pogo-app.com --chrome-flags="--headless"
```

---

## SSL/HTTPS Configuration

### For Custom Domains

#### Vercel & Netlify
Automatic SSL via Let's Encrypt (free).

#### AWS
1. AWS Certificate Manager → Request Certificate
2. Verify domain ownership
3. Attach to CloudFront distribution

#### Manual with Let's Encrypt
```bash
# Using Certbot
certbot certonly --standalone -d yourdomain.com
```

---

## Monitoring & Analytics

### Enable Supabase Monitoring
1. Supabase Dashboard → Database → Logs
2. Monitor slow queries
3. Check authentication logs

### Setup Error Tracking (Optional)
```bash
npm install sentry-react
```

Configure in main.jsx:
```javascript
import * as Sentry from "@sentry/react"

Sentry.init({
  dsn: process.env.VITE_SENTRY_DSN,
  environment: process.env.NODE_ENV,
})
```

### Enable Google Analytics (Optional)
```bash
npm install react-ga4
```

---

## Database Backups

### Supabase Automatic Backups
- Daily automatic backups (7-day retention)
- Enable in Project Settings → Backups

### Manual Backup
```bash
# Export database
pg_dump -h db.supabase.co -U postgres -d postgres > backup.sql
```

---

## Scaling Considerations

### Database
- Monitor connections and queries
- Add database indexes for frequently queried fields
- Consider read replicas for high traffic

### Frontend
- Enable CDN caching
- Implement lazy loading for components
- Optimize images

### Backend
- Scale Supabase as needed
- Monitor authentication rate limits
- Cache API responses

---

## Troubleshooting Deployment

### Issue: Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Environment Variables Not Working
- Ensure variables are prefixed with `VITE_`
- Restart build after adding variables
- Check variable names exactly match

### Issue: CORS Errors
1. Supabase Dashboard → Settings → API → CORS
2. Add your domain:
   ```
   https://yourdomain.com
   https://www.yourdomain.com
   ```

### Issue: Slow Performance
1. Check bundle size:
   ```bash
   npm install -g webpack-bundle-analyzer
   webpack-bundle-analyzer dist/assets/*.js
   ```
2. Enable gzip compression
3. Optimize images
4. Use content delivery network (CDN)

---

## CI/CD Pipeline Example (GitHub Actions)

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run lint
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

---

## Domain Configuration (DNS)

### Example: Using Namecheap

1. Point to Vercel/Netlify:
   - Type: CNAME
   - Name: @
   - Value: cname.vercel-dns.com

2. For API (if separate):
   - Type: CNAME
   - Name: api
   - Value: your-api.example.com

---

## Maintenance

### Weekly
- Monitor error logs
- Check performance metrics
- Review user feedback

### Monthly
- Security updates
- Database optimization
- Backup verification

### Quarterly
- Performance analysis
- Feature prioritization
- User analytics review

---

## Support During Deployment

**Need help?** Contact deployment support:
- Vercel: vercel.com/support
- Netlify: support@netlify.com
- AWS: aws.amazon.com/support
- Supabase: supabase.com/support

---

**Deployment Date**: _________________
**Deployed By**: _________________
**Production URL**: _________________
