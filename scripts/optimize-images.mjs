// Resizes the originals in assets-src/ into web-ready files in public/images
// and writes width/height/blur data used by src/data/gallery.ts.
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "assets-src/gallery";
const OUT = "public/images/gallery";
const META = "src/data/gallery-meta.generated.json";
const MAX_EDGE = 1600;

await mkdir(OUT, { recursive: true });
await mkdir(path.dirname(META), { recursive: true });

const meta = {};
for (const file of (await readdir(SRC)).filter((f) => f.endsWith(".webp")).sort()) {
  const name = path.parse(file).name;
  const { data, info } = await sharp(path.join(SRC, file))
    .rotate()
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toBuffer({ resolveWithObject: true });
  await writeFile(path.join(OUT, file), data);

  const blur = await sharp(data).resize(16).blur(1).webp({ quality: 40 }).toBuffer();
  meta[name] = {
    width: info.width,
    height: info.height,
    blurDataURL: `data:image/webp;base64,${blur.toString("base64")}`,
  };
  console.log(name, `${info.width}x${info.height}`, `${Math.round(data.length / 1024)}KB`);
}
await writeFile(META, JSON.stringify(meta, null, 2) + "\n");

await sharp("public/images/map.png").webp({ quality: 80 }).toFile("public/images/map.webp");
