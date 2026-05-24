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

## Lesson structure

Each lesson should include:

1. この記事で学ぶこと
2. Short overview paragraph without a heading
3. `LessonFigure` without a 図解 heading
4. Main explanatory text without a 基礎解説 heading
5. なぜ重要か
6. 英語表記と略語
7. よくある誤解
8. 重要用語
9. 確認問題
10. 次に読む記事

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
