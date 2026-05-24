import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const docsDir = path.join(root, 'src', 'content', 'docs');
const outDir = path.join(root, 'tmp', 'figure-prompts');

const sharedPrompt = `Create one polished concept image for a Japanese beginner biology learning site called BioLearn.

Use the article context below to create a single clear visual metaphor or scientific educational illustration that helps a beginner understand the core concept before reading the article.

The output must feel like part of one unified image system across the entire site.

Unified BioLearn image system:
- Modern educational science illustration.
- Calm, friendly, beginner-oriented, and intellectually serious.
- Wide 16:9 composition.
- White or very light warm background.
- Soft natural colors: teal, blue, coral, green, and warm neutral accents.
- Gentle watercolor-like or soft editorial illustration texture, but still crisp and web-ready.
- One central visual idea with a clear focal point.
- Generous margins.
- Balanced composition that will look good inside a lesson figure card.
- Use subtle scientific objects, diagrams, paper pages, cells, DNA, lab tools, charts, notebooks, arrows, magnifiers, or abstract data marks only when they directly support the article concept.

Composition rules:
- Make the concept understandable visually without relying on embedded text.
- Prefer symbolic scenes, visual metaphors, and simple scientific illustrations over box-and-arrow UI diagrams.
- If showing a process, use objects, movement, spatial flow, or visual grouping rather than text labels.
- Avoid generic decorative science wallpaper.
- Avoid crowded dashboards, tiny panels, or dense infographics.
- Avoid cropped edges; keep all important elements safely inside the frame.

Text rules:
- No readable text inside the image.
- No Japanese text, English labels, headings, captions, legends, or sentences embedded in the image.
- If paper pages or notes appear, they may contain only abstract gray lines or blocks, never readable words.

Scientific and editorial constraints:
- Keep the scientific meaning accurate for beginner education.
- Do not imply medical diagnosis, treatment, clinical advice, or unsupported claims.
- Do not add logos, watermarks, citations, brand names, or copyrighted-looking figures.
- The detailed explanation will live in Japanese alt/title/caption outside the image, so the image should stay clean and concept-focused.`;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(fullPath)));
    if (entry.isFile() && entry.name.endsWith('.mdx')) files.push(fullPath);
  }
  return files;
}

function frontmatterValue(source, key) {
  const match = source.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return match?.[1]?.trim() ?? '';
}

function propValue(block, key) {
  const match = block.match(new RegExp(`${key}="([^"]+)"`));
  return match?.[1]?.trim() ?? '';
}

function stripMdx(source) {
  return source
    .replace(/^---[\s\S]*?---/, '')
    .replace(/import .*?;\n/g, '')
    .replace(/<LearningGoals[\s\S]*?\/>\n?/g, '')
    .replace(/<LessonFigure[\s\S]*?\/>\n?/g, '')
    .replace(/<Quiz[\s\S]*?\/>\n?/g, '')
    .replace(/<NextSteps[\s\S]*?\/>\n?/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\{[\s\S]*?\}/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function firstParagraph(source) {
  return (
    stripMdx(source)
      .split(/\n\n+/)
      .map((part) => part.trim())
      .find((part) => part && !part.startsWith('#') && !part.startsWith('|')) ??
    ''
  );
}

function promptFor({
  pageTitle,
  description,
  figureTitle,
  figureAlt,
  figureCaption,
  overview,
}) {
  return `${sharedPrompt}

Article context:
- Page title: ${pageTitle}
- Page description: ${description}
- Intended figure title: ${figureTitle}
- Intended alt text: ${figureAlt}
- Intended caption: ${figureCaption}
- Article overview: ${overview}`;
}

await mkdir(outDir, { recursive: true });
await writeFile(path.join(outDir, '_shared-prompt.txt'), sharedPrompt);

const pages = [];
const batchJobs = [];
for (const file of await walk(docsDir)) {
  const source = await readFile(file, 'utf8');
  const figureBlock = source.match(/<LessonFigure[\s\S]*?\/>/)?.[0];
  if (!figureBlock) continue;

  const src = propValue(figureBlock, 'src');
  if (!src.endsWith('-concept.jpg')) continue;

  const slug = path.basename(src, '.jpg');
  const pageTitle = frontmatterValue(source, 'title');
  const description = frontmatterValue(source, 'description');
  const figureTitle = propValue(figureBlock, 'title');
  const figureAlt = propValue(figureBlock, 'alt');
  const figureCaption = propValue(figureBlock, 'caption');
  const overview = firstParagraph(source);
  const relativePath = path.relative(root, file).replaceAll(path.sep, '/');
  const prompt = promptFor({
    pageTitle,
    description,
    figureTitle,
    figureAlt,
    figureCaption,
    overview,
  });

  pages.push({
    slug,
    src,
    pageTitle,
    relativePath,
    promptPath: `tmp/figure-prompts/${slug}.txt`,
  });

  batchJobs.push({
    prompt,
    use_case: 'scientific-educational',
    size: '1536x864',
    quality: 'medium',
    output_format: 'png',
    out: `${slug}.png`,
  });

  await writeFile(path.join(outDir, `${slug}.txt`), prompt);
}

pages.sort((a, b) => a.slug.localeCompare(b.slug));
batchJobs.sort((a, b) => a.out.localeCompare(b.out));
await writeFile(
  path.join(outDir, 'index.json'),
  `${JSON.stringify(pages, null, 2)}\n`,
);
await writeFile(
  path.join(outDir, 'batch.jsonl'),
  `${batchJobs.map((job) => JSON.stringify(job)).join('\n')}\n`,
);

console.log(`Wrote ${pages.length} prompts to ${path.relative(root, outDir)}`);
