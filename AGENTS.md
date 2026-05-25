# AGENTS.md

## Project overview

BioLearn is a Japanese learning site for molecular biology, cell biology, genomics, and bioinformatics.

## Development rules

- Use Astro + Starlight + MDX.
- Keep the site static-first.
- Prefer simple, maintainable components.
- Use TypeScript where applicable.
- Use kebab-case for slugs and file names.
- Keep content in Japanese.
- Keep code comments in English or Japanese consistently, but user-facing text must be Japanese.

## Content rules

- Explain concepts accurately but clearly for beginners.
- Include Japanese term, English term, and abbreviation when useful.
- Do not present medical diagnosis or treatment advice.
- Avoid unsupported claims.
- Prefer educational explanations over sensational claims.
- Use diagrams only when they are original or clearly licensed.
- New lesson pages should place a `LessonFigure` image near the top, after the short overview and before the main explanatory text.
- Store lesson figure images under `public/figures/{lesson-slug}-concept.jpg`.
- Keep generated images free of dense embedded text; put explanations in Japanese `alt`, `title`, and `caption`.
- Optimize generated lesson images for the web before committing.
- When creating lesson figure images, use `scripts/build-figure-prompts.mjs` to build the shared prompt for the target lesson. Create the image with the built-in image generation tool using both the shared prompt and the lesson's article context, then optimize the result as `public/figures/{lesson-slug}-concept.jpg`.
- Do not create lesson figure images with locally generated SVG, canvas, HTML/CSS, or hand-coded placeholder art. Local scripts may only be used to optimize, resize, convert, or apply images that were produced by the shared prompt image-generation workflow.

## Lesson structure

Each lesson should include:

1. この記事で学ぶこと
2. Short overview paragraph without a heading
3. `LessonFigure` without a 図解 heading
4. Main explanatory text without a 基礎解説 heading
5. なぜ重要か
6. 具体例（概念系レッスンでは原則入れる）
7. よく混同される概念（概念系レッスンでは原則入れる）
8. 論文や実験ではどう出てくるか（概念系レッスンでは原則入れる）
9. 英語表記と略語
10. よくある誤解
11. 重要用語
12. 確認問題
13. 次に読む記事

Figure の読み方、論文読解、リソース、パス案内のように記事の目的が明確に異なる場合は、そのカテゴリに合う構成を優先してよい。ただし、基礎概念、実験手法、統計、バイオインフォマティクス用語を説明する記事では、「具体例」「よく混同される概念」「論文や実験ではどう出てくるか」を入れる。

## Quality checks

Before finishing a task, run:

- npm run build

If formatting or linting scripts exist, run them too.

## Review guidelines

- Treat broken builds as P1.
- Treat broken internal links as P1.
- Treat incorrect scientific explanations as P1.
- Treat medical advice-like wording as P1.
- Treat typos in Japanese educational content as P2 unless they change meaning.
