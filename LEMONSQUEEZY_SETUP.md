# LemonSqueezy — Step-by-Step Setup Guide

This is your complete, do-this-in-order playbook to launch the **English Course** as a paid product on LemonSqueezy. Follow it top-to-bottom; each step takes 5–15 minutes.

---

## Final Pricing Recommendation

After reviewing the product objectively (20 lessons, 80 skill modules, placement test, assessments, cloud sync, PWA, pronunciation feedback), here is the **honest, market-validated** pricing:

| Tier | Price | When to use |
|---|---|---|
| **Launch price** | **$19** | First 100 customers. Creates urgency. Buyers feel they got a deal. |
| **Standard price** | **$39** | Default after 100 sales. Sits above eBook, below subscriptions. |
| **Bundle price** | **$59** | Optional upsell with PDF workbook + certificate of completion. |

**Why $19 / $39 (not $29 / $49):**
- 20 lessons is a **focused** course, not a 100-hour bootcamp. Be honest with the price.
- $39 keeps you above commodity Udemy courses ($15–$25) but well below big subscriptions.
- $19 launch is the impulse-buy zone; people don't even comparison-shop at this price.
- The $20 jump from launch to standard ($19 → $39) makes the launch feel like a 51% discount — strong urgency.

**Why a one-time payment (not subscription):**
- No churn to manage.
- No support burden for cancellations.
- Easier to market ("Lifetime access" is a stronger headline).
- Subscription only makes sense if you ship new content monthly — which is not the current model.

---

## Part 1 — Create Your LemonSqueezy Store (10 minutes)

