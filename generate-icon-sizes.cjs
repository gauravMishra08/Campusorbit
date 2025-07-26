const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateIconSizes() {
  const inputPath = path.join(__dirname, 'public', 'icon.png');
  const publicDir = path.join(__dirname, 'public');

  // Check if input file exists
  if (!fs.existsSync(inputPath)) {
    console.error('❌ icon.png not found in public directory');
    return;
  }

  try {
    console.log('🎨 Generating icon sizes from icon.png...');

    // Generate 128x128 icon
    await sharp(inputPath)
      .resize(128, 128, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, 'icon-128x128.png'));

    console.log('✅ Generated icon-128x128.png');

    // Generate 512x512 icon
    await sharp(inputPath)
      .resize(512, 512, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, 'icon-512x512.png'));

    console.log('✅ Generated icon-512x512.png');

    console.log('🎉 All icon sizes generated successfully!');
  } catch (error) {
    console.error('❌ Error generating icons:', error);
  }
}

generateIconSizes();
