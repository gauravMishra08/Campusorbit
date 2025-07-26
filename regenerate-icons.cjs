const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [192, 512];
const inputIcon = path.join(__dirname, 'public', 'icon.png');

async function generateIcons() {
  try {
    // Check if input icon exists
    if (!fs.existsSync(inputIcon)) {
      console.error('Input icon not found:', inputIcon);
      return;
    }

    console.log('Generating PWA icons from your new icon.png...');

    for (const size of sizes) {
      const outputPath = path.join(__dirname, 'public', `icon-${size}x${size}.png`);
      
      console.log(`Generating ${size}x${size} icon...`);
      
      await sharp(inputIcon)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
        
      console.log(`✓ Created: ${outputPath}`);
    }
    
    console.log('✅ All icons generated successfully from your new icon!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
