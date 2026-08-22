// One-off: the Services brush sequence was exported near-lossless (~1.15MB/frame
// at 1920x1080) while the hero roller sequence is ~20KB/frame for the same
// dimensions and comparable flat content.
//
// Measured on frame 90, the alpha channel is the whole cost: colour quality
// 72 -> 30 only moves it 350KB -> 344KB, while dropping alpha takes it to 20KB.
// The sequence renders full-bleed behind the Services section, whose ground is
// a flat neutral-950, so the transparency buys nothing — flatten onto that same
// colour and the canvas edge stays seamless. Quality stays high because the
// bristle texture in the stroke is high-frequency detail that low q smears.
import sharp from "sharp";
import { mkdir, readdir, stat } from "node:fs/promises";
import { join } from "node:path";

const SRC = "public/videos/out";
const DEST = "public/videos/brush-90";
const WIDTH = 1280;
const QUALITY = 82;
// Must match the Services section ground (neutral-950).
const GROUND = "#0A0A0A";

const dirBytes = async (dir) => {
  const files = await readdir(dir);
  let total = 0;
  for (const f of files) total += (await stat(join(dir, f))).size;
  return total;
};

const mb = (b) => (b / 1024 / 1024).toFixed(1) + " MB";

await mkdir(DEST, { recursive: true });
const frames = (await readdir(SRC)).filter((f) => f.endsWith(".webp")).sort();

for (const f of frames) {
  await sharp(join(SRC, f))
    .resize({ width: WIDTH })
    .flatten({ background: GROUND })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(join(DEST, f));
}

console.log(`${frames.length} frames -> ${DEST} @ ${WIDTH}px q${QUALITY} on ${GROUND}`);
console.log(`before: ${mb(await dirBytes(SRC))}`);
console.log(`after:  ${mb(await dirBytes(DEST))}`);
