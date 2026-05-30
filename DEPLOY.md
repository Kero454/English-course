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

## Part 4: Pricing Strategy

This section gives you a concrete recommendation for how to price the **English Course** on LemonSqueezy.

### Market Reality Check

| Competitor              | Model           | Price                  |
|-------------------------|-----------------|------------------------|
| Duolingo Super          | Subscription    | $7/month or $84/year   |
| Babbel                  | Subscription    | $14/month or $99/year  |
| Busuu Premium           | Subscription    | $14/month or $84/year  |
| italki (1-on-1 tutor)   | Per session     | $10-30/hour            |
| Cambridge English books | One-time eBook  | $20-40                 |
| Udemy English courses   | One-time        | $15-200 (often $20)    |

Your product sits between an **eBook** (static, one-time) and a **SaaS subscription** (recurring access). The fact that it has cloud sync, auth, PWA install, 4-skills practice, placement test, and assessments justifies positioning it **above eBook pricing**.

### Recommended Pricing — Three Tiers

This is the sweet spot for digital learning products on LemonSqueezy:

#### Option 1 — One-Time Purchase (recommended for v1)

| Tier            | Price        | What buyer gets                                      |
|-----------------|--------------|------------------------------------------------------|
| **Starter**     | **$29**      | Lifetime access to all 6 levels (A1-C2)              |
| **Pro**         | **$49**      | Above + downloadable PDF workbook + future updates   |
| **Lifetime+**   | **$79**      | Above + 1 hour of email Q&A support                  |

**Why this works:**
- $29 is the impulse-buy zone for self-learners (compare to a single restaurant meal).
- $49 is the sweet spot most digital course sellers hit (psychological "value tier").
- A higher tier makes the middle tier look like a bargain (anchoring effect).

#### Option 2 — Subscription Model

| Tier            | Price        | What buyer gets                                      |
|-----------------|--------------|------------------------------------------------------|
| **Monthly**     | **$9/mo**    | Full access while subscribed                         |
| **Annual**      | **$59/yr**   | Same, but ~45% discount (best long-term value)       |

**Use this if:** You plan to release new content regularly (new lessons, new assessments).

#### Option 3 — Launch / Limited-Time Offer

- **Launch price: $19** for the first 100 customers (creates urgency + early reviews).
- Then raise to standard price ($29-$49).
- This is the **fastest way to validate** that people actually want to buy.

### Pricing Psychology Tips

1. **Use $29 / $49 / $79** instead of $30/$50/$80 — the "9" ending consistently increases conversions by 5-15%.
2. **Anchor with a higher fake "value"**: Show "Originally $99 — now $49" on the LemonSqueezy product page.
3. **Lifetime > Subscription** for an indie launch — easier to market, no churn to manage.
4. **Charge in USD**, not your local currency — most international buyers expect it.
5. **Don't price below $19** — too low signals "low quality" in the digital course market.

### What to Bundle (to Justify Higher Prices)

- A **printable PDF workbook** (export your lessons as PDF — free with the `vite-plugin-pwa` ecosystem or a tool like Puppeteer).
- A **certificate of completion** generated after each level assessment (>=80% score).
- **Email-based personalised feedback** on 3 writing tasks (premium tier).
- **A Notion or Google Sheet study tracker** template.
- **Bonus content**: "100 Common Mistakes" cheat sheet, IPA pronunciation guide, etc.

---

## Part 5: Marketing — LemonSqueezy vs. You

**Short answer: LemonSqueezy handles checkout & payment, but YOU drive the traffic.**

### What LemonSqueezy DOES Handle

- Payment processing (cards, PayPal, Apple/Google Pay).
- **EU/UK VAT and US sales tax** — they are the Merchant of Record, so they collect and remit taxes on your behalf. This is huge.
- Invoicing, receipts, and refunds.
- Fraud detection.
- A **hosted checkout page** at `yourstore.lemonsqueezy.com/buy/...`.
- Built-in **affiliate program** (optional — let others promote for a commission).
- Discount codes & limited-time offers.
- Webhooks for automation.

### What LemonSqueezy Does NOT Do

- **They do not market your product for you.** There is no built-in audience.
- They will not write blog posts, run ads, or send traffic.
- The LemonSqueezy "discover" page exists, but generates minimal sales.

### Your Marketing Plan (Realistic, Low-Budget)

#### Week 1-2 — Free, High-Leverage Channels

