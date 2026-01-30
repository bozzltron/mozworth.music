#!/usr/bin/env node

/**
 * Generate PWA icons from logo.jpg
 * 
 * Process:
 * 1. Automatically trims white borders from logo (removes outer white lines)
 * 2. Results in clean black background with white text only
 * 
 * Android icons (192x192, 512x512):
 * - Trimmed logo fills entire icon, extending to edges (will be cropped by Android's adaptive icon mask)
 * - Black background fills entire icon
 * - Logo scaled larger to fill space, text may be cropped at edges
 * - Works well for both launcher icon and splash screen
 * 
 * Apple icon (180x180):
 * - Trimmed logo centered with padding (contain mode)
 * - Maintains full logo visibility
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logoPath = path.join(__dirname, '../public/logo.jpg');
const outputDir = path.join(__dirname, '../public');

const sizes = [
  { size: 192, filename: 'android-chrome-192x192.png', fillMode: 'fill' },
  { size: 512, filename: 'android-chrome-512x512.png', fillMode: 'fill' },
  { size: 180, filename: 'apple-touch-icon.png', fillMode: 'contain' } // Keep Apple icon centered
];

async function generateIcon(size, filename, fillMode = 'contain') {
  console.log(`Generating ${filename}...`);
  
  try {
    // First, trim white/light borders from the logo to get just black background + white text
    console.log(`  Trimming white/light borders from logo...`);
    const trimmedLogo = await sharp(logoPath)
      .trim({
        threshold: 20, // Trim pixels within 20% of white (more aggressive)
        background: { r: 255, g: 255, b: 255 } // Trim white borders
      })
      .extend({
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: { r: 0, g: 0, b: 0 } // Ensure black background if trimmed
      })
      .toBuffer();
    
    // Get trimmed logo metadata
    const trimmedMetadata = await sharp(trimmedLogo).metadata();
    const logoWidth = trimmedMetadata.width;
    const logoHeight = trimmedMetadata.height;
    
    console.log(`  Trimmed logo: ${logoWidth}x${logoHeight} (removed white borders)`);
    
    const outputPath = path.join(outputDir, filename);
    
    if (fillMode === 'fill') {
      // For Android: Fill the entire icon, logo will be cropped at edges
      // Resize trimmed logo to cover the entire square (crops edges, fills space)
      console.log(`  Resizing to ${size}x${size} (cover mode - logo will be cropped at edges)`);
      
      // Resize trimmed logo to cover the square - this will crop the logo to fill the space
      // The logo will be centered and cropped at edges to fill the entire icon
      await sharp(trimmedLogo)
        .resize(size, size, {
          fit: 'cover', // Fill entire square, crop logo if needed
          position: 'center', // Center the logo before cropping
          background: { r: 0, g: 0, b: 0 } // Black background (shouldn't be needed with cover)
        })
        .png()
        .toFile(outputPath);
    } else {
      // For Apple: Keep centered with padding (contain mode)
      const scale = Math.min(size / logoWidth, size / logoHeight);
      const scaledWidth = Math.round(logoWidth * scale);
      const scaledHeight = Math.round(logoHeight * scale);
      const offsetX = Math.round((size - scaledWidth) / 2);
      const offsetY = Math.round((size - scaledHeight) / 2);
      
      console.log(`  Scaled: ${scaledWidth}x${scaledHeight} (scale: ${scale.toFixed(3)}, contain mode)`);
      console.log(`  Offset: ${offsetX}, ${offsetY}`);
      
      const canvas = sharp({
        create: {
          width: size,
          height: size,
          channels: 3,
          background: { r: 0, g: 0, b: 0 }
        }
      });
      
      const resizedLogo = await sharp(trimmedLogo)
        .resize(scaledWidth, scaledHeight, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toBuffer();
      
      await canvas
        .composite([{
          input: resizedLogo,
          left: offsetX,
          top: offsetY
        }])
        .png()
        .toFile(outputPath);
    }
    
    console.log(`  ✓ Created ${outputPath}`);
  } catch (error) {
    console.error(`  ✗ Error generating ${filename}:`, error.message);
    throw error;
  }
}

async function main() {
  console.log('Generating PWA icons (Android Chrome + Apple Touch)...\n');
  console.log(`Source logo: ${logoPath}\n`);
  
  // Check if logo exists
  if (!fs.existsSync(logoPath)) {
    console.error(`Error: Logo file not found at ${logoPath}`);
    process.exit(1);
  }
  
  try {
    for (const { size, filename, fillMode } of sizes) {
      await generateIcon(size, filename, fillMode);
      console.log('');
    }
    
    console.log('✓ All icons generated successfully!');
  } catch (error) {
    console.error('\n✗ Failed to generate icons:', error.message);
    process.exit(1);
  }
}

main();
