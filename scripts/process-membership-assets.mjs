import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, "../src/assets/memberships");
const marnNumber = "2418684";

// MARN registration badge (standard agent graphic style)
const marnSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 300" width="220" height="300">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#5a5f66"/>
      <stop offset="100%" stop-color="#3d4248"/>
    </linearGradient>
  </defs>
  <rect x="8" y="8" width="204" height="284" rx="18" fill="url(#bg)"/>
  <path fill="#ffffff" opacity="0.95" transform="translate(78, 28) scale(0.55)"
    d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 10c29.8 0 54 24.2 54 54s-24.2 54-54 54S10 93.8 10 64 34.2 10 64 10z"/>
  <text x="110" y="118" text-anchor="middle" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="600">Migration Agents</text>
  <text x="110" y="134" text-anchor="middle" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="600">Registration Number</text>
  <rect x="28" y="148" width="164" height="42" rx="4" fill="#ffffff"/>
  <text x="110" y="177" text-anchor="middle" fill="#2d3136" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" letter-spacing="1">${marnNumber}</text>
  <text x="110" y="230" text-anchor="middle" fill="#d8dce0" font-family="Arial, Helvetica, sans-serif" font-size="11">www.mara.gov.au</text>
</svg>`;

writeFileSync(join(assetsDir, "marn-badge.svg"), marnSvg);

await sharp(Buffer.from(marnSvg))
  .png()
  .toFile(join(assetsDir, "marn-badge.png"));

// Trim MIA logo — remove top/bottom blue border lines
const miaPath = join(assetsDir, "mia.png");
const miaMeta = await sharp(miaPath).metadata();
const miaBuffer = await sharp(miaPath).ensureAlpha().raw().toBuffer();

const { width, height, channels } = {
  width: miaMeta.width,
  height: miaMeta.height,
  channels: 4,
};

function isBorderPixel(r, g, b) {
  return b > 130 && r < 90 && g < 130;
}

function isContentPixel(r, g, b, a) {
  if (a < 10) return false;
  if (r > 248 && g > 248 && b > 248) return false;
  return !isBorderPixel(r, g, b);
}

let top = 0;
for (let y = 0; y < height; y++) {
  let content = 0;
  let border = 0;
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    const r = miaBuffer[i];
    const g = miaBuffer[i + 1];
    const b = miaBuffer[i + 2];
    const a = miaBuffer[i + 3];
    if (isContentPixel(r, g, b, a)) content++;
    if (isBorderPixel(r, g, b)) border++;
  }
  if (content > width * 0.02 && border < content) {
    top = y;
    break;
  }
}

let bottom = height - 1;
for (let y = height - 1; y >= 0; y--) {
  let content = 0;
  let border = 0;
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    const r = miaBuffer[i];
    const g = miaBuffer[i + 1];
    const b = miaBuffer[i + 2];
    const a = miaBuffer[i + 3];
    if (isContentPixel(r, g, b, a)) content++;
    if (isBorderPixel(r, g, b)) border++;
  }
  if (content > width * 0.02 && border < content) {
    bottom = y;
    break;
  }
}

let left = 0;
let right = width - 1;
for (let x = 0; x < width; x++) {
  for (let y = top; y <= bottom; y++) {
    const i = (y * width + x) * channels;
    const r = miaBuffer[i];
    const g = miaBuffer[i + 1];
    const b = miaBuffer[i + 2];
    const a = miaBuffer[i + 3];
    if (isContentPixel(r, g, b, a)) {
      left = x;
      x = width;
      break;
    }
  }
}
for (let x = width - 1; x >= 0; x--) {
  for (let y = top; y <= bottom; y++) {
    const i = (y * width + x) * channels;
    const r = miaBuffer[i];
    const g = miaBuffer[i + 1];
    const b = miaBuffer[i + 2];
    const a = miaBuffer[i + 3];
    if (isContentPixel(r, g, b, a)) {
      right = x;
      x = -1;
      break;
    }
  }
}

await sharp(miaPath)
  .extract({
    left,
    top,
    width: right - left + 1,
    height: bottom - top + 1,
  })
  .flatten({ background: "#ffffff" })
  .png()
  .toFile(join(assetsDir, "mia-tmp.png"));

await sharp(join(assetsDir, "mia-tmp.png")).toFile(miaPath);

console.log("Processed MIA crop:", { left, top, right, bottom });
console.log("Created marn-badge.png with MARN", marnNumber);
