const fs = require('fs');
const path = require('path');

// Function to create SVG icon with given size
function createSVGIcon(size) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="#FF6B6B"/>
  <circle cx="${size/2}" cy="${size/2}" r="${size/4}" fill="white"/>
  <text x="${size/2}" y="${size/2 + 8}" text-anchor="middle" fill="#FF6B6B" font-family="Arial, sans-serif" font-size="${size/8}" font-weight="bold">CO</text>
</svg>`;
}

// Create icons for different sizes
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

sizes.forEach(size => {
  const svgContent = createSVGIcon(size);
  const filename = `icon-${size}x${size}.svg`;
  const filepath = path.join(__dirname, 'public', filename);
  
  fs.writeFileSync(filepath, svgContent);
  console.log(`Created ${filename}`);
});

// Also create a favicon
const faviconSVG = createSVGIcon(32);
fs.writeFileSync(path.join(__dirname, 'public', 'favicon.svg'), faviconSVG);
console.log('Created favicon.svg');

console.log('All icons generated successfully!');
