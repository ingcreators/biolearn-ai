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

基礎概念レッスンは、目次だけで学習の流れが分かる構成を基本にします。

1. この記事で学ぶこと
2. 見出しなしの「とは何か」説明（2段落、合計2〜4文程度）
3. 見出しなしの `LessonFigure`
4. なぜ{概念名}の視点が重要か
5. どんな{概念名}があるか / どんな種類があるか
6. {概念名}はどう調べるか / どう観察・測定するか
7. {概念名}の変化は何につながるか
8. 論文や実験ではどう出てくるか
9. どんな点でつまずきやすいか
10. 重要用語
11. 確認問題
12. 次に読む記事

本文内にはページタイトルと同じ `## {概念名}とは何か` 見出しを作らず、英語表記・略語は `重要用語` の `GlossaryTable` に集約します。用語集リンクは、本文中の初回登場に絞り、記事の中心語は本文で自己リンクせず `GlossaryTable` で接続します。詳しい執筆ルールは `docs/CONTENT_GUIDELINES.md` を参照してください。

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
