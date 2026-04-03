#!/usr/bin/env node
/* global process */
/* eslint-env node */

/**
 * Import a flyer image → public/tour-posters/{YYYY-MM-DD}.webp (EXIF © mozworth).
 * Then add posterWebp: "/tour-posters/YYYY-MM-DD.webp" to the matching event in src/data/tour.ts
 *
 * Run: node scripts/import-tour-poster.mjs 2026-04-25 ./path/to/flyer.jpg
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const QUALITY = 88;
const COPYRIGHT = "© mozworth. All rights reserved.";

async function main() {
  const date = process.argv[2];
  const input = process.argv[3];
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    console.error("Usage: node scripts/import-tour-poster.mjs YYYY-MM-DD path/to/image.jpg");
    process.exit(1);
  }
  if (!input || !fs.existsSync(input)) {
    console.error("Input file not found:", input);
    process.exit(1);
  }
  const outDir = path.join(ROOT, "public", "tour-posters");
  fs.mkdirSync(outDir, { recursive: true });
  const out = path.join(outDir, `${date}.webp`);
  await sharp(input)
    .withMetadata({ exif: { IFD0: { Copyright: COPYRIGHT } } })
    .webp({ quality: QUALITY })
    .toFile(out);
  console.log(`Wrote ${path.relative(ROOT, out)}`);
  console.log(`Add to src/data/tour.ts for that event: posterWebp: "/tour-posters/${date}.webp"`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
