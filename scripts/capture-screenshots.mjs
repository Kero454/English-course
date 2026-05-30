// Auto-capture marketing screenshots for the LemonSqueezy product page.
//
// This script uses the app's built-in DEMO MODE (?demo=free / ?demo=paid)
// so it can capture all auth-gated screens without any manual sign-in.
//
// Prerequisites (already in package.json devDependencies):
//   playwright
//
// Usage:
//   1. In one terminal:    npm run dev
//   2. In another:         npm run screenshots
//
// All screenshots are saved to ./marketing/screenshots/

import { chromium } from 'playwright';
import { mkdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const BASE_URL  = process.env.SCREENSHOT_BASE_URL || 'http://localhost:5173';
const OUT_DIR   = resolve('marketing/screenshots');
const VIEWPORT  = { width: 1280, height: 720 };
const SCALE     = 2;          // retina (2560x1440 effective)
const HEADLESS  = process.env.HEADFUL ? false : true;

// HashRouter format: <base>/?demo=<mode>#<route>
const url = (mode, route = '/') => `${BASE_URL}/?demo=${mode}#${route}`;

const SCREENS = [
  // ---------- UNPAID flow (shows the pricing banner + paywall states) ----------
  { name: '01-home-hero',              url: url('free', '/'),                  scrollY: 0,    wait: 1200 },
  { name: '02-home-pricing-banner',    url: url('free', '/'),                  scrollY: 700,  wait: 1200 },
  { name: '03-home-cefr-grid',         url: url('free', '/'),                  scrollY: 1500, wait: 1200 },
  { name: '04-dashboard-with-upgrade', url: url('free', '/dashboard'),         scrollY: 0,    wait: 1500 },
  { name: '05-dashboard-locked-levels',url: url('free', '/dashboard'),         scrollY: 350,  wait: 1500 },
  { name: '06-paywall-modal',          url: url('free', '/dashboard'),         scrollY: 0,    wait: 1500,
    click: 'button:has-text("Upgrade now")' },
  { name: '07-paywall-redeem-tab',     url: url('free', '/dashboard'),         scrollY: 0,    wait: 1500,
    click: 'button:has-text("Upgrade now")', clickAfter: 'button:has-text("I have a key")' },
  { name: '08-level-A2-locked',        url: url('free', '/level/A2'),          scrollY: 200,  wait: 1500 },

  // ---------- PAID flow (shows actual product value: lessons, skills) ----------
  { name: '09-dashboard-paid',         url: url('paid', '/dashboard'),         scrollY: 0,    wait: 1500 },
  { name: '10-level-A1-overview',      url: url('paid', '/level/A1'),          scrollY: 0,    wait: 1500 },
  { name: '11-lesson-content',         url: url('paid', '/lesson/a1-u1-l1'),   scrollY: 0,    wait: 1500 },
  { name: '12-lesson-exercises',       url: url('paid', '/lesson/a1-u1-l1'),   scrollY: 0,    wait: 1500,
    click: 'button:has-text("Exercises")' },
  { name: '13-skills-reading',         url: url('paid', '/lesson/a1-u1-l1'),   scrollY: 0,    wait: 1800,
    click: 'button:has-text("4 Skills Practice")' },
  { name: '14-skills-listening',       url: url('paid', '/lesson/a1-u1-l1'),   scrollY: 0,    wait: 1800,
    click: 'button:has-text("4 Skills Practice")', clickAfter: 'button:has-text("Listening")' },
  { name: '15-skills-speaking',        url: url('paid', '/lesson/a1-u1-l1'),   scrollY: 0,    wait: 1800,
    click: 'button:has-text("4 Skills Practice")', clickAfter: 'button:has-text("Speaking")' },
  { name: '16-skills-writing',         url: url('paid', '/lesson/a1-u1-l1'),   scrollY: 0,    wait: 1800,
    click: 'button:has-text("4 Skills Practice")', clickAfter: 'button:has-text("Writing")' },

  // ---------- Bonus marketing assets ----------
  { name: '17-placement-test',         url: url('paid', '/placement-test'),    scrollY: 0,    wait: 1500 },
  { name: '18-legal-terms',            url: `${BASE_URL}/#/legal/terms`,        scrollY: 0,    wait: 1000 },
];

async function capture(page, screen) {
  await page.goto(screen.url, { waitUntil: 'domcontentloaded' });
  // Wait a bit for client hydration / animations
  await page.waitForTimeout(screen.wait || 1000);

  if (screen.click) {
    try {
      await page.locator(screen.click).first().click({ timeout: 3000 });
      await page.waitForTimeout(700);
    } catch (e) {
      console.log(`  (click skipped: ${screen.click} — ${e.message.split('\n')[0]})`);
    }
  }
  if (screen.clickAfter) {
    try {
      await page.locator(screen.clickAfter).first().click({ timeout: 3000 });
      await page.waitForTimeout(700);
    } catch (e) {
      console.log(`  (clickAfter skipped: ${screen.clickAfter} — ${e.message.split('\n')[0]})`);
    }
  }

  if (screen.scrollY) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), screen.scrollY);
    await page.waitForTimeout(400);
  }

  const file = resolve(OUT_DIR, `${screen.name}.png`);
  await page.screenshot({ path: file, fullPage: false });
  return file;
}

