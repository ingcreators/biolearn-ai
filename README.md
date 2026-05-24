# BioLearn

BioLearnは、分子生物学・細胞生物学・ゲノミクス・バイオインフォマティクスを日本語で体系的に学ぶための生命科学教材サイトです。

公開 URL は `https://biolearn.ai/` です。GitHub Organization は `ingcreators` です。

## Tech stack

- Astro
- Starlight
- MDX
- TypeScript
- Cloudflare Pages

## Development

```bash
npm install
npm run dev
```

ローカルでは Astro の表示する URL をブラウザで開いて確認します。

## Build

```bash
npm run build
```

`astro.config.mjs` の `site` は `https://biolearn.ai` に設定しています。canonical URL、OGP の `og:url`、sitemap はこの公開 URL を前提に生成されます。

Cloudflare Pages では次の設定を使います。

- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

デプロイ前の基本確認は次の通りです。

```bash
npm run build
```

ビルド後、`dist/sitemap-index.xml`、`dist/robots.txt`、各ページの canonical URL が `https://biolearn.ai/` 配下になっていることを確認します。

## Content structure

教材ページは `src/content/docs` に MDX として配置します。ファイル名と URL slug は英語小文字の kebab-case を使い、本文は日本語で書きます。

各レッスンは次の構成を基本にします。

1. この記事で学ぶこと
2. 見出しなしの短い概要
3. 見出しなしの `LessonFigure`
4. 見出しなしの基礎解説
5. なぜ重要か
6. 英語表記と略語
7. よくある誤解
8. 重要用語
9. 確認問題
10. 次に読む記事

## Educational components

MDX では次の教材用コンポーネントを利用できます。

- `LearningGoals`
- `LessonFigure`
- `Quiz`
- `NextSteps`
- `GlossaryTable`

## License

Source code is licensed under the MIT License.

Educational content, articles, diagrams, and figures are licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0). See `LICENSE-CONTENT.md`.

This site is an educational resource and does not provide medical diagnosis, treatment advice, or personalized health guidance.
