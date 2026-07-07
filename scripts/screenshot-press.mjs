#!/usr/bin/env node
/* global process */
/* eslint-env node */

/**
 * Generate webp screenshots of all press article URLs.
 * Saves to public/press-screenshots/{id}.webp
 *
 * Run: node scripts/screenshot-press.mjs
 *       node scripts/screenshot-press.mjs --only=2,4,9   # recapture specific ids only
 * Requires: npm install puppeteer (devDep)
 *
 * Keep in sync with src/data/press.ts when adding new items.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUTPUT_DIR = path.join(ROOT, "public", "press-screenshots");
const VIEWPORT = { width: 1280, height: 720 };

/** Navigation timeout (slow TLS, heavy pages) */
const NAV_TIMEOUT_MS = 120_000;

/**
 * After `load`, wait for fonts / lazy images / client hydration.
 * `networkidle2` often never fires on sites with analytics or long-polling.
 */
const DEFAULT_SETTLE_MS = 5_000;

// Mirror of press items — optional `settleAfterLoadMs` for slow SPAs / heavy pages
const PRESS_LINKS = [
  { id: 12, link: "https://www.waxzine.com/post/talking-daniel-johnston-the-austin-underground-and-the-mountain-and-the-wolf-with-mozworth" },
  { id: 0, link: "https://musikepool.com/story-of-an-artist-mozworth/" },
  { id: 1, link: "https://plasticmag.co.uk/2025/09/mozworth-drops-new-single-sandpiper/" },
  {
    id: 2,
    link: "https://illustratemagazine.com/exclusive-interview-with-mozworth/",
    settleAfterLoadMs: 12_000
  },
  { id: 3, link: "https://bigtakeover.com/recordings/mozworth-sandpiper-balanced-scale-media" },
  {
    id: 4,
    link: "https://www.itsallindie.com/2025/09/mozworth-reveals-bold-new-single.html",
    settleAfterLoadMs: 12_000
  },
  { id: 5, link: "https://bigtakeover.com/recordings/mozworth-the-sky-is-falling-balanced-scale-media" },
  { id: 6, link: "https://indiedockmusicblog.co.uk/?p=30798" },
  { id: 7, link: "https://apricot-magazine.com/review/the-sky-may-be-falling-but-mozworth-is-rising/" },
  { id: 8, link: "https://buzzyband.com/mozworth-the-sky-is-falling/" },
  {
    id: 9,
    link: "https://kvrx.org/app/blog/features/an-interview-with-mozworth/",
    settleAfterLoadMs: 15_000
  },
  { id: 10, link: "https://www.indiedream.com.mx/2024/10/mozworth-goodbye-colorado.html?m=1" },
  { id: 11, link: "https://kutx.org/song-of-the-day/mozworth-postcard-premiere/" }
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseOnlyArg() {
  const arg = process.argv.find((a) => a.startsWith("--only="));
  if (!arg) return null;
  const ids = arg
    .slice("--only=".length)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => Number.parseInt(s, 10))
    .filter((n) => !Number.isNaN(n));
  return ids.length ? new Set(ids) : null;
}

async function main() {
  const puppeteer = await import("puppeteer").catch(() => {
    console.error("Run: npm install puppeteer --save-dev");
    process.exit(1);
  });

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const onlyIds = parseOnlyArg();
  const toCapture = onlyIds
    ? PRESS_LINKS.filter((e) => onlyIds.has(e.id))
    : PRESS_LINKS;

  if (onlyIds) {
    console.log(`Recapture mode: ids ${[...onlyIds].join(", ")}`);
  }

  const browser = await puppeteer.default.launch({ headless: true });

  try {
    for (const entry of toCapture) {
      const { id, link } = entry;
      const settleMs = entry.settleAfterLoadMs ?? DEFAULT_SETTLE_MS;
      const outPath = path.join(OUTPUT_DIR, `${id}.webp`);
      let page;
      try {
        page = await browser.newPage();
        await page.setViewport(VIEWPORT);
        await page.goto(link, {
          waitUntil: "load",
          timeout: NAV_TIMEOUT_MS
        });
        await sleep(settleMs);
        await page.screenshot({ path: outPath, type: "webp", quality: 85 });
        console.log(`✓ ${id}.webp (settle ${settleMs}ms)`);
      } catch (err) {
        console.error(`✗ ${id} ${link}: ${err.message}`);
      } finally {
        if (page) {
          try {
            await page.close();
          } catch {
            // deliberate: ignore close errors on a page that may have crashed
          }
        }
      }
    }
  } finally {
    await browser.close();
  }

  console.log(`Done. Screenshots in ${OUTPUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
