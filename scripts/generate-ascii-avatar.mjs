import { mkdirSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const input = process.argv[2] ?? '/tmp/jontsai-avatar.png';
const out = 'src/app/asciiPortrait.ts';
const width = 68;
const height = 50;
const glyphs = [' ', '·', ':', '+', '*', '#', '@'];

const { data, info } = await sharp(input)
  .resize(width, height, { fit: 'cover', position: 'centre' })
  .removeAlpha()
  .modulate({ saturation: 1.12, brightness: 1.02 })
  .raw()
  .toBuffer({ resolveWithObject: true });

const pixels = [];
for (let y = 0; y < info.height; y++) {
  const row = [];
  for (let x = 0; x < info.width; x++) {
    const i = (y * info.width + x) * info.channels;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const idx = Math.max(0, Math.min(glyphs.length - 1, Math.round((255 - luma) / 255 * (glyphs.length - 1))));
    row.push({ ch: glyphs[idx], color: `rgb(${r},${g},${b})` });
  }
  pixels.push(row);
}

mkdirSync('src/app', { recursive: true });
writeFileSync(out, `export const asciiPortrait = ${JSON.stringify(pixels)} as const;\n`);
console.log(`wrote ${out} (${info.width}x${info.height})`);
