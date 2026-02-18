#!/usr/bin/env node
/* eslint-env node */

/**
 * Generate phone wallpaper images from mozworth logo and album art.
 * Output: public/wallpapers/*.webp (1440×3200 — universal phone size)
 *
 * 1440×3200 (9:20) is widely compatible: QHD Android (Pixel, Samsung),
 * scales cleanly on 1080p; iPhones crop slightly. See .cursorrules for rationale.
 *
 * Run: node scripts/generate-wallpapers.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WIDTH = 1440;
const HEIGHT = 3200;
const publicDir = path.join(__dirname, "../public");
const outputDir = path.join(publicDir, "wallpapers");

const COPYRIGHT = "© mozworth. All rights reserved.";

// Ensure output dir exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function logoOnSolid(bgColor, filename, invert = false) {
  const logoPath = path.join(publicDir, "logo.jpg");
  const logoHeight = Math.round(HEIGHT * 0.35);
  let logo = sharp(logoPath).resize({
    width: WIDTH,
    height: logoHeight,
    fit: "contain",
  });
  if (invert) {
    logo = logo.negate();
  }
  const logoBuf = await logo.toBuffer();

  const bg = await sharp({
    create: { width: WIDTH, height: HEIGHT, channels: 3, background: bgColor },
  })
    .composite([{ input: logoBuf, gravity: "center" }])
    .withMetadata({ exif: { IFD0: { Copyright: COPYRIGHT } } })
    .webp({ quality: 90 })
    .toBuffer();

  fs.writeFileSync(path.join(outputDir, filename), bg);
  console.log(`  Created ${filename}`);
}

function resolveSourcePath(srcPath) {
  const base = path.join(publicDir, path.dirname(srcPath), path.basename(srcPath, path.extname(srcPath)));
  for (const ext of [".webp", ".jpg", ".jpeg", ".png"]) {
    const p = base + ext;
    if (fs.existsSync(p)) return p;
  }
  return null;
}

/**
 * Close-up: album art fills the frame (cover/crop).
 * position: Sharp position for focal point (left, right, center, etc.)
 * offsetX: optional -1..1, shift crop horizontally (positive = bump right, negative = bump left)
 */
async function albumWallpaperCloseup(srcPath, filename, position = "center", offsetX = 0) {
  const inputPath = resolveSourcePath(srcPath) ?? path.join(publicDir, srcPath);
  if (!fs.existsSync(inputPath)) {
    console.warn(`  Skipping ${filename} - source not found: ${srcPath}`);
    return;
  }

  const targetAspect = WIDTH / HEIGHT;

  if (offsetX !== 0) {
    // Use extract + resize for fine-tuned offset
    const meta = await sharp(inputPath).metadata();
    const iw = meta.width ?? 1;
    const ih = meta.height ?? 1;
    const imgAspect = iw / ih;

    let cropW, cropH;
    if (imgAspect >= targetAspect) {
      cropH = ih;
      cropW = Math.round(ih * targetAspect);
    } else {
      cropW = iw;
      cropH = Math.round(iw / targetAspect);
    }

    let left = Math.round((iw - cropW) / 2);
    const top = Math.round((ih - cropH) / 2);
    // offsetX as fraction of image width: positive = bump right (increase left)
    left = Math.round(left + offsetX * iw);
    left = Math.max(0, Math.min(iw - cropW, left));

    const buf = await sharp(inputPath)
      .extract({ left, top, width: cropW, height: cropH })
      .resize(WIDTH, HEIGHT)
      .withMetadata({ exif: { IFD0: { Copyright: COPYRIGHT } } })
      .webp({ quality: 90 })
      .toBuffer();
    fs.writeFileSync(path.join(outputDir, filename), buf);
    console.log(`  Created ${filename}`);
    return;
  }

  const buf = await sharp(inputPath)
    .resize({ width: WIDTH, height: HEIGHT, fit: "cover", position })
    .withMetadata({ exif: { IFD0: { Copyright: COPYRIGHT } } })
    .webp({ quality: 90 })
    .toBuffer();
  fs.writeFileSync(path.join(outputDir, filename), buf);
  console.log(`  Created ${filename}`);
}

async function main() {
  console.log("Generating mozworth phone wallpapers...\n");

  // Logo-based: white on black, black on white (inverse)
  console.log("Logo wallpapers:");
  await logoOnSolid("#000000", "logo-black.webp", false);
  await logoOnSolid("#ffffff", "logo-white.webp", true);

  // Album art: close-up (fills frame) + full cover (padding + gradient)
  // closeupPosition: Sharp position for fit:cover; closeupOffsetX: fine-tune horizontally (-1..1, + = right)
  console.log("\nAlbum art wallpapers (close-up):");
  const albums = [
    { src: "storyofanartist.webp", base: "story-of-an-artist", closeupPosition: "right", closeupOffsetX: 0.222 },
    { src: "sandpiper.webp", base: "sandpiper" },
    { src: "the_sky_is_falling.webp", base: "the-sky-is-falling", closeupPosition: "center", closeupOffsetX: 0.18 },
    { src: "mozworth-walking-the-cow-cover.webp", base: "walking-the-cow" },
    { src: "mozworth-debut.webp", base: "mozworth-debut" },
    { src: "goodbye_colorado_cover.webp", base: "goodbye-colorado" },
    { src: "postcard_cover.webp", base: "postcard" },
  ];

  for (const { src, base, closeupPosition, closeupOffsetX } of albums) {
    await albumWallpaperCloseup(src, `${base}-closeup.webp`, closeupPosition ?? "center", closeupOffsetX ?? 0);
  }

  console.log("\nDone! Wallpapers saved to public/wallpapers/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
