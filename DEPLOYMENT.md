# Deploy to Vercel - Quick Guide

## Option 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push Your Code to GitHub
```bash
# Make sure all changes are committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in (or create an account)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings

### Step 3: Configure Environment Variables
1. In the project settings, go to **Settings → Environment Variables**
2. Add your Anthropic API key:
   - **Name**: `ANTHROPIC_API_KEY`
   - **Value**: Your API key from `.env.local`
   - **Environment**: Select all (Production, Preview, Development)
3. Click **Save**

### Step 4: Deploy
1. Click **"Deploy"**
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at `https://your-project-name.vercel.app`

## Option 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
# First deployment (will ask questions)
vercel

# For production deployment
vercel --prod
```

### Step 4: Set Environment Variables
```bash
vercel env add ANTHROPIC_API_KEY
# Paste your API key when prompted
# Select all environments (Production, Preview, Development)
```

## After Deployment

### Get Your Live URL
- Your site will be available at: `https://your-project-name.vercel.app`
- You can find this in your Vercel dashboard

### Share with Contacts
1. **Copy your Vercel URL** from the dashboard
2. Share it directly: `https://your-project-name.vercel.app`
3. Or set up a custom domain (optional):
   - Go to **Settings → Domains**
   - Add your custom domain (e.g., `felipeclavijo.com`)

### Custom Domain (Optional)
1. In Vercel dashboard: **Settings → Domains**
2. Add your domain (e.g., `felipeclavijo.com`)
3. Follow DNS configuration instructions
4. Your site will be available at your custom domain

## Important Notes

- ✅ Your `.env.local` file is already in `.gitignore` (safe)
- ✅ The API route is configured with 30s timeout
- ✅ All dependencies are in `package.json`
- ⚠️ **Don't commit your API key** - only add it in Vercel dashboard

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify TypeScript compiles: `npm run build`

### API Chat Not Working
- Verify `ANTHROPIC_API_KEY` is set in Vercel environment variables
- Check that it's enabled for all environments (Production, Preview, Development)

### Need Help?
- Vercel Docs: https://vercel.com/docs
- Check deployment logs in Vercel dashboard