async function main() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  console.log('\n=== English Course — Marketing Screenshot Capture ===');
  console.log(`Base URL : ${BASE_URL}`);
  console.log(`Output   : ${OUT_DIR}`);
  console.log(`Viewport : ${VIEWPORT.width}x${VIEWPORT.height} (DPR ${SCALE})`);
  console.log(`Headless : ${HEADLESS}\n`);

  const browser = await chromium.launch({ headless: HEADLESS });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: SCALE,
    // Grant fake permission so the speaking-tab mic UI doesn't show a prompt
    permissions: ['microphone'],
  });
  const page = await context.newPage();

  // Surface page-level errors to the console (helps debug missing screens)
  page.on('pageerror', (err) => console.log(`  [pageerror] ${err.message}`));

  let ok = 0, fail = 0;
  for (const screen of SCREENS) {
    try {
      const file = await capture(page, screen);
      console.log(`  ✓ ${screen.name}.png`);
      ok++;
    } catch (err) {
      console.log(`  ✗ ${screen.name} — ${err.message.split('\n')[0]}`);
      fail++;
    }
  }

  // Open Graph image (1200×630)
  try {
    await page.setViewportSize({ width: 1200, height: 630 });
    await page.goto(url('free', '/'), { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: resolve(OUT_DIR, '19-og-image-1200x630.png') });
    console.log('  ✓ 19-og-image-1200x630.png');
    ok++;
  } catch (e) {
    console.log(`  ✗ og image — ${e.message.split('\n')[0]}`);
    fail++;
  }

  // Square logo / icon (512×512) — captures just the hero gradient with title
  try {
    await page.setViewportSize({ width: 512, height: 512 });
    await page.goto(url('free', '/'), { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1200);
    await page.screenshot({ path: resolve(OUT_DIR, '20-square-512.png') });
    console.log('  ✓ 20-square-512.png');
    ok++;
  } catch (e) {
    console.log(`  ✗ square — ${e.message.split('\n')[0]}`);
    fail++;
  }

  await browser.close();

  console.log(`\nDone. ${ok} captured, ${fail} failed.`);
  console.log(`Files: ${OUT_DIR}\n`);
  console.log('Recommended LemonSqueezy uploads:');
  console.log('  Cover image    -> 02-home-pricing-banner.png');
  console.log('  Gallery        -> 04, 09, 10, 11, 13, 14, 15, 16');
  console.log('  Paywall demo   -> 06, 07');
  console.log('  Social / OG    -> 19-og-image-1200x630.png\n');
}

main().catch((err) => {
  console.error('\nERROR:', err.message);
  process.exit(1);
});
