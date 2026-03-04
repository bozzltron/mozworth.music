#!/usr/bin/env node
/* eslint-env node */

/**
 * Convert an image to WebP format using sharp.
 * Default: converts Mozworth-Shiners_March10th-2026-V3.jpg to WebP.
 * Or pass a path: node scripts/convert-to-webp.js path/to/image.jpg
 *
 * Run: node scripts/convert-to-webp.js
 *      node scripts/convert-to-webp.js public/your-image.jpg
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEFAULT_INPUT = "Mozworth-Shiners_March10th-2026-V3.jpg";
const WEBP_QUALITY = 85;

async function convertToWebp(inputPath) {
  const absolutePath = path.isAbsolute(inputPath)
    ? inputPath
    : path.join(path.dirname(__dirname), "public", path.basename(inputPath));

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`File not found: ${absolutePath}`);
  }

  const parsed = path.parse(absolutePath);
  const outputPath = path.join(parsed.dir, `${parsed.name}.webp`);

  const info = await sharp(absolutePath)
    .webp({ quality: WEBP_QUALITY })
    .toFile(outputPath);

  console.log(`Converted: ${path.basename(absolutePath)} → ${path.basename(outputPath)}`);
  console.log(`  Size: ${(info.size / 1024).toFixed(1)} KB`);
  return outputPath;
}

async function main() {
  const input = process.argv[2] ?? DEFAULT_INPUT;
  await convertToWebp(input);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
