// Auto-capture marketing screenshots for LemonSqueezy product page.
//
// Prerequisites:
//   npm install -D playwright
//   npx playwright install chromium
//
// Usage:
//   1. Start your dev server in another terminal:    npm run dev
//   2. Run this script:                              node scripts/capture-screenshots.mjs
//   3. The browser will open. Sign in manually, then press ENTER in this terminal.
//   4. Screenshots will be saved to ./marketing/screenshots/
//
// LemonSqueezy ideal sizes:
//   - Cover image:  1280 x 720 (16:9)
//   - Gallery:      1280 x 720 each (4-8 images)
//   - Open Graph:   1200 x 630
//
// All output is at 1280x720 (DPR 2 = 2560x1440 effective resolution).

import { chromium } from 'playwright';
import { mkdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

const BASE_URL = process.env.SCREENSHOT_BASE_URL || 'http://localhost:5173';
const OUT_DIR = resolve('marketing/screenshots');
const VIEWPORT = { width: 1280, height: 720 };
const DEVICE_SCALE = 2; // Retina-quality

const SCREENS = [
  { name: '01-home-with-pricing',         path: '/#/',                                  wait: 1500, scrollY: 600 },
  { name: '02-home-hero',                 path: '/#/',                                  wait: 1500, scrollY: 0 },
  { name: '03-dashboard-with-paywall',    path: '/#/dashboard',                         wait: 1500, scrollY: 0 },
  { name: '04-dashboard-levels',          path: '/#/dashboard',                         wait: 1500, scrollY: 400 },
  { name: '05-level-overview-A1',         path: '/#/level/A1',                          wait: 1500, scrollY: 0 },
  { name: '06-lesson-content',            path: '/#/lesson/a1-u1-l1',                   wait: 1500, scrollY: 0 },
  { name: '07-lesson-skills-tab',         path: '/#/lesson/a1-u1-l1',                   wait: 1500, scrollY: 0, click: 'text=4 Skills Practice' },
  { name: '08-placement-test',            path: '/#/placement-test',                    wait: 1500, scrollY: 0 },
];

async function main() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  console.log('\n=== English Course — Marketing Screenshot Capture ===\n');
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Output:   ${OUT_DIR}`);
  console.log(`Viewport: ${VIEWPORT.width}x${VIEWPORT.height} (DPR ${DEVICE_SCALE})\n`);

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: DEVICE_SCALE,
  });
  const page = await context.newPage();

  // 1. Open the app and let the user sign in interactively
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  console.log('Browser opened. Please:');
  console.log('  1. Sign in (or create an account)');
  console.log('  2. Take the placement test (or skip to dashboard)');
  console.log('  3. When you see the dashboard, return to this terminal.\n');

  const rl = createInterface({ input: stdin, output: stdout });
  await rl.question('Press ENTER when you are signed in and ready to capture screenshots...');
  rl.close();

  console.log('\nCapturing screenshots...\n');

  for (const screen of SCREENS) {
    try {
      await page.goto(`${BASE_URL}${screen.path}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(screen.wait || 1000);

      if (screen.click) {
        try {
          await page.locator(screen.click).first().click({ timeout: 3000 });
          await page.waitForTimeout(800);
        } catch (e) {
          console.log(`  (click skipped on ${screen.name}: ${e.message})`);
        }
      }

      if (screen.scrollY) {
        await page.evaluate((y) => window.scrollTo(0, y), screen.scrollY);
        await page.waitForTimeout(400);
      }

      const file = resolve(OUT_DIR, `${screen.name}.png`);
      await page.screenshot({ path: file, fullPage: false });
      console.log(`  ✓ ${screen.name}.png`);
    } catch (err) {
      console.log(`  ✗ ${screen.name} — ${err.message}`);
    }
  }

  // Bonus: capture the Paywall modal
  try {
    await page.goto(`${BASE_URL}/#/dashboard`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    await page.locator('text=Upgrade now').first().click({ timeout: 3000 });
    await page.waitForTimeout(800);
    const file = resolve(OUT_DIR, '09-paywall-modal.png');
    await page.screenshot({ path: file, fullPage: false });
    console.log(`  ✓ 09-paywall-modal.png`);
  } catch (e) {
    console.log(`  (skipped paywall modal: ${e.message})`);
  }

  // Open Graph (1200x630) thumbnail of the home page
  try {
    await page.setViewportSize({ width: 1200, height: 630 });
    await page.goto(`${BASE_URL}/#/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    const file = resolve(OUT_DIR, '10-og-image-1200x630.png');
    await page.screenshot({ path: file, fullPage: false });
    console.log(`  ✓ 10-og-image-1200x630.png`);
  } catch (e) {
    console.log(`  (skipped OG image: ${e.message})`);
  }

  console.log(`\nDone! ${SCREENS.length + 2} screenshots saved to ${OUT_DIR}\n`);
  console.log('Upload these to your LemonSqueezy product page:');
  console.log('  - Cover image:    01-home-with-pricing.png  (or 02-home-hero.png)');
  console.log('  - Gallery:        03 through 09');
  console.log('  - Social preview: 10-og-image-1200x630.png\n');

  await browser.close();
}

main().catch((err) => {
  console.error('\nError:', err.message);
  process.exit(1);
});
