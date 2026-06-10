#!/usr/bin/env node
/**
 * Icon Generator Script
 * Generates PNG icons from SVG logo for PWA
 * 
 * Requirements:
 * npm install sharp
 * 
 * Usage:
 * node scripts/generate-icons.js
 */

const fs = require('fs');
const path = require('path');

try {
  const sharp = require('sharp');
  
  const sizes = [
    { size: 192, path: 'client/public/icons/icon-192x192.png', maskable: false },
    { size: 256, path: 'client/public/icons/icon-256x256.png', maskable: false },
    { size: 384, path: 'client/public/icons/icon-384x384.png', maskable: false },
    { size: 512, path: 'client/public/icons/icon-512x512.png', maskable: false },
    { size: 192, path: 'client/public/icons/icon-maskable-192x192.png', maskable: true },
    { size: 512, path: 'client/public/icons/icon-maskable-512x512.png', maskable: true },
  ];

  const svgFile = 'client/public/logo.svg';
  
  if (!fs.existsSync(svgFile)) {
    console.error(`❌ Logo file not found: ${svgFile}`);
    process.exit(1);
  }
  
  // Create icons directory
  const iconsDir = 'client/public/icons';
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
    console.log(`✅ Created directory: ${iconsDir}`);
  }
  
  // Create screenshots directory
  const screenshotsDir = 'client/public/screenshots';
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
    console.log(`✅ Created directory: ${screenshotsDir}`);
  }

  console.log('\n🎨 Generating icons from SVG...');
  
  let completed = 0;
  
  sizes.forEach(({ size, path: iconPath, maskable }) => {
    sharp(svgFile)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: maskable ? 0 : 1 }
      })
      .png()
      .toFile(iconPath)
      .then(info => {
        const type = maskable ? 'maskable' : 'standard';
        console.log(`✅ Generated ${size}x${size} (${type}): ${iconPath}`);
        completed++;
        
        if (completed === sizes.length) {
          console.log(`\n✨ All ${sizes.length} icons generated successfully!`);
          console.log('\n📸 Next step: Add screenshots to client/public/screenshots/');
          console.log('   - screenshot-540x720.png (narrow, 540x720)');
          console.log('   - screenshot-1280x720.png (wide, 1280x720)');
        }
      })
      .catch(err => {
        console.error(`❌ Error generating ${iconPath}:`, err.message);
      });
  });
  
} catch (error) {
  if (error.code === 'MODULE_NOT_FOUND') {
    console.error('\n❌ Missing dependency: sharp');
    console.log('\n📦 Please install sharp first:');
    console.log('   npm install sharp --save-dev\n');
    console.log('📚 Or use online tools instead:');
    console.log('   https://www.pwabuilder.com/imageGenerator');
    console.log('   https://ezgif.com/');
    process.exit(1);
  } else {
    throw error;
  }
}
