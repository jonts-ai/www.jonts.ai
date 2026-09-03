import { mkdirSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const input = process.argv[2] ?? '/tmp/jontsai-avatar.png';
const out = 'src/app/asciiPortrait.ts';
const chars = ' .,:;irsXA253hMHGS#9B&@';
const width = 96;
const height = 64;

const { data, info } = await sharp(input)
  .resize(width, height, { fit: 'cover', position: 'centre' })
  .grayscale()
  .normalize()
  .modulate({ brightness: 1.04 })
  .linear(1.28, -18)
  .raw()
  .toBuffer({ resolveWithObject: true });

const lines = [];
for (let y = 0; y < info.height; y++) {
  let line = '';
  for (let x = 0; x < info.width; x++) {
    const p = data[y * info.width + x];
    const idx = Math.max(0, Math.min(chars.length - 1, Math.round((255 - p) / 255 * (chars.length - 1))));
    line += chars[idx];
  }
  lines.push(line.replace(/\s+$/, ''));
}

mkdirSync('src/app', { recursive: true });
writeFileSync(out, `export const asciiPortrait = ${JSON.stringify(lines.join('\n'))};\n`);
console.log(`wrote ${out} (${info.width}x${info.height})`);
