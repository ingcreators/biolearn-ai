# Component guidelines

## Purpose

教材用コンポーネントは、MDX本文の見通しをよくし、学習体験を揃えるために使います。複雑な状態管理よりも、静的で読みやすい構造を優先します。

## Components

### LearningGoals

記事の冒頭で、読者が学ぶ内容を箇条書きで示します。

### Quiz

確認問題を表示します。解答例は `details` 要素で開閉できるようにします。

### NextSteps

記事末尾で次に読む記事を示します。

### LessonFigure

各レッスンの冒頭で、短い概要の直後に基礎解説の中心概念を示す教材画像を表示します。

```mdx
<LessonFigure
  src="/figures/dna-concept.jpg"
  alt="細胞核の中のDNAが一部読み出され、RNAとタンパク質へつながる流れを示す教材イラスト"
  title="DNAは保存された情報であり、必要な部分が読み出される"
  caption="DNA全体が常に使われるのではなく、細胞の状態に応じて一部の領域が読み出されます。"
/>
```

- `src`: `public/figures/` 配下の画像を `/figures/...` で参照する。
- `alt`: 画像が見えない読者にも内容が伝わる説明にする。装飾画像として扱わない。
- `title`: 図から読み取ってほしい要点を短く書く。
- `caption`: 本文理解を助ける補足を1文で書く。
- 画像内の文字は最小限にし、ラベルや説明はHTML側に置く。
- 生成画像はWeb向けに軽量化し、原則 `.jpg` として配置する。

### GlossaryTable

用語集ページで、日本語、英語、略語、説明を表形式で表示します。

### ArticleList

カテゴリトップやラーニングパスで、frontmatter から記事一覧を生成します。

- `part` を指定すると、同じ大カテゴリの記事を `order` 順に表示する。
- `learningPath` を指定すると、該当するラーニングパスの記事をカテゴリ横断で表示する。
- `groupByModule` を `true` にすると、`module` ごとに小単元として分けて表示する。
- `prerequisites` は先頭3件だけ「前提」として表示する。読者に見せたい前提から順に並べる。
- `relatedTerms` は先頭3件だけ「用語」として表示する。記事一覧で優先して見せたい用語から順に並べる。
- `relatedTerms` には `/glossary/.../` のURLではなく、用語集ページの slug を入れる。たとえば `/glossary/sample-size/` へリンクしたい場合は `sample-size` と書く。
- `relatedTerms` に入れる用語は、原則として既存の用語集ページに対応させる。用語集がない場合は、先に用語集ページを作るか、表示対象として本当に必要かを見直す。

## Figure generation workflow

新しい教材画像を作るときは、次の方針を守ります。

1. 記事の基礎解説から、読者に見せたい中心概念を1つ選ぶ。
2. 画像生成では「calm, trustworthy Japanese educational science illustration」「watercolor-like semi-flat digital illustration」「no embedded text」を基本指定にする。
3. 画像内に細かい専門用語や長文ラベルを入れない。
4. 生成画像を `public/figures/{lesson-slug}-concept.jpg` に配置する。
5. 必要に応じて横幅1536px程度、JPEG品質80〜85程度に軽量化する。
6. `LessonFigure` で `alt`、`title`、`caption` を必ず設定する。
7. `npm run build` を実行して、画像参照切れがないことを確認する。

## Design

- 角丸は控えめにし、信頼感のある教育・研究系の見た目にする。
- 日本語本文の読みやすさを優先し、余白と行間を広めに取る。
- スマートフォンでも横スクロールや文字詰まりが起きにくい構造にする。
