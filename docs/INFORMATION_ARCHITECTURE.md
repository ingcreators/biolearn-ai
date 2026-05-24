# BioLearn 情報設計

この文書は [PRODUCT_BRIEF.md](./PRODUCT_BRIEF.md) と [FINAL_CONTENT_MAP.md](./FINAL_CONTENT_MAP.md) を上位設計として扱い、BioLearn の URL、サイドバー、カテゴリ、コンテンツモデルを実装しやすい形に落とし込んだものです。目的・編集方針は `PRODUCT_BRIEF.md`、最終的な部・モジュール・記事構成と個別 URL は `FINAL_CONTENT_MAP.md` を基準にします。

## 目的

BioLearn は、生命科学の初学者が分子生物学、細胞生物学、ゲノミクス、実験手法、バイオインフォマティクス、統計・研究デザインを段階的に学び、最終的に生命科学論文の Figure、Methods、Results を読めるようになるための日本語教材サイトです。

単なるブログや用語集ではなく、学習ロードマップ、目的別ラーニングパス、分野別カテゴリ、用語集、Figure 読解、論文読解演習を組み合わせた静的教材サイトとして設計します。

## ブランド

- 公開サイト名は BioLearn とする。
- ドメインは `biolearn.ai` とする。
- リポジトリ名は `biolearn-ai` のままでよい。
- 公開ブランドは BioLearn に統一する。
- 将来 AI 機能を追加する場合も、機能名や補助機能として扱い、サイト名にはしない。

## URL 設計

URL は英語の lowercase kebab-case で統一します。記事数が 120〜160 本に増えても、分野、目的、参照情報を混在させないことを優先します。

| URL                      | 役割                      |
| ------------------------ | ------------------------- |
| `/start/`                | 初学者向けの入口          |
| `/roadmap/`              | 全体ロードマップ          |
| `/paths/`                | ラーニングパス一覧        |
| `/paths/foundations/`    | 基礎から学ぶ              |
| `/paths/figure-reading/` | Figure を読めるようになる |
| `/paths/paper-reading/`  | 論文を読めるようになる    |
| `/fundamentals/`         | 生命科学の基礎            |
| `/molecular-biology/`    | 分子生物学                |
| `/cell-biology/`         | 細胞生物学                |
| `/genomics/`             | ゲノミクス                |
| `/methods/`              | 実験手法                  |
| `/bioinformatics/`       | バイオインフォマティクス  |
| `/statistics/`           | 統計・研究デザイン        |
| `/figures/`              | 論文 Figure の読み方      |
| `/papers/`               | 論文読解演習              |
| `/glossary/`             | 用語集                    |
| `/resources/`            | 外部学習リソースと早見表  |
| `/about/`                | BioLearn について         |

## サイドバー方針

サイドバーは全記事一覧にしません。120〜160 本規模に増えたときも、左ナビは主要入口を示す案内板に保ちます。

### 学習を始める

- はじめに: `/start/`
- 学習ロードマップ: `/roadmap/`
- 論文を読めるようになるまで: `/paths/paper-reading/`

### ラーニングパス

- 基礎から学ぶ: `/paths/foundations/`
- Figure を読めるようになる: `/paths/figure-reading/`
- 論文を読めるようになる: `/paths/paper-reading/`

### 分野別に学ぶ

- 生命科学の基礎: `/fundamentals/`
- 分子生物学: `/molecular-biology/`
- 細胞生物学: `/cell-biology/`
- ゲノミクス: `/genomics/`
- 実験手法: `/methods/`
- バイオインフォマティクス: `/bioinformatics/`
- 統計・研究デザイン: `/statistics/`
- 論文 Figure の読み方: `/figures/`
- 論文読解演習: `/papers/`

### リファレンス

- 用語集: `/glossary/`
- 実験手法早見表: `/resources/methods-cheatsheet/`
- Figure 早見表: `/resources/figures-cheatsheet/`
- PubMed / PMC の使い方: `/resources/pubmed-pmc/`
- 外部学習リソース: `/resources/`
- About: `/about/`

## ラーニングパス

ラーニングパスは、記事番号ではなく目的で名付けます。数値だけで規模を示すコース名は使いません。

### 基礎から学ぶ

URL: `/paths/foundations/`

生命科学の地図、細胞、DNA、RNA、タンパク質、遺伝子、セントラルドグマ、転写、翻訳、遺伝子発現を順に学びます。高校生物を学び直したい人、生命科学に初めて入る人の入口です。

### Figure を読めるようになる

URL: `/paths/figure-reading/`

実験手法、RNA-seq、差次的発現解析、統計表示、Figure legend、棒グラフ、qPCR、Western blot、Volcano plot、ヒートマップへ進みます。Figure を見た目ではなく、条件、軸、コントロール、ばらつき、統計表示から読む力を育てます。

### 論文を読めるようになる

URL: `/paths/paper-reading/`

