import sharp from "sharp";
import { mkdir, writeFile, stat } from "node:fs/promises";
import { photoCatalog } from "./photo-catalog.mjs";

const widths = [400, 800, 1200, 1600, 2048];
await mkdir("public/photos", { recursive: true });
const manifest = {};
let originalBytes = 0,
  webBytes = 0;
for (const photo of photoCatalog) {
  const source = `images/${photo.file}`;
  const { width, height } = await sharp(source).rotate().metadata();
  originalBytes += (await stat(source)).size;
  for (const size of widths) {
    // Auto-orient, preserve the full composition, never upscale, and strip EXIF/GPS.
    const result = await sharp(source)
      .rotate()
      .resize({ width: size, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(`public/photos/${photo.id}-${size}.webp`);
    if (size === 1600) webBytes += result.size;
  }
  manifest[photo.id] = {
    src: `/photos/${photo.id}`,
    width,
    height,
    alt: photo.alt,
  };
}
await writeFile(
  "src/data/photos.json",
  JSON.stringify(manifest, null, 2) + "\n",
);
const rows = photoCatalog
  .map((p) => `| ${p.file} | ${p.category} | ${p.alt} | ${p.placement} |`)
  .join("\n");
await writeFile(
  "PHOTO-INVENTORY.md",
  `# Office photo inventory\n\nAll 26 owner-supplied photographs were visually reviewed. Original files are preserved in images/. Portrait names follow supplied filenames; job titles are not inferred. Alternate images are optimized for future use but are not all displayed at once.\n\n| Original | Classification | Visual description / alt text | Placement |\n|---|---|---|---|\n${rows}\n\n## Delivery\n\nRun npm run photos:prepare after replacing originals. WebP variants are generated at ${widths.join(", ")}px with no upscaling and without embedded EXIF/GPS metadata. Intrinsic dimensions, descriptive alt text, responsive sizes, and lazy loading are supplied by the shared PracticePhoto component. Only the above-the-fold lead photo is preloaded. The custom Next.js image loader serves generated static files directly, so photo delivery does not depend on a runtime image-optimization server.\n\nOriginal library: ${(originalBytes / 1024 / 1024).toFixed(1)} MB. One 1600px WebP per photo: ${(webBytes / 1024 / 1024).toFixed(1)} MB. Browsers request one appropriately sized variant per displayed photo, not the entire library.\n`,
);
console.log(
  `Prepared ${photoCatalog.length} photos × ${widths.length} sizes; 1600px set ${(webBytes / 1024 / 1024).toFixed(1)} MB vs ${(originalBytes / 1024 / 1024).toFixed(1)} MB originals.`,
);