1. Go to [lemonsqueezy.com](https://www.lemonsqueezy.com) and sign up for a free account.
2. Verify your email.
3. **Create a Store**:
   - Store name: `English Course` (or your brand)
   - Store URL: `english-course.lemonsqueezy.com` (this becomes your checkout subdomain)
   - Default currency: **USD**
4. Fill in your **Tax & Payout details** (Settings → Payments):
   - Add your bank account or PayPal for payouts.
   - Provide your tax info (W-9 for US, W-8BEN for non-US).
   - LemonSqueezy is the **Merchant of Record** — they collect & remit EU VAT, UK VAT, US sales tax automatically. You don't have to register for VAT in 70+ countries.

---

## Part 2 — Create Your Product (15 minutes)

1. **Products → New Product → Digital Product (Single Payment)**.

2. **Product details**:
   - **Name**: `English Course — A1 to C2 Lifetime Access`
   - **Description** (paste this; edit as you like):
     ```
     Master English from absolute beginner (A1) to near-native proficiency (C2) with this complete CEFR-aligned course.

     ✓ 20 structured lessons across 6 levels
     ✓ Reading + Listening + Speaking + Writing in every lesson
     ✓ Built-in pronunciation feedback (microphone)
     ✓ Placement test + 6 level assessments
     ✓ Cloud-synced progress on all devices
     ✓ Install on your phone (works offline)

     One-time payment. Lifetime access. No subscription. 30-day money-back guarantee.
     ```
   - **Status**: Draft (we'll publish later).

3. **Pricing**:
   - **Price**: `19.00 USD` (launch price)
   - Tick **"Pay what you want"**: ❌ off
   - Tick **"Recurring"**: ❌ off (this is a one-time payment)

4. **Delivery — IMPORTANT**: Select **"License Key"** as the delivery method.
   - This is what unlocks the app for the customer.
   - Configure license key options:
     - **Activation limit**: `3` (lets the customer use the app on up to 3 devices/accounts)
     - **Length (in days)**: `0` = never expires (lifetime — what we want)
     - **License key length**: 36 characters with dashes (default, fine)

5. **Files / Download** section:
   - You can either upload a small "Welcome PDF" with redemption instructions, OR leave empty (the license key alone is enough).
   - Recommended: upload a 1-page PDF that says:
     ```
     Welcome to the English Course!

     Your license key is included in this email.

     To activate:
       1. Visit: https://YOUR-APP-URL.vercel.app
       2. Sign up (use the same email as your purchase)
       3. Click the "Unlock" or "Upgrade" button anywhere in the app
       4. Choose "I have a key" and paste your license key
       5. You're in! All 6 levels are now unlocked forever.

     Need help? Reply to this email.
     ```

6. **Marketing assets** (we'll generate these in Part 4):
   - Cover image (1280×720)
   - Thumbnail (smaller version)
   - Gallery (up to 8 images)

7. **Save as Draft** for now — we'll publish after testing.

---

## Part 3 — Connect Your Product to the App (10 minutes)

The app needs **your real LemonSqueezy checkout URL** to send buyers to the right page.

1. In LemonSqueezy: open your product → click **"Share"** → copy the **"Buy now URL"**. It looks like:
   ```
   https://english-course.lemonsqueezy.com/buy/abc12345-de67-89ab-cdef-1234567890ab
   ```

2. Add it to your `.env` file (create one if it doesn't exist) at the project root:
   ```env
   VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
   VITE_SUPABASE_ANON_KEY=YOUR_ANON_KEY
   VITE_LEMONSQUEEZY_CHECKOUT_URL=https://english-course.lemonsqueezy.com/buy/abc12345-de67-89ab-cdef-1234567890ab
   ```

3. Also add the same env var on **Vercel**: Project → Settings → Environment Variables.

4. Redeploy. The "Unlock" / "Upgrade" buttons in the app will now route buyers to your real checkout.

---

## Part 4 — Run the Database Migration in Supabase (5 minutes)

The app needs an `entitlements` table to track who has paid.

1. Open your Supabase project → **SQL Editor** → **New query**.
2. Open the file `supabase/migrations/001_entitlements.sql` from this repo, copy its contents, and paste them into the SQL editor.
3. Click **Run**. You should see "Success. No rows returned."
4. Verify under **Table Editor** that `entitlements` exists with RLS enabled.

That's it — no webhooks, no Edge Functions needed. The app handles license activation entirely on the client by calling LemonSqueezy's public License API.

---

## Part 5 — Capture Marketing Screenshots (15 minutes)

LemonSqueezy product pages convert ~3–5x better with great screenshots. You need:

| Asset | Recommended size | Purpose |
|---|---|---|
| **Cover image** | 1280×720 (16:9) | Top of LemonSqueezy product page |
| **Thumbnail** | 1200×630 (Open Graph) | Social-share previews when people share your link |
| **Gallery shots** | 1280×720 each, 4–8 total | Carousel showing screens & features |
| **Logo / icon** | 512×512 | Square brand mark |

### Option A — Manual capture (simplest)

1. Run the app: `npm run dev` and open `http://localhost:5173`.
2. In Chrome, open DevTools → click **"Toggle device toolbar"** (Ctrl+Shift+M) → set viewport to **1280 × 720** with DPR 2.
3. Sign in (or create a test account).
4. **Capture these 8 screens** (each one becomes a gallery image):

   | # | URL/Screen | What to highlight |
   |---|---|---|
   | 1 | `/` (Home, signed in) | Hero + launch-offer pricing banner |
   | 2 | `/dashboard` | Course overview with locked levels |
   | 3 | `/level/A1` | Lessons listing, skills practice tab |
   | 4 | `/lesson/a1-u1-l1` (Learn tab) | Grammar explanation styling |
   | 5 | `/lesson/a1-u1-l1` (4 Skills Practice tab → Listening) | Audio player + comprehension |
   | 6 | `/lesson/a1-u1-l1` (Skills → Speaking) | Pronunciation challenge with mic |
   | 7 | `/placement-test` (mid-test) | Question UI |
   | 8 | Paywall modal open | The pricing card with $19/$39 |

5. **Capture method**: In Chrome DevTools, click the **3-dot menu in the device toolbar** → **"Capture screenshot"** (or "Capture full size screenshot" for long pages).

6. Optional: open `https://www.canva.com` (free) → use a template called **"Product mockup"** to drop your screenshots into a phone/laptop frame for a professional look.

### Option B — Automated capture (using Playwright)

The repo includes `scripts/capture-screenshots.mjs`. To use it:

```bash
npm install -D playwright
npx playwright install chromium
npm run screenshots
```

The script will:
1. Open Chromium at 1280×720.
2. Navigate to your local app.
3. Pause for you to sign in manually.
4. After you press Enter, it captures all 8 screens automatically into `marketing/screenshots/`.

Use these PNG files when uploading to LemonSqueezy.

### Logo / icon (512×512)

Quickest path:
- Open the `public/icon-512.png` (or generate one at [logo.com](https://logo.com) free).
- Upload to LemonSqueezy as the product thumbnail.

---

## Part 6 — Test the Full Purchase Flow (10 minutes)

LemonSqueezy has a **Test Mode** — you can buy your own product without paying real money.

1. In LemonSqueezy, top-right corner: toggle **"Test mode"** ON.
2. Open your product's checkout URL.
3. Pay with the test card: `4242 4242 4242 4242`, any future expiry, any 3 digits CVC.
4. After purchase, check your email — you should receive your **license key**.
5. Open your app → click **"Unlock"** or **"Upgrade"** → switch to **"I have a key"** tab → paste the license → click **Activate**.
6. The app should reload and unlock all levels (the lock icons disappear, the upgrade banner is gone).
7. In Supabase **Table Editor → entitlements**, verify a new row was created with your user_id.

**If activation fails**: open the browser DevTools console — the LemonSqueezy API returns a clear error message (e.g., "license key not found").

Once everything works, **switch off Test Mode** and **publish** your product.

---

## Part 7 — Set the Launch Trick (Auto-Raise from $19 to $39)

Two ways to implement the "first 100 buyers at $19" mechanic:

### Method A — Manual price change (simplest)

- Set product price to `$19`.
- Watch your sales counter.
- After ~100 sales (or after 2–4 weeks, whichever feels right), edit the product → change price to `$39`.
- Update the in-app pricing banner: open `src/components/Home.jsx` and `src/components/Paywall.jsx` and change `$19` to `$39`. Remove the strikethrough `$39`.

### Method B — Discount code (more flexible)

- Set product price to `$39`.
- Create a **Discount Code** in LemonSqueezy: name it `LAUNCH50`, set 50% off, **Usage limit: 100 redemptions**.
- Append to your checkout URL: `?aff=&checkout[discount_code]=LAUNCH50`.
- After 100 redemptions, the code automatically becomes invalid — buyers see the full $39.
- Tell the in-app banner to use the discounted URL by setting:
  ```env
  VITE_LEMONSQUEEZY_CHECKOUT_URL=https://your-store.lemonsqueezy.com/buy/PRODUCT_UUID?checkout[discount_code]=LAUNCH50
  ```

**Recommendation**: Start with Method A — it's 30 seconds of work and gives you total control.

---

## Part 8 — Pre-Launch Checklist

Before you announce the product publicly, verify:

- [ ] Product is **published** (not Draft) on LemonSqueezy.
- [ ] Test purchase succeeded with a real card (small test purchase, then refund yourself).
- [ ] License activation works end-to-end in production (Vercel-deployed app).
- [ ] `VITE_LEMONSQUEEZY_CHECKOUT_URL` is set on Vercel and the deployed Paywall opens the right checkout.
- [ ] Product listing has cover image, 4+ gallery shots, full description.
- [ ] **30-day money-back guarantee** is mentioned (LemonSqueezy honours it on request).
- [ ] Terms of Service and Privacy Policy URLs are filled in on the LemonSqueezy product (they ask for these). Use:
  - `https://YOUR-APP.vercel.app/#/legal/terms`
  - `https://YOUR-APP.vercel.app/#/legal/privacy`
- [ ] Updated `CONTACT_EMAIL`, `COMPANY_NAME`, `EFFECTIVE_DATE` in `src/components/Legal.jsx`.
- [ ] You have a **support email** address that you actually monitor (e.g., `support@yourbrand.com`).

---

## Part 9 — Day-of-Launch Marketing Checklist

When you flip the switch from Test → Live:

1. **Product Hunt**: Schedule launch for Tuesday or Wednesday at 12:01 AM Pacific. Have a clear tagline ("Master English from A1 to C2 — lifetime access, $19").
2. **Reddit**: Post in `r/EnglishLearning`, `r/languagelearning` with a genuine "I built this" story + a 30%-off code for Redditors.
3. **Indie Hackers**: Share your launch story.
4. **Twitter/X**: Tweet a 30-second screen-recording demo + the launch link.
5. **Your network**: Email/DM 20–50 people personally (this often drives the first 10 sales).

Set a target of **30 sales in the first week**. Even at $19 launch price that's $570 — and more importantly, you'll have your first reviews and social proof.

---

## Quick Reference — Important LemonSqueezy URLs

- Dashboard: https://app.lemonsqueezy.com
- License API docs: https://docs.lemonsqueezy.com/api/license-api
- Webhook docs (if you ever need them): https://docs.lemonsqueezy.com/help/webhooks
- Affiliate program: https://app.lemonsqueezy.com/settings/affiliates

---

## Troubleshooting

**"License activation failed" when redeeming a key**
- Check the key is from a real (non-test-mode) purchase, OR you're still in test mode and using a test-mode key.
- Activation limits exhausted (3 by default) — increase the limit in LemonSqueezy, or have the customer disable an old instance.

**Customer says "I bought but can't unlock"**
- Look up their email in Supabase `auth.users` table.
- Look them up in LemonSqueezy **Customers** → find their license → copy the key → email it to them.

**The Paywall component shows "REPLACE_WITH_PRODUCT_UUID"**
- You forgot to set `VITE_LEMONSQUEEZY_CHECKOUT_URL` in your `.env` (locally) or Vercel (in production). Set it and redeploy.

**Refunds**
- LemonSqueezy → Orders → click order → **Refund**. The license key is auto-revoked.
- The app re-validates licenses with LemonSqueezy on app open, so refunded customers will lose access automatically within 24 hours of refund.