Figure 読解に加えて、Abstract、Introduction、Methods、Results、Discussion の役割を学びます。論文の主張を鵜呑みにせず、研究目的、実験設計、サンプル、解析、限界を確認しながら読むことを目標にします。

## コンテンツモデル

### Lesson

分野別カテゴリに置く通常記事です。新規 Lesson は原則として次の構成を持ちます。

1. この記事で学ぶこと
2. 要点
3. 基礎解説
4. 図解
5. 英語表記と略語
6. よくある誤解
7. 重要用語
8. 確認問題
9. 次に読む記事

新規 Lesson には `LessonFigure` を含め、画像は `public/figures/{lesson-slug}-concept.jpg` に置きます。画像内の文字は最小限にし、説明は日本語の `alt`、`title`、`caption` に置きます。

### Category Top

分野の入口ページです。その分野で学ぶこと、読む順番、到達目標、関連用語、次に進むカテゴリを示します。サイドバーからは原則として Category Top にリンクします。

### Learning Path

目的別の学習順を示すページです。カテゴリ横断で記事を束ねますが、記事そのものを重複させません。

### Glossary Entry

用語の短い説明ページです。本文記事への入口として使い、用語集だけで学習を完結させないようにします。

### Figure Reading

Figure の型ごとに、何を確認するか、よくある誤読、関連する実験・解析の背景を扱います。外部論文画像は使わず、必要に応じてオリジナル模式図を使います。

### Paper Exercise

将来追加する論文読解演習です。公開論文を扱う場合は、著作権に配慮し、外部画像の転載ではなく、リンク、引用の最小化、独自の読解メモ、再作図した模式図を使います。

## frontmatter 設計

記事数が増えてもカテゴリトップやラーニングパスを保守しやすいように、主要 Lesson と Figure 読解記事には次のメタデータを持たせます。

```yaml
part: fundamentals
module: genetic-information
level: foundation
order: 20
learningPaths:
  - foundations
relatedTerms:
  - dna
  - gene
prerequisites:
  - /fundamentals/cell/
```

`part` は大カテゴリ、`module` はカテゴリ内の小単元、`level` は難度、`order` はカテゴリ内の表示順、`learningPaths` は含まれるラーニングパス、`relatedTerms` は用語集 slug、`prerequisites` は前提記事を表します。

`ArticleList` では `prerequisites` と `relatedTerms` の先頭3件だけを一覧上に表示します。そのため、カテゴリトップやラーニングパスで読者に見せたい前提記事・用語ほど配列の前に置きます。`prerequisites` は内部URL、`relatedTerms` は用語集の slug として扱い、URLを混ぜません。

Starlight では `next` がページネーション設定として使われるため、ブリーフ内の `next` 配列は現時点では追加しません。次に読む記事は既存の `NextSteps` コンポーネントで管理し、frontmatter に持たせる場合は `nextLessons` など衝突しない名前を使います。

## 既存ページの移動

正式公開前のため、既存 URL は整理済みの構造へ移動できます。

| 旧 URL                                   | 新 URL                        |
| ---------------------------------------- | ----------------------------- |
| `/getting-started/`                      | `/start/`                     |
| `/getting-started/what-is-life-science/` | `/fundamentals/life-science/` |
| `/basics/`                               | `/fundamentals/`              |
| `/basics/what-is-a-cell/`                | `/fundamentals/cell/`         |
| `/reading-figures/`                      | `/figures/`                   |
| `/reading-figures/*`                     | `/figures/*`                  |
| `/molecular-biology/what-is-pcr/`        | `/methods/pcr/`               |

DNA、RNA、タンパク質、遺伝子、ゲノム、染色体などの初学者向け基礎記事は `/fundamentals/` へ移動済みです。セントラルドグマ、転写、翻訳、遺伝子発現、PCR、RNA-seq、シーケンスデータなどの記事は、各カテゴリ内で短い slug に整理しています。

`FINAL_CONTENT_MAP.md` と照合し、次の URL は最終形へ移行済みです。

| 現在の URL                                 | 状態     |
| ------------------------------------------ | -------- |
| `/fundamentals/life-science/`              | 移行済み |
| `/fundamentals/cell/`                      | 移行済み |
| `/cell-biology/cell-membrane/`             | 移行済み |
| `/cell-biology/organelles/`                | 移行済み |
| `/cell-biology/cell-signaling/`            | 移行済み |
| `/bioinformatics/differential-expression/` | 移行済み |
| `/figures/figure-legend/`                  | 移行済み |
| `/resources/figures-cheatsheet/`           | 移行済み |

## 拡張方針

- サイドバーは主要入口だけに保つ。
- 記事一覧は各カテゴリトップまたはラーニングパスに持たせる。
- 1 記事 1 概念を基本とし、記事が長くなりすぎる場合は分割する。
- 内部リンクは「次に読む記事」「関連用語」「前提知識」を明示する。
- 医療・診断・治療助言のように読める表現は避け、教育目的の説明に留める。
- ユーザー向け本文は日本語で書く。