1. **Product Hunt launch** — free, can drive 200-2000 visitors in one day. Schedule for a Tuesday or Wednesday.
2. **Reddit** — post in `r/EnglishLearning`, `r/languagelearning`, `r/learnenglish`, `r/EFL`. Don't spam; write a genuine "I built this" post and offer a discount code.
3. **Indie Hackers** — post your launch story. The community loves "I built X with Y, here's what I learned" posts.
4. **Hacker News** ("Show HN") — only if you have something technically interesting to highlight (PWA + Supabase stack works).
5. **Twitter/X** — build in public; tweet screenshots, progress, and lessons learned during development.

#### Week 3-4 — Paid Tests (Optional, $50-200 budget)

6. **Facebook/Instagram ads** targeting English learners in non-English-speaking countries (Egypt, Brazil, Vietnam, Turkey, Spain, Mexico). Test with $5/day for a week, measure cost-per-click.
7. **TikTok organic** — short videos showing tricky grammar points or pronunciation tips. Even 1 viral video can drive thousands of visitors. Free, high-upside.

#### Month 2+ — SEO (Slow but Compounding)

8. **Blog content** — write articles like "How long does it take to go from A1 to B2?", "10 most confusing English idioms explained", "Free CEFR placement test online". Each post can rank on Google and bring buyers for years. Use the `/blog` route or a tool like Astro.
9. **YouTube** — record yourself explaining lessons. Each video links to your product. Compounds over time.
10. **Affiliate partnerships** — reach out to language YouTubers and offer 30% commission via LemonSqueezy's affiliate program.

### Pricing Page Best Practices

When you build a landing page for your product (highly recommended — not just the LemonSqueezy checkout), include:

- **A bold headline** focused on the buyer's transformation, not features. Example: "Go from A1 to C2 in 12 months — without a tutor."
- **Screenshots and a 60-second demo video.**
- **Social proof** — 3-5 testimonials (start by giving free access in exchange for honest reviews).
- **Money-back guarantee** — "30-day refund, no questions asked" boosts conversion by 20-40%.
- **The "Who is this for / not for"** section — qualifies buyers and reduces refunds.
- **An FAQ** — answers objections before they kill the sale.

### Realistic Sales Expectations (First 6 Months)

Be honest about what's normal:

| Marketing effort           | Likely first 6 months |
|----------------------------|----------------------|
| Just LemonSqueezy listing  | **5-30 sales total** |
| + Product Hunt launch      | 50-200 sales         |
| + Reddit + Twitter active  | 200-500 sales        |
| + Paid ads + content       | 500-2000+ sales      |

At $29 per sale, even 100 sales = $2,900 (LemonSqueezy fee: 5% + 50¢ per transaction).

### LemonSqueezy Fees Summary

- **5% + $0.50** per transaction.
- They handle tax remittance globally — worth the fee for international sales.
- No monthly subscription fee.
- No setup fee.

---

## Part 6: Legal Checklist Before Launch

The app already includes original-only content and legal pages, but verify these before selling:

1. **All lesson content is your own** — already true. Verified in `/src/data/courseContent.js` and `/src/data/skillsPractice.js`.
2. **No copyrighted audio files** — already true. Audio uses the browser's Web Speech API (free, on-device).
3. **No copyrighted images** — only Lucide icons (ISC license, free for commercial use).
4. **Terms of Service** — visit `/legal/terms` in the app. Update `support@example.com` to your real email.
5. **Privacy Policy** — visit `/legal/privacy`. Required by GDPR (EU), CCPA (California), and Supabase ToS.
6. **Copyright page** — visit `/legal/copyright`. Lists all open-source licenses correctly.
7. **Update placeholders** in `src/components/Legal.jsx`:
   - `COMPANY_NAME` (currently "English Course")
   - `CONTACT_EMAIL` (currently `support@example.com` — **change this!**)
   - `EFFECTIVE_DATE`
8. **LemonSqueezy product listing must link to your Terms & Privacy URLs** (e.g., `https://your-app.vercel.app/#/legal/terms`).

### Do You Need a Business Entity?

- **For < $5,000/year in sales**: Selling as a sole proprietor / individual via LemonSqueezy is fine in most countries. LemonSqueezy is the Merchant of Record, so they handle the sales tax burden.
- **For > $5,000/year**: Consider registering a single-person LLC (US) or equivalent in your country for liability protection and tax efficiency.
- LemonSqueezy works with individuals — you do not need a registered business to start.

---

## Part 7: Selling on LemonSqueezy as a Digital Product

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
