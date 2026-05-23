# Deployment Guide — English Course App

This guide covers deploying the app to **Vercel** (hosting) + **Supabase** (auth & database), making it installable as a phone app (PWA), and selling it on **LemonSqueezy**.

---
Data base Password: umyf3BCw2FuO33Hg
## Part 1: Supabase Setup (Database + Authentication)

### Step 1 — Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up / log in.
2. Click **"New Project"**.
3. Choose an organization (or create one).
4. Fill in:
   - **Project name**: `english-course`
   - **Database password**: pick a strong password (save it somewhere safe)
   - **Region**: choose the closest to your users
5. Click **"Create new project"** and wait ~2 minutes for it to be ready.

### Step 2 — Get Your API Keys

1. In your Supabase dashboard, go to **Settings → API**.
2. Copy these two values:
   - **Project URL** — looks like `https://abcdefg.supabase.co`
   - **anon / public key** — a long string starting with `eyJ...`
3. Create a `.env` file in your project root (copy from `.env.example`):

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Step 3 — Create the Database Table

1. In your Supabase dashboard, go to **SQL Editor**.
2. Click **"New query"** and paste this SQL:

```sql
-- Create the user_progress table
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  progress_data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT user_progress_user_id_key UNIQUE (user_id)
);

-- Enable Row Level Security
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only read their own progress
CREATE POLICY "Users can read own progress"
  ON user_progress
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Users can insert their own progress
CREATE POLICY "Users can insert own progress"
  ON user_progress
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own progress
CREATE POLICY "Users can update own progress"
  ON user_progress
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
```

3. Click **"Run"**. You should see "Success" for each statement.

### Step 4 — Configure Authentication

1. Go to **Authentication → Providers** in Supabase dashboard.
2. Make sure **Email** is enabled (it is by default).
3. Optional: Go to **Authentication → URL Configuration** and set:
   - **Site URL**: `https://your-app-name.vercel.app` (set this after Vercel deploy)
   - **Redirect URLs**: `https://your-app-name.vercel.app`

---

## Part 2: Deploy to Vercel

### Step 1 — Push Code to GitHub

1. Create a GitHub repository (go to [github.com/new](https://github.com/new)).
2. Name it `english-course` (or whatever you prefer).
3. In your project folder, run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/english-course.git
git push -u origin main
```

> **Important**: Make sure `.env` is in your `.gitignore` so your secrets aren't pushed!

### Step 2 — Create a .gitignore

Make sure your `.gitignore` includes:

```
node_modules
dist
.env
.env.local
```

### Step 3 — Deploy on Vercel

1. Go to [https://vercel.com](https://vercel.com) and sign up / log in with GitHub.
2. Click **"Add New..." → "Project"**.
3. Import your `english-course` GitHub repository.
4. Vercel will auto-detect it as a Vite project. Verify:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Add Environment Variables** (click "Environment Variables"):
   - `VITE_SUPABASE_URL` = your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key
6. Click **"Deploy"**.
7. Wait ~1 minute. Your app will be live at `https://your-app-name.vercel.app`!

### Step 4 — Update Supabase Redirect URLs

After deploying, go back to Supabase:
1. **Authentication → URL Configuration**
2. Set **Site URL** to your Vercel URL: `https://your-app-name.vercel.app`
3. Add the same URL to **Redirect URLs**.

---

## Part 3: Install as Phone App (PWA)

The app is already configured as a Progressive Web App. Users can install it:

### On Android (Chrome):
1. Open the app URL in Chrome.
2. Tap the **three-dot menu** (⋮) → **"Add to Home Screen"** or **"Install App"**.
3. The app will appear on the home screen like a native app.

### On iPhone (Safari):
1. Open the app URL in Safari.
2. Tap the **Share button** (□↑) → **"Add to Home Screen"**.
3. Tap **"Add"**.
4. The app will appear on the home screen with the app icon.

### On Desktop (Chrome/Edge):
1. Open the app URL.
2. Click the **install icon** (⊕) in the address bar.
3. Or: three-dot menu → "Install English Course..."

---

## Part 4: Selling on LemonSqueezy as a Digital Product

### What You Need

1. **A LemonSqueezy account** — Sign up at [https://lemonsqueezy.com](https://lemonsqueezy.com)

2. **Product type**: Choose **"Digital Product"** — specifically:
   - You can sell it as a **SaaS subscription** (monthly/yearly access) OR
   - As a **one-time purchase** (lifetime access)

3. **What to deliver to the buyer**:

   #### Option A: Sell Access (SaaS model — recommended)
   - The buyer gets an **account on your deployed app** (the Vercel URL).
   - You create their account manually, or set up a webhook to auto-create accounts.
   - LemonSqueezy has **license key validation** you can integrate.
   - This way you keep control — buyers access your hosted app.

   #### Option B: Sell the Source Code
   - Package the entire project as a `.zip` file.
   - Include the `DEPLOY.md` guide so buyers can self-host.
   - Remove your `.env` file — buyers use their own Supabase credentials.

4. **Required assets for LemonSqueezy listing**:
   - **Product name**: e.g., "English Course — Complete CEFR Learning Platform"
   - **Description**: What's included, features, levels covered
   - **Cover image** (1200×630px recommended): A screenshot or designed banner
   - **Pricing**: Set your price (e.g., $29 one-time or $9/month)
   - **Product file**: Either a `.zip` of source code OR just the access URL
   - **Thumbnail** (400×400px): App icon or logo

5. **Legal requirements**:
   - **Terms of Service**: What the buyer gets, refund policy
   - **Privacy Policy**: How you handle user data (required if collecting emails)
   - You can generate both at [https://www.termsfeed.com](https://www.termsfeed.com)

6. **Optional but recommended**:
   - **Demo video** or screenshots showing the app in action
   - **FAQ section** on the product page
   - Set up **LemonSqueezy webhooks** to auto-provision accounts on purchase
   - A **landing page** (LemonSqueezy has a built-in checkout page)

### LemonSqueezy Setup Steps

1. Create a **Store** in LemonSqueezy dashboard.
2. Go to **Products → New Product**.
3. Fill in name, description, pricing.
4. Upload product files (`.zip`) or set up as a **redirect to your app URL**.
5. Customize the **checkout page**.
6. Share the **checkout link** or embed the button on your website.
7. LemonSqueezy handles payments, taxes, and delivery.

---

## Quick Reference

| Service       | Dashboard URL                          |
|---------------|----------------------------------------|
| Supabase      | https://app.supabase.com               |
| Vercel        | https://vercel.com/dashboard           |
| LemonSqueezy  | https://app.lemonsqueezy.com           |
| GitHub        | https://github.com                     |

---

## Troubleshooting

- **"Invalid login credentials"**: Make sure the user confirmed their email first.
- **Progress not saving**: Check browser console for Supabase errors. Verify your `.env` keys are correct.
- **PWA not installable**: Make sure you're accessing via HTTPS (Vercel provides this automatically).
- **Build fails on Vercel**: Make sure environment variables are set in Vercel dashboard (Settings → Environment Variables).
