# BioLearn AI

BioLearn AI は、分子生物学・細胞生物学・ゲノミクス・バイオインフォマティクスを日本語で体系的に学ぶための教材サイトです。

想定ドメインは `biolearn.ai`、GitHub Organization は `ingcreators` です。

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

Cloudflare Pages では、ビルドコマンドに `npm run build`、出力ディレクトリに `dist` を指定します。

## Content structure

教材ページは `src/content/docs` に MDX として配置します。ファイル名と URL slug は英語小文字の kebab-case を使い、本文は日本語で書きます。

各レッスンは次の構成を基本にします。

1. この記事で学ぶこと
2. まず一言でいうと
3. 本文
4. よくある誤解
5. 重要用語
6. 確認問題
7. 次に読む記事

## Educational components

MDX では次の教材用コンポーネントを利用できます。

- `LearningGoals`
- `TermBox`
- `Quiz`
- `NextSteps`
- `GlossaryTable`

## License

Source code is licensed under the MIT License.

Educational content, articles, diagrams, and figures are licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0). See `LICENSE-CONTENT.md`.

This site is an educational resource and does not provide medical diagnosis, treatment advice, or personalized health guidance.
