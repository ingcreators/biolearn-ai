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

## Local command notes

- In this Windows Codex workspace, do not run bare `node` or `npm`. `node` may resolve to the Codex app-bundled executable and fail with access denied, and `npm` may not be on `PATH`.
- Use the installed Node.js paths explicitly:
  - Node scripts: `& 'C:\Program Files\nodejs\node.exe' path\to\script.mjs`
  - npm scripts: `& 'C:\Program Files\nodejs\npm.cmd' run build`
- If sandboxing blocks direct execution, use the approved PowerShell 7 wrapper form:
  - `& 'C:\Program Files\PowerShell\7\pwsh.exe' -Command "& 'C:\Program Files\nodejs\npm.cmd' run check"`

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

Before creating or reorganizing lesson content, read `docs/CONTENT_GUIDELINES.md`.

Foundation concept lessons should make the learning flow understandable from the table of contents. Use this structure by default:

1. この記事で学ぶこと
2. Short "what it is" overview immediately after `LearningGoals`, without a heading, in 2 paragraphs and 2-4 sentences total
3. `LessonFigure` immediately after the overview, without a 図解 heading
4. `なぜ{概念名}の視点が重要か`
5. `どんな{概念名}があるか` or `どんな種類があるか`
6. `{概念名}はどう調べるか` or `どう観察・測定するか`
7. `{概念名}の変化は何につながるか`
8. `論文や実験ではどう出てくるか`
9. `どんな点でつまずきやすいか`
10. `重要用語`
11. 確認問題
12. 次に読む記事

Do not add a body heading like `## {概念名}とは何か` when it duplicates the page title. Do not repeat the same definition or basic overview after the figure.

If `よく混同される概念` and `よくある誤解` would be close in content, combine them into `どんな点でつまずきやすいか`, using `### 似た用語との区別` and `### 解釈の落とし穴` when useful.

Do not keep `英語表記と略語` as a separate section in foundation concept lessons. Put Japanese term, English term, abbreviation only when needed, one-sentence description, and glossary link in `重要用語` with `GlossaryTable`.

For glossary links in normal body text, link each glossary term at its first body occurrence only. Do not repeatedly link the same term, do not link only part of a compound term, and do not force a self-link for the article's central title term; connect the central term in `GlossaryTable`. `NextSteps` should link only to lesson articles, not glossary pages.

Figure reading, paper reading, resources, and path pages may use a structure that fits their purpose. For foundation concepts, experimental methods, statistics, and bioinformatics terms, keep definition, importance, connection to papers or experiments, pitfalls, and important terms unless there is a clear reason to omit one.

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
