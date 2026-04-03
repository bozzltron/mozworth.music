#!/usr/bin/env node
/* global process */
/* eslint-env node */

/**
 * Re-encode known promo WebPs into public/tour-posters/{ISO-date}.webp (EXIF © mozworth).
 * Update TOUR_POSTER_SOURCES when you add a new on-disk flyer that maps to a tour date.
 *
 * Run: node scripts/sync-tour-poster-assets.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "public", "tour-posters");
const QUALITY = 88;
const COPYRIGHT = "© mozworth. All rights reserved.";

/** [source under public/, output filename ISO date + .webp] */
const TOUR_POSTER_SOURCES = [
  ["Mozworth-Shiners_March10th-2026-V3.webp", "2026-03-10.webp"],
  ["itsavan.webp", "2026-03-13.webp"],
  ["mozworth-10-11-2025.webp", "2025-10-11.webp"],
];

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  for (const [srcName, outName] of TOUR_POSTER_SOURCES) {
    const src = path.join(ROOT, "public", srcName);
    if (!fs.existsSync(src)) {
      console.warn(`Skip (missing): ${srcName}`);
      continue;
    }
    const dest = path.join(OUT, outName);
    await sharp(src)
      .withMetadata({ exif: { IFD0: { Copyright: COPYRIGHT } } })
      .webp({ quality: QUALITY })
      .toFile(dest);
    console.log(`✓ ${outName} ← ${srcName}`);
  }
  console.log(`Done. ${OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
