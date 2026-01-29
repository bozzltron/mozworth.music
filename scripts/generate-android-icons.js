#!/usr/bin/env node

/**
 * Generate Android Chrome PWA icons from logo.jpg
 * Creates square icons (192x192 and 512x512) with logo centered and scaled to fit
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
  { size: 192, filename: 'android-chrome-192x192.png' },
  { size: 512, filename: 'android-chrome-512x512.png' },
  { size: 180, filename: 'apple-touch-icon.png' }
];

async function generateIcon(size, filename) {
  console.log(`Generating ${filename}...`);
  
  try {
    // Get logo metadata
    const logoMetadata = await sharp(logoPath).metadata();
    const logoWidth = logoMetadata.width;
    const logoHeight = logoMetadata.height;
    
    // Calculate scale to fit logo within square while maintaining aspect ratio
    const scale = Math.min(size / logoWidth, size / logoHeight);
    const scaledWidth = Math.round(logoWidth * scale);
    const scaledHeight = Math.round(logoHeight * scale);
    
    // Calculate position to center the logo
    const offsetX = Math.round((size - scaledWidth) / 2);
    const offsetY = Math.round((size - scaledHeight) / 2);
    
    console.log(`  Logo: ${logoWidth}x${logoHeight}`);
    console.log(`  Scaled: ${scaledWidth}x${scaledHeight} (scale: ${scale.toFixed(3)})`);
    console.log(`  Offset: ${offsetX}, ${offsetY}`);
    
    // Create square canvas with black background
    const canvas = sharp({
      create: {
        width: size,
        height: size,
        channels: 3,
        background: { r: 0, g: 0, b: 0 } // Black background
      }
    });
    
    // Resize logo to fit
    const resizedLogo = await sharp(logoPath)
      .resize(scaledWidth, scaledHeight, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent for now
      })
      .toBuffer();
    
    // Composite the resized logo onto the black canvas
    const outputPath = path.join(outputDir, filename);
    await canvas
      .composite([{
        input: resizedLogo,
        left: offsetX,
        top: offsetY
      }])
      .png()
      .toFile(outputPath);
    
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
    for (const { size, filename } of sizes) {
      await generateIcon(size, filename);
      console.log('');
    }
    
    console.log('✓ All icons generated successfully!');
  } catch (error) {
    console.error('\n✗ Failed to generate icons:', error.message);
    process.exit(1);
  }
}

main();
