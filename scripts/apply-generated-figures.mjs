import { mkdir, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const generatedDir = path.join(root, 'tmp', 'figure-generated');
const figuresDir = path.join(root, 'public', 'figures');
const promptIndexPath = path.join(root, 'tmp', 'figure-prompts', 'index.json');

const pages = JSON.parse(await readFile(promptIndexPath, 'utf8'));
const generatedFiles = new Set(await readdir(generatedDir));
const missing = [];

await mkdir(figuresDir, { recursive: true });

for (const page of pages) {
  const pngName = `${page.slug}.png`;
  if (!generatedFiles.has(pngName)) {
    missing.push(pngName);
    continue;
  }

  const input = path.join(generatedDir, pngName);
  const output = path.join(figuresDir, `${page.slug}.jpg`);
  await sharp(input)
    .resize({ width: 1536, height: 864, fit: 'cover' })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(output);
}

if (missing.length > 0) {
  console.error(`Missing ${missing.length} generated PNG files:`);
  for (const file of missing) console.error(`- ${file}`);
  process.exitCode = 1;
} else {
  console.log(`Applied ${pages.length} generated figures to public/figures`);
}
