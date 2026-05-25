# BioLearn 実装計画

この計画は [PRODUCT_BRIEF.md](./PRODUCT_BRIEF.md) と [FINAL_CONTENT_MAP.md](./FINAL_CONTENT_MAP.md) を上位設計として、現在の実装を BioLearn の最終方針へ寄せるための段階的な作業計画です。

`PRODUCT_BRIEF.md` は目的・編集方針・実装方針の基準、`FINAL_CONTENT_MAP.md` は最終的な部・モジュール・記事構成、優先度、URL の基準として扱います。個別記事の配置や slug に差分がある場合は `FINAL_CONTENT_MAP.md` を優先します。

## 現在の構成

- Astro + Starlight + MDX の静的サイト。
- 表示ブランド名は `astro.config.mjs`、トップページ、About で BioLearn に統一済み。
- サイドバーは記事単位ではなく、主要入口型の4グループに整理済み。
  - 学習を始める
  - ラーニングパス
  - 分野別に学ぶ
  - リファレンス
- 主要入口ページは概ね作成済み。
  - `/start/`
  - `/roadmap/`
  - `/paths/`
  - `/paths/foundations/`
  - `/paths/figure-reading/`
  - `/paths/paper-reading/`
  - `/fundamentals/`
  - `/molecular-biology/`
  - `/cell-biology/`
  - `/genomics/`
  - `/methods/`
  - `/bioinformatics/`
  - `/statistics/`
  - `/figures/`
  - `/papers/`
  - `/glossary/`
  - `/resources/`
  - `/about/`
- DNA、RNA、タンパク質、遺伝子、ゲノム、染色体の基礎記事は `/fundamentals/` に移動済み。
- セントラルドグマ、転写、翻訳、遺伝子発現、PCR、RNA-seq、シーケンスデータ、差次的発現解析は、カテゴリ内で短い slug に整理済み。
- `FINAL_CONTENT_MAP.md` と照合すると、全体のトップレベル構成、サイドバー方針、ラーニングパス方針は一致している。一方で、いくつかの既存記事 slug はまだ最終 URL に完全一致していない。

## 目標構成

BioLearn は、次の3つの導線を分けた教材サイトとして整理します。

- ラーニングパス: 目的別に順番に学ぶ。
- 分野別カテゴリ: 必要な記事を分野から探す。
- 用語集: 辞書的に調べ、本文記事へ戻る。

トップレベル URL は次を基準にします。

| URL                      | 役割                      |
| ------------------------ | ------------------------- |
| `/start/`                | はじめに                  |
| `/roadmap/`              | 学習ロードマップ          |
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

## URL 変更方針

- 正式公開前なので、URL 変更は許可する。
- ただし、1フェーズで大量移動せず、内部リンク更新とビルド確認を必ずセットにする。
- ファイル名と URL slug は英語小文字 kebab-case にする。
- 主要な既存記事では `what-is-*` を外し、短い概念 slug へ整理する。
- 旧 `getting-started`、`basics`、`reading-figures` 系は、現在の `/start/`、`/fundamentals/`、`/figures/` に統合する。
- DNA、RNA、タンパク質、遺伝子、ゲノム、染色体などの初学者向け基礎記事は `/fundamentals/` へ寄せる。
- 最終 URL は `FINAL_CONTENT_MAP.md` の一覧を基準にする。現状の URL が動いていても、最終マップと異なる場合は次フェーズの移行対象として扱う。

## 移動対象ページ一覧

Phase 2 で実施した URL 整理は次の通りです。

| 旧 URL                                                      | 新 URL                                     | 状態          |
| ----------------------------------------------------------- | ------------------------------------------ | ------------- |
| `/molecular-biology/what-is-dna/`                           | `/fundamentals/dna/`                       | 移動済み      |
| `/molecular-biology/what-is-rna/`                           | `/fundamentals/rna/`                       | 移動済み      |
| `/molecular-biology/what-is-protein/`                       | `/fundamentals/protein/`                   | 移動済み      |
| `/molecular-biology/what-is-gene/`                          | `/fundamentals/gene/`                      | 移動済み      |
| `/genomics/what-is-genome/`                                 | `/fundamentals/genome/`                    | 移動済み      |
| `/genomics/what-are-chromosomes/`                           | `/fundamentals/chromosome/`                | 移動済み      |
| `/genomics/what-are-genetic-variants/`                      | `/genomics/genetic-variants/`              | slug 短縮済み |
| `/molecular-biology/what-is-central-dogma/`                 | `/molecular-biology/central-dogma/`        | slug 短縮済み |
| `/molecular-biology/what-is-transcription/`                 | `/molecular-biology/transcription/`        | slug 短縮済み |
| `/molecular-biology/what-is-translation/`                   | `/molecular-biology/translation/`          | slug 短縮済み |
| `/molecular-biology/what-is-gene-expression/`               | `/fundamentals/gene-expression/`           | slug 短縮済み |
| `/methods/what-is-pcr/`                                     | `/methods/pcr/`                            | slug 短縮済み |
| `/bioinformatics/what-is-rna-seq/`                          | `/bioinformatics/rna-seq/`                 | slug 短縮済み |
| `/bioinformatics/what-is-sequence-data/`                    | `/bioinformatics/sequence-data/`           | slug 短縮済み |
| `/bioinformatics/what-is-differential-expression-analysis/` | `/bioinformatics/differential-expression/` | slug 短縮済み |

`FINAL_CONTENT_MAP.md` に合わせて、次の追加移行を Phase 7 で実施しました。

| 現在の URL                                 | 優先度 | 状態     |
| ------------------------------------------ | ------ | -------- |
| `/fundamentals/life-science/`              | P0     | 移行済み |
| `/fundamentals/cell/`                      | P0     | 移行済み |
| `/cell-biology/cell-membrane/`             | P0     | 移行済み |
| `/cell-biology/organelles/`                | P0     | 移行済み |
| `/cell-biology/cell-signaling/`            | P0     | 移行済み |
| `/bioinformatics/differential-expression/` | P0     | 移行済み |
| `/figures/figure-legend/`                  | P0     | 移行済み |
| `/resources/figures-cheatsheet/`           | P1     | 移行済み |

## 移行手順

大きなファイル移動やURL変更を続ける前に、各フェーズで次の順番を守ります。

1. `FINAL_CONTENT_MAP.md` の対象URLと現在のファイルを対応づける。
2. 1カテゴリまたは小さなURL群ごとにファイル名を変更する。
3. frontmatter の `part`、`module`、`priority`、`order`、`learningPaths` を最終マップに合わせて更新する。
4. `rg` で旧URLを検索し、本文、カテゴリトップ、ラーニングパス、用語集、サイドバー、リソースへの内部リンクを更新する。
5. カテゴリトップの `ArticleList` 表示で、移動後の記事が正しいモジュールに入ることを確認する。
6. `npm run format:check` と `npm run build` を実行する。
7. ビルドが通ったあとに次のカテゴリへ進む。

## 新設するカテゴリトップ

Phase 1 の対象として、以下の主要入口ページを維持または作成します。

- `/paths/`
- `/paths/foundations/`
- `/paths/figure-reading/`
- `/paths/paper-reading/`
- `/methods/`
- `/statistics/`
- `/papers/`
- `/about/`

次フェーズでは、各カテゴリトップを「記事一覧」ではなく学習入口として厚くします。

- この分野で学ぶこと
- まず押さえる3つの考え方
- モジュール一覧
- 読む順番
- このカテゴリを終えるとできること
- 関連する用語
- 関連する Figure
- 次に進むカテゴリ

## サイドバー変更案

サイドバーは、120〜160本規模でも破綻しないように、記事を網羅する目次ではなく主要入口だけを出します。

- 学習を始める
  - はじめに
  - 学習ロードマップ
  - 論文を読めるようになるまで
- ラーニングパス
  - 基礎から学ぶ
  - Figureを読めるようになる
  - 論文を読めるようになる
- 分野別に学ぶ
  - 生命科学の基礎
  - 分子生物学
  - 細胞生物学
  - ゲノミクス
  - 実験手法
  - バイオインフォマティクス
  - 統計・研究デザイン
  - 論文Figureの読み方
  - 論文読解演習
- リファレンス
  - 用語集
  - 実験手法早見表
  - Figure早見表
  - PubMed / PMC の使い方
  - 外部学習リソース
  - About

## 既存リンク更新方針

- ページ移動ごとに `rg` で旧 URL を検索し、本文、トップページ、カテゴリトップ、用語集、ラーニングパス、サイドバーを同時に更新する。
- `what-is-*` slug を短縮するときは、関連する用語集ページのリンクも確認する。
- Starlight のビルドで検出される壊れた内部リンクは P1 として修正する。
- 外部画像や著作権不明画像は追加しない。
- 医療上の診断・治療助言に読める表現がないか、移動時に合わせて確認する。

## リスクと注意点

- 既存記事の URL を短縮すると、内部リンクの更新漏れでビルドや導線が壊れる可能性がある。
- 基礎記事を `/fundamentals/` に移しすぎると、分子生物学やゲノミクスのカテゴリトップが薄く見える可能性がある。カテゴリトップ側で「次に読む分子生物学記事」を明確にする。
- `what-is-*` の削除は URL とファイル名の両方に影響するため、1カテゴリずつ進める。
- 用語集ページと本文記事の役割が重複しないようにする。用語集は短く、本文記事へ誘導する。
- 公開ブランド名は BioLearn に統一し、BioLearn AI は公開サイト名として使わない。
- 数値入りコース名は使わない。

## Phase 1 実装範囲

今回の Phase 1 では、次を実装対象にします。

- `docs/PRODUCT_BRIEF.md` を追加する。
- `docs/INFORMATION_ARCHITECTURE.md` を上位ブリーフと整合させる。
- `docs/IMPLEMENTATION_PLAN.md` を作成する。
- サイドバーを主要入口型にする。
- `/paths/` と3つのラーニングパスページを用意する。
- `/methods/`、`/statistics/`、`/papers/`、`/about/` を用意する。
- 公開ブランド名が BioLearn に統一されていることを確認する。
- `npm run format:check` と `npm run build` を実行する。

## Phase 2 実装範囲

今回の Phase 2 では、次を実装対象にしました。

- DNA、RNA、タンパク質、遺伝子を `/fundamentals/` へ移動する。
- ゲノム、染色体を `/fundamentals/` へ移動する。
- セントラルドグマ、転写、翻訳、遺伝子発現の URL を短縮する。
- PCR、RNA-seq、シーケンスデータ、差次的発現解析の URL を短縮する。
- 遺伝的変異の記事 URL を `/genomics/genetic-variants/` に短縮する。
- 内部リンク、カテゴリトップ、ロードマップ、ラーニングパス、用語集リンクを更新する。

## Phase 3 実装範囲

今回の Phase 3 では、次を実装対象にしました。

- Starlight の `docs` collection schema を拡張し、教材メタデータを frontmatter として検証できるようにする。
- 既存の主要 Lesson / Figure 読解記事に以下を追加する。
  - `part`
  - `module`
  - `level`
  - `order`
  - `learningPaths`
  - `relatedTerms`
  - `prerequisites`
- `next` は Starlight のページネーション設定と名前が衝突するため、現時点では追加しない。次に読む記事は既存の `NextSteps` コンポーネントで扱い、将来必要なら `nextLessons` のような別名で設計する。
- カテゴリトップ、ラーニングパス、用語集トップを将来自動生成しやすい土台を作る。

## Phase 4 実装範囲

今回の Phase 4 では、次を実装対象にしました。

- `ArticleList` コンポーネントを追加し、`part` または `learningPath` を指定して記事一覧を生成できるようにする。
- 以下のカテゴリトップで、手書きの記事一覧を frontmatter ベースの一覧へ置き換える。
  - `/fundamentals/`
  - `/molecular-biology/`
  - `/cell-biology/`
  - `/genomics/`
  - `/methods/`
  - `/bioinformatics/`
  - `/figures/`
- 以下のラーニングパスで、手書きの記事一覧を frontmatter ベースの一覧へ置き換える。
  - `/paths/foundations/`
  - `/paths/figure-reading/`
  - `/paths/paper-reading/`
- 記事追加時は frontmatter を更新すれば、カテゴリトップやラーニングパスに自然に反映される状態にする。

## Phase 5 実装範囲

今回の Phase 5 では、次を実装対象にしました。

- `ArticleList` に `groupByModule` オプションを追加する。
- カテゴリトップでは、記事一覧を `module` ごとの小単元に分けて表示する。
- ラーニングパスでは、カテゴリ横断の順番を優先して連続リストのまま表示する。
- `module` slug に対応する日本語ラベルを `ArticleList` 内で管理する。

## Phase 6 実装範囲

今回の Phase 6 では、次を実装対象にしました。

- 添付の最終コンテンツ構成を `docs/FINAL_CONTENT_MAP.md` として追加する。
- `PRODUCT_BRIEF.md` と `INFORMATION_ARCHITECTURE.md` に、`FINAL_CONTENT_MAP.md` を個別URL・モジュール・記事構成の基準として扱うことを明記する。
- 現在の URL 再構成、サイドバー、カテゴリトップを最終マップと照合する。
- 追加で必要な URL 正規化対象を移行表として明文化する。
- 大きなファイル移動を続ける前の移行手順をこの文書に固定する。

## Phase 7 実装範囲

今回の Phase 7 では、次を実装対象にしました。

- `FINAL_CONTENT_MAP.md` の P0 URL に合わせて、残っていた `what-is-*` 系 URL を移動する。
- `/start/what-is-life-science/` を `/fundamentals/life-science/` に移し、生命科学の基礎カテゴリの記事として扱う。
- `/fundamentals/what-is-a-cell/` を `/fundamentals/cell/` に短縮する。
- 細胞生物学の既存 P0 記事を `/cell-biology/cell-membrane/`、`/cell-biology/organelles/`、`/cell-biology/cell-signaling/` に短縮する。
- 差次的発現解析を `/bioinformatics/differential-expression/` に短縮する。
- Figure legend 記事を `/figures/figure-legend/` に短縮する。
- Figure 早見表を `/resources/figures-cheatsheet/` に移動する。
- 移動後の内部リンク、サイドバー、カテゴリトップ、用語集リンクを更新する。

## Phase 8 実装範囲

今回の Phase 8 では、`FINAL_CONTENT_MAP.md` の未作成 P0/P1 入口記事から、Figure 読解と論文読解に直結する記事を追加しました。

- `/methods/qpcr/`: qPCR の原理、Ct値、RT-qPCRとの関係を説明する。
- `/statistics/p-value/`: p値の基本、効果量との違い、Figure中の読み方を説明する。
- `/papers/paper-structure/`: 生命科学論文のセクション構成と読み方の全体像を説明する。
- `/papers/how-to-read-methods/`: Methodsで確認するサンプル、条件、解析、統計の読み方を説明する。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。
- `ArticleList` のモジュール表示ラベルに、統計と論文読解の新規モジュールを追加する。

## Phase 9 実装範囲

今回の Phase 9 では、Methods と論文読解の入口をさらに補強しました。

- `/methods/rt-qpcr/`: RNAをcDNAに変換してからqPCRで測る流れを説明する。
- `/methods/sequencing/`: 塩基配列を読む技術としてのシーケンシングを説明する。
- `/methods/ngs/`: 大量の配列断片を並列に読むNGSの基本を説明する。
- `/papers/how-to-read-title-abstract/`: TitleとAbstractから研究の問い、方法、結果、結論を拾う読み方を説明する。
- `/papers/how-to-read-results/`: Results本文をFigureと対応づけて読む方法を説明する。
- `/papers/` を `ArticleList` による自動一覧へ切り替える。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。

## Phase 10 実装範囲

今回の Phase 10 では、Figure読解に必要な統計・実験設計と、NGS Methods の前処理を補強しました。

- `/statistics/biological-technical-replicates/`: 生物学的反復と技術的反復の違いを説明する。
- `/statistics/error-bars/`: SD、SEM、信頼区間など、エラーバーの読み方の基礎を説明する。
- `/statistics/multiple-testing-correction/`: オミクス解析で重要な多重検定補正を説明する。
- `/methods/control/`: 実験の比較基準になる対照群を説明する。
- `/methods/library-preparation/`: NGS前処理としてのライブラリ調製を説明する。
- `/statistics/` を `ArticleList` による自動一覧へ切り替える。
- `ArticleList` のモジュール表示ラベルに、統計と実験設計の新規モジュールを追加する。

## Phase 11 実装範囲

今回の Phase 11 では、実験Figureの代表的な読み方に直結するMethods記事と、基本的な定量Figure記事を追加しました。

- `/methods/western-blot/`: 特定タンパク質を抗体で検出するWestern blotの基本を説明する。
- `/methods/immunostaining/`: 抗体で細胞や組織内のタンパク質局在を見る免疫染色を説明する。
- `/methods/flow-cytometry/`: 多数の細胞を1つずつ測るフローサイトメトリーを説明する。
- `/figures/how-to-read-box-plot/`: 中央値、四分位範囲、ひげ、外れ値を読む箱ひげ図を説明する。
- `/figures/how-to-read-scatter-plot/`: 2変数の関係、点の単位、外れ値、相関を読む散布図を説明する。
- `ArticleList` にタンパク質・細胞実験のモジュール表示ラベルを追加する。

## Phase 12 実装範囲

今回の Phase 12 では、Figure読解カテゴリをさらに拡張しました。

- `/figures/how-to-read-immunostaining/`: 免疫染色画像で局在、強さ、対照、撮影条件を確認する読み方を説明する。
- `/figures/how-to-read-microscopy-image/`: 顕微鏡画像でスケール、倍率、代表性、定量結果を確認する読み方を説明する。
- `/figures/how-to-read-flow-cytometry/`: フローサイトメトリーFigureで点の分布、ゲート、陽性率、対照を確認する読み方を説明する。
- `/figures/how-to-read-pca-plot/`: PCAプロットでサンプル間の全体的な違い、クラスタ、外れ値を読む方法を説明する。
- `/figures/how-to-read-umap-tsne/`: UMAP/t-SNEで点、クラスタ、細胞タイプ注釈を読む方法を説明する。
- `/figures/how-to-read-gsea-plot/`: GSEA plotでランキング、エンリッチメントスコア、FDRを読む方法を説明する。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。

## Phase 13 実装範囲

今回の Phase 13 では、Figure読解を「共通読解スキル」と「解析・評価Figure」に広げます。

- `/figures/axis-label-unit/`: 軸、ラベル、単位、スケール、条件名を最初に確認する読み方を説明する。
- `/figures/multi-panel-figure/`: 複数パネルFigureで、全体の主張と各パネルの役割を読む方法を説明する。
- `/figures/how-to-read-roc-curve/`: ROC曲線の真陽性率、偽陽性率、AUCを、研究Figureとして読む基本を説明する。
- `/figures/how-to-read-kaplan-meier/`: Kaplan-Meier曲線の曲線、打ち切り、リスク数を、教育的な論文読解として説明する。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。
- ROC曲線とKaplan-Meierプロットは、診断・治療・個別予測の助言ではなく、Figure読解のための一般的な教育内容として扱う。

## Phase 14 実装範囲

今回の Phase 14 では、最終コンテンツマップに合わせてFigure読解をさらに補強します。

- Phase 13で追加した一部slugを、`FINAL_CONTENT_MAP.md` の最終URLに合わせて整理する。
  - `/figures/how-to-read-axis-and-labels/` を `/figures/axis-label-unit/` に寄せる。
  - `/figures/how-to-read-panel-layout/` を `/figures/multi-panel-figure/` に寄せる。
  - `/figures/how-to-read-kaplan-meier-plot/` を `/figures/how-to-read-kaplan-meier/` に寄せる。
- `/figures/how-to-read-violin-plot/`: Violin plotで分布の形、中央値、群間の重なりを読む方法を説明する。
- `/figures/how-to-read-pathway-enrichment/`: pathway enrichment plotで経路名、スコア、遺伝子数、FDRを読む方法を説明する。
- `/figures/how-to-read-forest-plot/`: Forest plotで効果量、信頼区間、基準線、研究間のばらつきを読む方法を説明する。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。
- Forest plotは、診断・治療・個別予測の助言ではなく、研究Figureの読み方として扱う。

## Phase 15 実装範囲

今回の Phase 15 では、Figure単体の読み方から、Results本文と論文の主張へつなげる記事を追加します。

- `/figures/how-to-read-correlation-plot/`: 相関図で点の分布、相関係数、p値、相関と因果の違いを読む方法を説明する。
- `/figures/supplementary-figures/`: 補足Figureで追加対照、品質管理、詳細データを確認する読み方を説明する。
- `/figures/figure-to-claim/`: Results本文の主張を、対応するFigure、パネル、データに戻して確認する方法を説明する。
- `/figures/results-section-flow/`: Resultsセクション内でFigureがどの順番で主張を積み上げているかを読む方法を説明する。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。
- `ArticleList` に `figure-synthesis` モジュール表示ラベルを追加し、Figure読解カテゴリ内で応用記事を整理する。

## Phase 16 実装範囲

今回の Phase 16 では、論文読解演習カテゴリの入口と読み方の手順を補強します。

- `/papers/how-to-read-introduction/`: Introductionから背景、既知のこと、未解決の問い、研究目的を拾う方法を説明する。
- `/papers/how-to-read-discussion/`: Discussionで結果の要約、著者の解釈、限界、今後の課題を分けて読む方法を説明する。
- `/papers/first-pass-reading/`: 論文を最初に読むときに、Title、Abstract、Figure、Results、Methods、Discussionをどの順に確認するかを説明する。
- `/papers/figure-first-reading/`: Figureを入口にして、Figure legend、Results、Methodsへ戻りながら論文を読む方法を説明する。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。
- `ArticleList` に `reading-workflow` モジュール表示ラベルを追加し、Papersカテゴリ内で手順系記事を整理する。

## Phase 17 実装範囲

今回の Phase 17 では、論文を読む前の「探す・識別する・選ぶ」導線を追加します。

- `/papers/pubmed/`: PubMedで文献を検索し、Title、Abstract、論文種別、本文リンクを確認する基本を説明する。
- `/papers/pmc/`: PMCで本文が公開されている論文を探し、Figure、Results、Methodsへ進む読み方を説明する。
- `/papers/doi/`: DOIが論文やデータの恒久的な識別子として使われる理由と確認ポイントを説明する。
- `/papers/review-vs-primary-paper/`: レビュー論文と原著論文の目的、読み方、根拠確認の違いを説明する。
- `/papers/how-to-choose-paper/`: 初学者が最初に読む論文を、目的、論文種別、Figure、Methodsの前提から選ぶ方法を説明する。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。
- `ArticleList` に `paper-discovery` モジュール表示ラベルを追加し、Papersカテゴリ内で探索系記事を整理する。
- `/resources/pubmed-pmc/` は短いリファレンス入口として残し、詳細記事への内部リンクを追加する。

## Phase 18 実装範囲

今回の Phase 18 では、論文を選んだ後の精読と演習に進むための記事を追加します。

- `/papers/methods-checklist/`: Methodsでサンプル、条件、対照、反復、測定、解析、統計を確認するチェックリストを説明する。
- `/papers/critical-reading/`: 主張、証拠、限界、代替説明を分けて、論文を批判的に読む方法を説明する。
- `/papers/walkthrough-rna-seq/`: 実在論文ではなくBioLearn用の架空RNA-seqケースを使い、PCA、Volcano plot、ヒートマップ、pathway enrichment、Methods確認をつなげて読む演習を追加する。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。
- `ArticleList` に `paper-walkthrough` モジュール表示ラベルを追加し、Papersカテゴリ内で演習記事を整理する。

## Phase 19 実装範囲

今回の Phase 19 では、実験Figureを含む論文読解演習と、読んだ内容を残すノート作成を追加します。

- `/papers/walkthrough-western-blot/`: BioLearn用の架空Western blotケースを使い、バンド、ローディングコントロール、定量、Methods確認をつなげて読む演習を追加する。
- `/papers/walkthrough-immunostaining/`: BioLearn用の架空免疫染色ケースを使い、代表画像、局在、対照、定量、Methods確認をつなげて読む演習を追加する。
- `/papers/note-taking/`: 論文の問い、Methods、Figure、主張、根拠、限界、次の疑問を整理するノートの取り方を説明する。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。
- 実在論文画像や著作権不明素材は使わず、BioLearn内の架空ケースと概念図で演習を構成する。

## Phase 20 実装範囲

今回の Phase 20 では、補助的な論文読解とゲノム可視化の入口を追加します。

- `/genomics/genome-browser/`: ゲノム上の位置に沿って、遺伝子、変異、シーケンスリード、アノテーションを重ねて見るゲノムブラウザの基本を説明する。
- `/figures/how-to-read-genome-browser/`: 論文Figureに出てくるゲノムブラウザ図で、座標、トラック、遺伝子モデル、変異、リードを読む方法を説明する。
- `/figures/graphical-abstract/`: Graphical abstractを研究全体の要約図として読み、ResultsやFigureに戻って根拠を確認する方法を説明する。
- `/papers/how-to-read-references/`: Referencesから先行研究、レビュー論文、手法論文、次に読む文献を選ぶ方法を説明する。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。
- `ArticleList` に `genome-visualization` モジュール表示ラベルを追加し、ゲノミクスカテゴリ内で可視化記事を整理する。

## Phase 21 実装範囲

今回の Phase 21 では、Phase 20 の次フェーズ候補に沿って、ゲノム系Figure読解とsingle-cell論文演習を追加します。

- `/figures/how-to-read-lollipop-plot/`: タンパク質やゲノム上の位置に沿って変異を示すLollipop plotで、位置、頻度、ドメイン、凡例を確認する方法を説明する。
- `/figures/how-to-read-cnv-plot/`: コピー数変化を示すCNV plotで、ゲノム位置、基準線、増幅、欠失、セグメント、ノイズを読む方法を説明する。
- `/papers/walkthrough-single-cell/`: 架空のsingle-cell解析論文を題材に、UMAP、クラスタ、マーカー遺伝子、条件ごとの細胞割合、Methodsを行き来して読む練習を追加する。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。
- `figures/index.mdx` にゲノム系Figure読解の導線を追記する。

## 次フェーズ候補

1. `priority` frontmatter を既存の主要記事へ広げ、P0/P1/P2 の実装順を機械的に扱えるようにする。
2. `ArticleList` に「前提記事」や関連用語の表示を追加する。
3. 用語集トップを `relatedTerms` と `glossaryTerms` からカテゴリ別に整理する。
4. single-cell解析の基礎記事、クラスタリング、細胞型注釈、バッチ補正の記事を追加する。
5. 実験手法と統計・研究デザインの記事を増やし、Figure と Methods 読解への接続を強化する。

## Phase 22 実装範囲

今回の Phase 22 では、カテゴリトップとラーニングパス上の記事一覧に、学習順の手がかりを追加します。

- `ArticleList` が各記事の `prerequisites` を読み取り、最大3件の「前提」リンクとして表示する。
- `ArticleList` が各記事の `relatedTerms` を読み取り、最大3件の「用語」リンクとして表示する。
- 前提リンクは既存記事のタイトルに解決し、見つからない場合のみURL断片を表示する。
- 関連用語は `/glossary/{term}/` にリンクし、用語集記事がある場合はそのタイトルを表示する。
- 記事一覧の可読性を保つため、メタ情報は小さなタグ状リンクとして表示する。

## 次フェーズ候補

1. `priority` frontmatter を既存の主要記事へ広げ、P0/P1/P2 の実装順を機械的に扱えるようにする。
2. 用語集トップを `relatedTerms` と `glossaryTerms` からカテゴリ別に整理する。
3. single-cell解析の基礎記事、クラスタリング、細胞型注釈、バッチ補正の記事を追加する。
4. 実験手法と統計・研究デザインの記事を増やし、Figure と Methods 読解への接続を強化する。

## Phase 23 実装範囲

今回の Phase 23 では、用語集トップをカテゴリ別の学習入口として整理します。

- `glossaryTerms` にカテゴリ情報を追加し、生命科学の基礎、分子生物学、細胞生物学、ゲノミクス、実験手法・解析に分類する。
- `glossaryCategories` を追加し、用語集トップのカテゴリナビゲーションと説明文に使う。
- `/glossary/` ではカテゴリ別に `GlossaryTable` を表示し、短い定義確認と個別用語ページへの導線を両立する。
- 用語集カテゴリナビゲーションのCSSを追加し、主要入口型のサイト構造に合わせる。

## 次フェーズ候補

1. `priority` frontmatter を既存の主要記事へ広げ、P0/P1/P2 の実装順を機械的に扱えるようにする。
2. single-cell解析の基礎記事、クラスタリング、細胞型注釈、バッチ補正の記事を追加する。
3. 実験手法と統計・研究デザインの記事を増やし、Figure と Methods 読解への接続を強化する。
4. 関連用語の不足を洗い出し、Figure・Papers記事から用語集へのリンク密度を整える。

## Phase 24 実装範囲

今回の Phase 24 では、single-cell論文演習を支えるバイオインフォマティクス基礎記事を追加します。

- `/bioinformatics/single-cell-rna-seq/`: 1細胞ごとの発現量を測り、細胞集団の違いを調べるsingle-cell RNA-seqの基本を説明する。
- `/bioinformatics/clustering/`: 発現パターンが似た細胞をまとめる探索的解析としてクラスタリングを説明する。
- `/bioinformatics/cell-type-annotation/`: マーカー遺伝子などの根拠からクラスタに細胞型名を付ける細胞タイプ注釈を説明する。
- `/bioinformatics/batch-effect/`: 実験日、試薬、機器などの技術差によるバッチ効果を説明し、PCA/UMAPやMethods確認へつなげる。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。
- `ArticleList` に `single-cell-analysis` モジュール表示ラベルを追加し、Bioinformaticsカテゴリ内で整理する。
- `/bioinformatics/` トップにsingle-cell解析の学習導線を追記する。

## 次フェーズ候補

1. `priority` frontmatter を既存の主要記事へ広げ、P0/P1/P2 の実装順を機械的に扱えるようにする。
2. `FINAL_CONTENT_MAP.md` のsingle-cell解析に残る `/bioinformatics/count-matrix/`、`/bioinformatics/single-cell-quality-control/`、`/bioinformatics/dimensionality-reduction/`、`/bioinformatics/marker-gene/`、`/bioinformatics/umap/` を追加する。
3. 実験手法と統計・研究デザインの記事を増やし、Figure と Methods 読解への接続を強化する。
4. 関連用語の不足を洗い出し、Figure・Papers記事から用語集へのリンク密度を整える。

## Phase 25 実装範囲

今回の Phase 25 では、`FINAL_CONTENT_MAP.md` のsingle-cell解析モジュールに残っていた基礎記事を追加します。

- `/bioinformatics/count-matrix/`: RNA-seqやsingle-cell RNA-seqの出発点となるカウント行列を説明する。
- `/bioinformatics/single-cell-quality-control/`: single-cell QCで確認する低品質細胞、検出遺伝子数、ミトコンドリア比率、doubletを説明する。
- `/bioinformatics/dimensionality-reduction/`: PCA、UMAP、t-SNEにつながる次元削減の基本を説明する。
- `/bioinformatics/marker-gene/`: 細胞型や状態を見分ける手がかりとしてのマーカー遺伝子を説明する。
- `/bioinformatics/umap/`: UMAPをsingle-cell解析の全体像を見る可視化手法として説明する。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。
- 既存のsingle-cell記事、UMAP/t-SNE Figure読解、Bioinformaticsトップの内部リンクを更新する。

## 次フェーズ候補

1. `priority` frontmatter を既存の主要記事へ広げ、P0/P1/P2 の実装順を機械的に扱えるようにする。
2. 実験手法と統計・研究デザインの記事を増やし、Figure と Methods 読解への接続を強化する。
3. 関連用語の不足を洗い出し、Figure・Papers記事から用語集へのリンク密度を整える。
4. single-cell関連の用語集項目を追加し、`relatedTerms` のリンク先を拡充する。

## Phase 26 実装範囲

今回の Phase 26 では、Phase 24-25 で追加したsingle-cell解析記事から参照できる用語集項目を拡充します。

- `/glossary/single-cell-rna-seq/`: 1細胞ごとのRNA量を測る手法としてsingle-cell RNA-seqを説明する。
- `/glossary/count-matrix/`: RNA-seqやsingle-cell解析の出発点になるカウント行列を説明する。
- `/glossary/single-cell-quality-control/`: 低品質細胞、検出遺伝子数、ミトコンドリア比率、doublet確認につながるQCを説明する。
- `/glossary/dimensionality-reduction/`: PCA、UMAP、t-SNEにつながる次元削減を説明する。
- `/glossary/clustering/`: 似た細胞やサンプルを探索的にまとめるクラスタリングを説明する。
- `/glossary/marker-gene/`: 細胞型や状態の根拠として使うマーカー遺伝子を説明する。
- `/glossary/umap/`: single-cell Figureで頻出するUMAPを説明する。
- `/glossary/batch-effect/`: 実験日や試薬などの技術差としてのバッチ効果を説明する。
- `glossaryTerms` とsingle-cell関連記事の `relatedTerms` を更新し、カテゴリトップから用語集への導線を強化する。

## 次フェーズ候補

1. `priority` frontmatter を既存の主要記事へ広げ、P0/P1/P2 の実装順を機械的に扱えるようにする。
2. 実験手法と統計・研究デザインの記事を増やし、Figure と Methods 読解への接続を強化する。
3. `/statistics/batch-effect/` と `/methods/batch-effect/` の重複候補を整理し、最終コンテンツマップ上の責務を決める。
4. Figure・Papers記事から新設single-cell用語集への本文リンクを追加する。

## Phase 27 実装範囲

今回の Phase 27 では、Phase 26 で追加したsingle-cell関連用語を、既存のFigure読解・論文演習ページから参照できるようにします。

- `/figures/how-to-read-umap-tsne/`: UMAP、クラスタリング、マーカー遺伝子、single-cell RNA-seqの用語リンクと `relatedTerms` を追加する。
- `/papers/walkthrough-single-cell/`: single-cell RNA-seq、UMAP、マーカー遺伝子、バッチ効果、クラスタリングへの本文リンクと `relatedTerms` を追加する。
- `/figures/how-to-read-pca-plot/`: 次元削減、RNA-seq、バッチ効果への用語リンクと `relatedTerms` を追加する。
- `/figures/how-to-read-heatmap/`: クラスタリング、マーカー遺伝子への用語導線を追加する。

## 次フェーズ候補

1. `priority` frontmatter を既存の主要記事へ広げ、P0/P1/P2 の実装順を機械的に扱えるようにする。
2. 実験手法と統計・研究デザインの記事を増やし、Figure と Methods 読解への接続を強化する。
3. `/statistics/batch-effect/` と `/methods/batch-effect/` の重複候補を整理し、最終コンテンツマップ上の責務を決める。
4. 論文読解演習から用語集・Figure読解・Methods記事への導線をさらに整理する。

## Phase 28 実装範囲

今回の Phase 28 では、統計・研究デザインカテゴリのP1基礎記事を拡充し、Figure読解の前提になる語彙を追加します。

- `/statistics/variable/`: Figureの軸、色、群分けが表す変数を説明する。
- `/statistics/distribution/`: 平均だけでは見えないデータの集まり方、ばらつき、外れ値を説明する。
- `/statistics/mean-median/`: 平均と中央値を代表値として説明し、外れ値や分布との関係を整理する。
- `/statistics/confidence-interval/`: 推定値の不確かさを範囲で示す信頼区間を説明する。
- `/statistics/effect-size/`: p値と区別して、差や関係の大きさとしての効果量を説明する。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。
- `/statistics/` トップと既存の `p-value`、`error-bars` の前提リンクを更新し、学習順を整える。

## 次フェーズ候補

1. `/statistics/sample-size/`、`/statistics/control-group/`、`/statistics/randomization/` を追加し、実験デザイン側を強化する。
2. `/statistics/correlation-causation/` と `/statistics/significance-vs-importance/` を追加し、論文Discussionの読み方につなげる。
3. `/methods/positive-negative-control/` と `/methods/loading-control/` を追加し、MethodsとFigure読解を接続する。
4. 統計用語の glossary 項目を追加し、`relatedTerms` から用語集へ戻れるようにする。

## Phase 29 実装範囲

今回の Phase 29 では、統計・研究デザインカテゴリの実験デザイン側を拡充します。

- `/statistics/sample-size/`: n数を、何を数えているかが重要なサンプルサイズ表記として説明する。
- `/statistics/control-group/`: 研究デザインとしての対照群を、比較の基準と交絡の観点から説明する。
- `/statistics/randomization/`: サンプルや測定順の割り付けに偏りが入りにくくするランダム化を説明する。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。
- `/statistics/` トップに実験デザイン側の推奨順を追記する。

## 次フェーズ候補

1. `/statistics/correlation-causation/` と `/statistics/significance-vs-importance/` を追加し、論文Discussionの読み方につなげる。
2. `/statistics/bias/`、`/statistics/confounding/`、`/statistics/reproducibility/` を追加し、研究の限界を読む基礎を作る。
3. `/methods/positive-negative-control/` と `/methods/loading-control/` を追加し、MethodsとFigure読解を接続する。
4. 統計用語の glossary 項目を追加し、`relatedTerms` から用語集へ戻れるようにする。

## Phase 30 実装範囲

今回の Phase 30 では、ResultsからDiscussionへ進むときに必要な統計解釈の記事を追加します。

- `/statistics/correlation-causation/`: 相関と因果を区別し、相関図から結論を読みすぎないための確認点を説明する。
- `/statistics/significance-vs-importance/`: 統計的有意性と生物学的重要性を分け、p値、効果量、信頼区間、文脈を合わせて読む方法を説明する。
- `/statistics/bias/`: サンプル選択、測定、解析、報告の過程で結果が一方向にずれる可能性としてバイアスを説明する。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。
- `/figures/how-to-read-correlation-plot/`、`/papers/how-to-read-discussion/`、`/statistics/` トップから新規記事への導線を追加する。

## 次フェーズ候補

1. `/statistics/confounding/`、`/statistics/reproducibility/`、`/statistics/limitations/` を追加し、研究の限界を読む基礎を完成させる。
2. `/methods/positive-negative-control/` と `/methods/loading-control/` を追加し、MethodsとFigure読解を接続する。
3. 統計用語の glossary 項目を追加し、`relatedTerms` から用語集へ戻れるようにする。
4. 統計記事から棒グラフ、箱ひげ図、相関図、Forest plotなどのFigure記事への導線をさらに整理する。

## Phase 31 実装範囲

今回の Phase 31 では、DiscussionやLimitationsを読むための研究の限界系記事を追加します。

- `/statistics/confounding/`: 調べたい関係が第三の要因で見かけ上変わる交絡を説明する。
- `/statistics/reproducibility/`: 技術的反復、生物学的反復、独立検証を分けて、再現性を読む視点を説明する。
- `/statistics/limitations/`: サンプル、方法、解析、解釈の制約として研究の限界を読む方法を説明する。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。
- `/statistics/` トップ、`/statistics/bias/`、`/statistics/correlation-causation/`、`/papers/how-to-read-discussion/` から新規記事への導線を追加する。

## 次フェーズ候補

1. `/methods/positive-negative-control/` と `/methods/loading-control/` を追加し、MethodsとFigure読解を接続する。
2. 統計用語の glossary 項目を追加し、`relatedTerms` から用語集へ戻れるようにする。
3. 統計記事から棒グラフ、箱ひげ図、相関図、Forest plotなどのFigure記事への導線をさらに整理する。
4. 論文読解演習ページに「限界を読む」観点のチェック項目を追加する。

## Phase 32 実装範囲

今回の Phase 32 では、MethodsとFigure読解をつなぐ対照・補正系の記事を追加します。

- `/methods/positive-negative-control/`: 陽性対照と陰性対照を、実験系が期待どおり反応するかを確認する基準として説明する。
- `/methods/loading-control/`: Western blotなどでサンプル量や検出条件の違いを補正するローディングコントロールを説明する。
- 各記事に `LessonFigure` を追加し、オリジナルの概念図を `public/figures/` に配置する。
- `/methods/control/`、`/methods/western-blot/`、`/figures/how-to-read-western-blot/` から新規記事への導線を追加する。

## 次フェーズ候補

1. 統計用語の glossary 項目を追加し、`relatedTerms` から用語集へ戻れるようにする。
2. 統計記事から棒グラフ、箱ひげ図、相関図、Forest plotなどのFigure記事への導線をさらに整理する。
3. 論文読解演習ページに「限界を読む」観点のチェック項目を追加する。
4. Methods記事から対応するFigure読解記事への導線をさらに増やす。

## Phase 33 実装範囲

今回の Phase 33 では、統計・研究デザイン用語のglossary項目を追加し、統計記事から用語集へ戻れる導線を整えます。

- 用語集カテゴリに「統計・研究デザイン」を追加する。
- `/glossary/p-value/`: p値を、帰無仮説のもとで結果の珍しさを見る値として説明する。
- `/glossary/confidence-interval/`: 信頼区間を、推定値の不確かさを示す範囲として説明する。
- `/glossary/effect-size/`: 効果量を、差や関係の大きさとして説明する。
- `/glossary/bias/`: バイアスを、結果が一方向にずれる可能性として説明する。
- `/glossary/confounding/`: 交絡を、第三の要因で見かけ上の関係が変わることとして説明する。
- `/glossary/reproducibility/`: 再現性を、同じような結果が繰り返し得られるかという視点として説明する。
- 対応する統計記事、相関図記事、Discussion記事の `relatedTerms` を更新する。

## 次フェーズ候補

1. 統計記事から棒グラフ、箱ひげ図、相関図、Forest plotなどのFigure記事への導線をさらに整理する。
2. 論文読解演習ページに「限界を読む」観点のチェック項目を追加する。
3. Methods記事から対応するFigure読解記事への導線をさらに増やす。
4. 残りの統計用語（変数、分布、平均、中央値、反復、ランダム化、多重検定）をglossaryへ追加する。

## Phase 34 実装範囲

今回の Phase 34 では、統計記事から具体的なFigure読解記事への導線を強化します。

- `/statistics/variable/`: 軸ラベル、散布図、UMAP/t-SNEで変数を確認する導線を追加する。
- `/statistics/distribution/`: 箱ひげ図、バイオリンプロットで分布を読む導線を追加する。
- `/statistics/mean-median/`: 棒グラフと箱ひげ図で代表値を確認する導線を追加する。
- `/statistics/error-bars/`: 棒グラフとForest plotでエラーバーや信頼区間を読む導線を追加する。
- `/statistics/confidence-interval/`: Forest plotとエラーバー表示への導線を追加する。
- `/statistics/p-value/`: 棒グラフ、箱ひげ図、Volcano plotでp値を読む導線を追加する。
- `/statistics/effect-size/`: Volcano plot、Forest plot、相関図で効果量を読む導線を追加する。
- `/statistics/correlation-causation/`: 相関図で相関と因果を分ける導線を追加する。
- `/statistics/multiple-testing-correction/`: Volcano plotとPathway enrichment plotで補正済みp値を見る導線を追加する。

## 次フェーズ候補

1. 論文読解演習ページに「限界を読む」観点のチェック項目を追加する。
2. Methods記事から対応するFigure読解記事への導線をさらに増やす。
3. 残りの統計用語（変数、分布、平均、中央値、反復、ランダム化、多重検定）をglossaryへ追加する。
4. Figure記事側から統計記事への前提リンクを追加し、双方向の導線を整える。

## Phase 35 実装範囲

今回の Phase 35 では、論文読解ワークフローと読解演習に「限界を読む」観点を追加する。統計記事で整えたバイアス、交絡、再現性、研究の限界を、実際の論文読解で使えるチェック項目として接続する。

- `papers/critical-reading.mdx` に、サンプル、対照、反復、交絡、統計、一般化のチェック表を追加する。
- `papers/methods-checklist.mdx` に、Methodsを研究の限界へ戻して読む説明と、対照・再現性・バイアス・交絡への導線を追加する。
- `papers/walkthrough-rna-seq.mdx` に、サンプル数、バッチ効果、正規化、Volcano plot、Heatmap、Pathway enrichmentの限界チェックを追加する。
- `papers/walkthrough-single-cell.mdx` に、細胞数と独立サンプル数、バッチ補正、クラスタ注釈、比較単位、UMAP解釈の限界チェックを追加する。

## 次フェーズ候補

1. Methods記事から対応するFigure読解記事への導線をさらに増やす。
2. 残りの統計用語（変数、分布、平均、中央値、反復、ランダム化、多重検定）をglossaryへ追加する。
3. Figure記事側から統計記事への前提リンクを追加し、双方向の導線を整える。
4. 論文読解演習を、Methods、Figure、Discussionの3段階で解ける確認問題形式に拡張する。

## Phase 36 実装範囲

今回の Phase 36 では、Methods記事から対応するFigure読解記事への導線を強化する。手法を理解したあと、実際の論文Figureで何を見るかへ進めるように、既存Methods記事へ「Figureで見る場所」を追加する。

- `methods/pcr.mdx` から、qPCRプロットとFigure legendへ接続する。
- `methods/qpcr.mdx` と `methods/rt-qpcr.mdx` から、qPCRプロット、棒グラフ、反復・正規化の確認へ接続する。
- `methods/sequencing.mdx`、`methods/ngs.mdx`、`methods/library-preparation.mdx` から、ゲノムブラウザ、Volcano plot、HeatmapなどのNGS由来Figureへ接続する。
- `methods/immunostaining.mdx` と `methods/flow-cytometry.mdx` から、免疫染色画像、顕微鏡画像、フローサイトメトリー図、散布図へ接続する。
- `methods/control.mdx` と `methods/positive-negative-control.mdx` から、棒グラフ、画像Figure、flow cytometry、免疫染色で対照を読む観点へ接続する。

## 次フェーズ候補

1. 残りの統計用語（変数、分布、平均、中央値、反復、ランダム化、多重検定）をglossaryへ追加する。
2. Figure記事側から統計記事・Methods記事への前提リンクを追加し、双方向の導線を整える。
3. 論文読解演習を、Methods、Figure、Discussionの3段階で解ける確認問題形式に拡張する。
4. `/papers/` トップで、論文読解演習の入口をFigure別・Methods別に整理する。

## Phase 37 実装範囲

今回の Phase 37 では、統計・研究デザインの残り主要用語をGlossaryへ追加し、統計記事とFigure記事から用語集へ戻れる導線を増やす。

- `/glossary/variable/`: Figureの軸、色、群分けが表す変数を説明する。
- `/glossary/distribution/`: 平均だけでは見えないデータの集まり方、ばらつき、外れ値を説明する。
- `/glossary/mean-median/`: 平均と中央値の違い、外れ値への影響を説明する。
- `/glossary/biological-technical-replicates/`: 反復、生物学的反復、技術的反復、n数の読み方を説明する。
- `/glossary/randomization/`: ランダム化を、割り付けの偏りを減らす研究デザインとして説明する。
- `/glossary/multiple-testing-correction/`: 多重検定補正、補正済みp値、FDRを説明する。
- `glossaryTerms` と統計・Figure記事の `relatedTerms` を更新し、カテゴリトップやラーニングパスで用語リンクが表示されるようにする。

## 次フェーズ候補

1. Figure記事側から統計記事・Methods記事への前提リンクを追加し、双方向の導線を整える。
2. 論文読解演習を、Methods、Figure、Discussionの3段階で解ける確認問題形式に拡張する。
3. `/papers/` トップで、論文読解演習の入口をFigure別・Methods別に整理する。
4. 統計・研究デザイン用語のうち、相関と因果、統計的有意性、サンプルサイズ、対照群のGlossary化を検討する。

## Phase 38 実装範囲

今回の Phase 38 では、主要Figure記事側から統計記事・Methods記事へ戻る導線を追加し、Figure読解と実験・統計の前提を双方向に接続する。

- `figures/how-to-read-qpcr-plot.mdx` に、qPCR/RT-qPCR、反復、エラーバー、p値へ戻る「前提に戻る」を追加する。
- `figures/how-to-read-western-blot.mdx` に、Western blot、ローディングコントロール、棒グラフ、反復へ戻る導線を追加する。
- `figures/how-to-read-flow-cytometry.mdx` に、フローサイトメトリー、陽性対照・陰性対照、散布図、反復へ戻る導線を追加する。
- `figures/how-to-read-immunostaining.mdx` に、免疫染色、対照、顕微鏡画像、棒グラフ、反復へ戻る導線を追加する。
- `figures/how-to-read-volcano-plot.mdx` に、差次的発現解析、効果量、p値、多重検定補正へ戻る導線を追加する。
- `figures/how-to-read-heatmap.mdx` に、RNA-seq、カウント行列、クラスタリング、分布へ戻る導線を追加する。

## 次フェーズ候補

1. 論文読解演習を、Methods、Figure、Discussionの3段階で解ける確認問題形式に拡張する。
2. `/papers/` トップで、論文読解演習の入口をFigure別・Methods別に整理する。
3. 統計・研究デザイン用語のうち、相関と因果、統計的有意性、サンプルサイズ、対照群のGlossary化を検討する。
4. 残りのFigure記事にも「前提に戻る」を広げ、Figureカテゴリ全体の形式を揃える。

## Phase 39 実装範囲

今回の Phase 39 では、論文読解演習を Methods、Figure、Discussion の 3 段階で解ける形式へ拡張した。

- `/papers/walkthrough-rna-seq/` に、RNA-seq 論文を設計、Figure、Discussion の順に確認する演習を追加する。
- `/papers/walkthrough-single-cell/` に、single-cell 論文をサンプル単位、UMAP、細胞集団の解釈に分けて読む演習を追加する。
- `/papers/walkthrough-western-blot/` に、検出条件、代表画像、定量グラフ、Discussion の主張範囲を確認する演習を追加する。
- `/papers/walkthrough-immunostaining/` に、抗体・対照・画像取得・局在解釈を分けて確認する演習を追加する。
- Western blot と免疫染色の演習ページの frontmatter に、反復、対照、画像読解への前提導線を追加する。

## 次フェーズ候補

1. `/papers/` トップで、論文読解演習の入口を Figure 別・Methods 別に整理する。
2. 統計・研究デザイン用語のうち、相関と因果、統計的有意性、サンプルサイズ、対照群の Glossary 化を検討する。
3. 残りの Figure 記事にも「前提に戻る」を広げ、Figure カテゴリ全体の形式を揃える。
4. 演習ページの確認問題を、3 段階演習に合わせて追加・差し替える。

## Phase 40 実装範囲

今回の Phase 40 では、`/papers/` トップを論文読解演習の主要入口として整理した。

- まず読む記事として、初回読み、Figure first reading、Methods確認チェックリストをカード型入口にする。
- 演習ページを、RNA-seq、single-cell、Western blot、免疫染色の対象別に整理し、対応する Figure 読解記事へ接続する。
- 目的別に、論文構造、根拠と限界、論文探索の3分類で記事導線を明示する。
- 既存の `ArticleList` による全記事一覧は残し、将来の記事追加にも対応できるようにする。

## 次フェーズ候補

1. 演習ページの確認問題を、3 段階演習に合わせて追加・差し替える。
2. 統計・研究デザイン用語のうち、相関と因果、統計的有意性、サンプルサイズ、対照群の Glossary 化を検討する。
3. 残りの Figure 記事にも「前提に戻る」を広げ、Figure カテゴリ全体の形式を揃える。
4. `/paths/paper-reading/` を、今回整理した `/papers/` の入口構成に合わせて更新する。

## Phase 41 実装範囲

今回の Phase 41 では、論文読解演習ページの確認問題を、Methods、Figure、Discussion の 3 段階演習に合わせて増強した。

- `/papers/walkthrough-rna-seq/` に、バッチ効果、Volcano plotの軸、Discussion表現の言い換えを問う問題を追加する。
- `/papers/walkthrough-single-cell/` に、独立サンプル、UMAP解釈、細胞運命に関する表現の言い換えを問う問題を追加する。
- `/papers/walkthrough-western-blot/` に、検出・定量条件、代表画像と定量の食い違い、因果的表現の言い換えを問う問題を追加する。
- `/papers/walkthrough-immunostaining/` に、画像比較条件、代表画像の追加確認、機能的表現の言い換えを問う問題を追加する。

## 次フェーズ候補

1. 統計・研究デザイン用語のうち、相関と因果、統計的有意性、サンプルサイズ、対照群の Glossary 化を検討する。
2. 残りの Figure 記事にも「前提に戻る」を広げ、Figureカテゴリ全体の形式を揃える。
3. `/paths/paper-reading/` を、今回整理した `/papers/` の入口構成に合わせて更新する。
4. 演習ページ間に「次の演習へ進む」導線を追加し、Figure別の練習順を作る。

## Phase 42 実装範囲

今回の Phase 42 では、統計・研究デザインの主要用語を Glossary に追加し、統計記事と Figure 記事から用語へ戻れる導線を増やした。

- `/glossary/correlation-causation/` を追加し、相関と因果を分けて読む要点を整理する。
- `/glossary/significance-vs-importance/` を追加し、統計的有意性と生物学的重要性の違いを整理する。
- `/glossary/sample-size/` を追加し、n数、細胞数、サンプル数、独立反復の違いを整理する。
- `/glossary/control-group/` を追加し、対照群を比較の基準として説明する。
- `glossaryTerms` と関連する統計・相関図ページの `relatedTerms` を更新する。

## 次フェーズ候補

1. 残りの Figure 記事にも「前提に戻る」を広げ、Figureカテゴリ全体の形式を揃える。
2. `/paths/paper-reading/` を、今回整理した `/papers/` の入口構成に合わせて更新する。
3. 演習ページ間に「次の演習へ進む」導線を追加し、Figure別の練習順を作る。
4. Glossaryトップで統計・研究デザインカテゴリの説明を、今回の追加語に合わせて微調整する。

## Phase 43 実装範囲

今回の Phase 43 では、残りの主要Figure記事に「前提に戻る」導線を追加し、Figure読解と統計・論文読解の接続を強化した。

- `/figures/how-to-read-scatter-plot/` に、変数、n数、相関と因果へ戻る導線を追加する。
- `/figures/how-to-read-box-plot/` に、分布、平均と中央値、n数へ戻る導線を追加する。
- `/figures/how-to-read-violin-plot/` に、分布、箱ひげ図、n数へ戻る導線を追加する。
- `/figures/multi-panel-figure/` に、Results、対照群、反復、有意性と重要性へ戻る導線を追加する。
- `/figures/supplementary-figures/` に、Methods確認、対照、再現性、研究の限界へ戻る導線を追加する。

## 次フェーズ候補

1. `/paths/paper-reading/` を、今回整理した `/papers/` と Figure導線に合わせて更新する。
2. 演習ページ間に「次の演習へ進む」導線を追加し、Figure別の練習順を作る。
3. Glossaryトップで統計・研究デザインカテゴリの説明を、今回の追加語に合わせて微調整する。
4. Figureカテゴリ全体を点検し、未接続の `relatedTerms` や前提リンクを洗い出す。

## Phase 44 実装範囲

今回の Phase 44 では、`/paths/paper-reading/` を `/papers/` トップと Figure・Methods・統計導線に合わせて更新した。

- 論文読解パスを、初回読み、Figure first reading、Methods確認の3ステップ入口として整理する。
- 論文構造、初回読み、Figureから読む、Methods確認、Results、Discussion、批判的読解へ進む推奨ルートを追加する。
- RNA-seq、single-cell、Western blot、免疫染色の演習を、対応するFigure記事と前提記事に接続する。
- 迷ったときに戻る場所として、Figure読解、統計・研究デザイン、実験手法、研究の限界への導線を追加する。
- 既存の `ArticleList learningPath="paper-reading"` は残し、frontmatterベースの記事追加に対応できる状態を維持する。

## 次フェーズ候補

1. 演習ページ間に「次の演習へ進む」導線を追加し、Figure別の練習順を作る。
2. Glossaryトップで統計・研究デザインカテゴリの説明を、今回の追加語に合わせて微調整する。
3. Figureカテゴリ全体を点検し、未接続の `relatedTerms` や前提リンクを洗い出す。
4. `/paths/figure-reading/` も、Figureカテゴリトップと同じ粒度で推奨ルート・戻り先を厚くする。

## Phase 45 実装範囲

今回の Phase 45 では、論文読解演習ページ間に連続して進む導線を追加した。

- `/papers/walkthrough-rna-seq/` から `/papers/walkthrough-single-cell/` へ進めるようにする。
- `/papers/walkthrough-single-cell/` から前後の演習へ戻れるようにする。
- `/papers/walkthrough-western-blot/` から前後の演習へ戻れるようにする。
- `/papers/walkthrough-immunostaining/` から前の演習、演習トップ、論文読解パスへ戻れるようにする。
- 演習一覧の順序が重ならないように、Western blot と免疫染色の `order` を調整する。

## 次フェーズ候補

1. Glossaryトップで統計・研究デザインカテゴリの説明を、今回の追加語に合わせて微調整する。
2. Figureカテゴリ全体を点検し、未接続の `relatedTerms` や前提リンクを洗い出す。
3. `/paths/figure-reading/` も、Figureカテゴリトップと同じ粒度で推奨ルート・戻り先を厚くする。
4. `/papers/` トップに「演習を順番に進める」小セクションを追加する。

## Phase 46 実装範囲

今回の Phase 46 では、`/papers/` トップに「演習を順番に進める」セクションを追加した。

- RNA-seq、single-cell、Western blot、免疫染色の4演習を、通し練習の順路として明示する。
- 各演習で練習するFigure、Methods確認、Discussionの読み戻しを短く説明する。
- 目的別に選ぶ表は残し、対象別に選びたい学習者と順番に進めたい学習者の両方に対応する。
- Phase 45で追加した演習ページ間の前後リンクを、カテゴリトップからも見つけやすくする。

## 次フェーズ候補

1. Glossaryトップで統計・研究デザインカテゴリの説明を、今回の追加語に合わせて微調整する。
2. Figureカテゴリ全体を点検し、未接続の `relatedTerms` や前提リンクを洗い出す。
3. `/paths/figure-reading/` も、Figureカテゴリトップと同じ粒度で推奨ルート・戻り先を厚くする。
4. 演習ページの `order` と `priority` を全体で再点検し、ArticleList上の並びをさらに整える。

## Phase 47 実装範囲

今回の Phase 47 では、Glossaryトップの統計・研究デザイン用語の入口を更新した。

- `/glossary/` に、Figureの軸やばらつき、統計表示、実験設計、Discussionの解釈に分けた目的別リンクを追加する。
- `statistics-and-design` カテゴリ説明を、p値、効果量、n数、対照群、相関と因果、バイアス、交絡、再現性を含む説明へ更新する。
- 最近追加した用語ページへ、Glossaryトップから直接戻れる導線を増やす。
- 医療上の判断ではなく、論文Figureと研究主張の読み方として統計用語を扱う方針を維持する。

## 次フェーズ候補

1. Figureカテゴリ全体を点検し、未接続の `relatedTerms` や前提リンクを洗い出す。
2. `/paths/figure-reading/` も、Figureカテゴリトップと同じ粒度で推奨ルート・戻り先を厚くする。
3. 演習ページの `order` と `priority` を全体で再点検し、ArticleList上の並びをさらに整える。
4. Glossary内のゲノミクス用語で、`遺伝的変異` が `mutation` ページへ向いている箇所を将来の専用ページ化候補として整理する。

## Phase 48 実装範囲

今回の Phase 48 では、Figureカテゴリ全体の `relatedTerms` と前提リンクを点検し、未接続だった総合系Figureを中心に用語集への導線を補強した。

- `/figures/figure-legend/` に、変数、n数、反復への `relatedTerms` を追加する。
- `/figures/figure-to-claim/` に、有意性と重要性、相関と因果、対照群への導線を追加する。
- `/figures/results-section-flow/` に、有意性と重要性、再現性、対照群への導線を追加する。
- `/figures/graphical-abstract/` に、有意性と重要性、相関と因果、再現性への導線を追加する。
- Forest plot、ROC曲線、Kaplan-Meier曲線の統計用語接続を補強し、p値だけで読まない導線にする。
- GSEA plot と pathway enrichment plot から、多重検定補正と有意性・重要性へ戻れるようにする。
- 点検時点で、Figureカテゴリ内に存在しない `relatedTerms` slug は見当たらなかった。

## 次フェーズ候補

1. `/paths/figure-reading/` を、Figureカテゴリトップと同じ粒度で推奨ルート・戻り先を厚くする。
2. 演習ページの `order` と `priority` を全体で再点検し、ArticleList上の並びをさらに整える。
3. Glossary内のゲノミクス用語で、`遺伝的変異` が `mutation` ページへ向いている箇所を将来の専用ページ化候補として整理する。
4. Figureカテゴリトップに、統計系Figure、実験系Figure、オミクス系Figure、論文構造系Figureの目的別入口をさらに明確化する。

## Phase 49 実装範囲

今回の Phase 49 では、`/paths/figure-reading/` を Figureカテゴリトップと同じ粒度で厚くし、学習パスとして使いやすい主要入口に更新する。

- 冒頭に、Figureを見た目ではなく測定対象、比較、主張の範囲から読む方針を追加する。
- 「このパスの使い方」として、Figure legend、軸・表示方法、Figureと主張の対応づけの3ステップ入口を追加する。
- 推奨ルートを、基本構造、基本グラフ、実験Figure、オミクスFigure、本文との対応づけへ進む順番として明文化する。
- 目的別入口として、基本グラフ、実験Figure、画像・細胞解析、RNA-seq・オミクス、ゲノム系Figure、論文全体の主張への分岐を追加する。
- 迷ったときに戻る場所として、Figure基本、統計・研究デザイン、実験手法、論文読解への導線を追加する。
- 既存の `ArticleList learningPath="figure-reading"` は維持し、今後の記事追加に対応できる状態を保つ。

## 次フェーズ候補

1. 演習ページの `order` と `priority` を全体で再点検し、ArticleList上の並びをさらに整える。
2. Glossary内のゲノミクス用語で、`遺伝的変異` が `mutation` ページへ向いている箇所を将来の専用ページ化候補として整理する。
3. Figureカテゴリトップに、統計系Figure、実験系Figure、オミクス系Figure、論文構造系Figureの目的別入口をさらに明確化する。
4. `/paths/foundations/` も、現在の記事数に合わせて目的別入口と次に進むルートを厚くする。

## Phase 50 実装範囲

今回の Phase 50 では、論文読解演習カテゴリの `order` と `priority` を点検し、ArticleList上の並びが今後の記事追加でも崩れにくいように整理する。

- `papers` カテゴリの構造記事は 10-70 番台、読み方ワークフローは 80-105 番台のまま維持する。
- 論文探索系記事を 200 番台へ移し、読み方ワークフローとの `order` 重複を避ける。
- 論文読解演習ページを 300 番台へ移し、RNA-seq、single-cell、Western blot、免疫染色の順番を明確にする。
- single-cell演習の `priority` を P1 に上げ、他の演習ページと同じ扱いにする。
- single-cell演習だけが `figure-reading` パス一覧へ混ざっていた状態を解消し、Figure読解パスと論文読解パスの役割を分ける。

## 次フェーズ候補

1. Glossary内のゲノミクス用語で、`遺伝的変異` が `mutation` ページへ向いている箇所を将来の専用ページ化候補として整理する。
2. Figureカテゴリトップに、統計系Figure、実験系Figure、オミクス系Figure、論文構造系Figureの目的別入口をさらに明確化する。
3. `/paths/foundations/` も、現在の記事数に合わせて目的別入口と次に進むルートを厚くする。
4. `/papers/` トップに、200番台の探索系記事と300番台の演習系記事の位置づけを短く補足する。

## Phase 51 実装範囲

今回の Phase 51 では、Glossary内のゲノミクス用語で `遺伝的変異` が `mutation` に寄っていた箇所を整理し、用語として独立して参照できるようにする。

- `/glossary/genetic-variant/` を新設し、genetic variant、mutation、SNPの違いを初学者向けに整理する。
- `src/data/glossary.ts` の `遺伝的変異` を `/glossary/genetic-variant/` へ向け、用語集一覧から直接開けるようにする。
- `/glossary/mutation/` はDNA配列に生じた変化、`/glossary/genetic-variant/` はゲノム配列の違いとして説明を分ける。
- `/glossary/snp/`、`/glossary/genome/`、`/glossary/chromosome/`、`/glossary/sequencing/`、`/glossary/ngs/`、`/glossary/sequence-data/` から遺伝的変異への用語導線を追加する。
- `/genomics/genetic-variants/` と `/paths/figure-reading/` の用語リンクを、新しい用語集ページへ寄せる。
- Glossaryトップに、ゲノミクス用語を「全体像」「配列の違い」「データとして読む」に分けた目的別入口を追加する。

## 次フェーズ候補

1. Figureカテゴリトップに、統計系Figure、実験系Figure、オミクス系Figure、論文構造系Figureの目的別入口をさらに明確化する。
2. `/paths/foundations/` も、現在の記事数に合わせて目的別入口と次に進むルートを厚くする。
3. `/papers/` トップに、200番台の探索系記事と300番台の演習系記事の位置づけを短く補足する。
4. ゲノム系Figure記事から `/glossary/genetic-variant/` への直接導線を追加する。

## Phase 52 実装範囲

今回の Phase 52 では、Figureカテゴリトップに目的別入口を追加し、記事数が増えても主要入口型で選びやすい構成にする。

- `/figures/` に「目的別に選ぶ」セクションを追加する。
- 統計系Figure、実験系Figure、オミクス系Figure、論文構造系Figureの4つのカード入口を追加する。
- 目的別の表で、平均やばらつき、関係や予測性能、実験Figure、オミクス解析Figure、ゲノム上の位置、論文本文との対応づけに分ける。
- 各入口から、対応するFigure記事と、統計・Methods・Bioinformatics・Glossary・Papersの前提記事へ戻れるようにする。
- `/glossary/genetic-variant/` をゲノム系Figureの戻り先として含め、Phase 51の用語整理と接続する。

## 次フェーズ候補

1. `/paths/foundations/` も、現在の記事数に合わせて目的別入口と次に進むルートを厚くする。
2. `/papers/` トップに、200番台の探索系記事と300番台の演習系記事の位置づけを短く補足する。
3. ゲノム系Figure記事から `/glossary/genetic-variant/` への直接導線を追加する。
4. `/figures/` と `/paths/figure-reading/` の目的別入口の重複を点検し、片方をカテゴリ一覧、片方を学習ルートとして役割分担させる。

## Phase 53 実装範囲

今回の Phase 53 では、`/paths/foundations/` を現在の記事数に合わせて目的別入口と次に進むルートを持つ学習パスへ更新する。

- `/paths/foundations/` に、生命科学の全体像、遺伝情報の基本、ゲノム全体へ進む3ステップ入口を追加する。
- 推奨ルートを、生命科学、細胞、DNA、RNA、タンパク質、遺伝子、ゲノム、染色体、セントラルドグマへ進む順番として明文化する。
- 目的別に、生命科学の地図、DNAとRNA、タンパク質、ゲノムと染色体、Figure読解、論文読解への分岐を追加する。
- 迷ったときに戻る場所として、ロードマップ、セントラルドグマ、遺伝的変異、Methods、Bioinformatics、Statisticsへの導線を追加する。
- 既存の `ArticleList learningPath="foundations"` は維持し、frontmatterベースの記事追加に対応できる状態を保つ。

## 次フェーズ候補

1. `/papers/` トップに、200番台の探索系記事と300番台の演習系記事の位置づけを短く補足する。
2. ゲノム系Figure記事から `/glossary/genetic-variant/` への直接導線を追加する。
3. `/figures/` と `/paths/figure-reading/` の目的別入口の重複を点検し、片方をカテゴリ一覧、片方を学習ルートとして役割分担させる。
4. `/paths/` トップで、3つのラーニングパスの役割と選び方を現在の内容に合わせて更新する。

## Phase 54 実装範囲

今回の Phase 54 では、`/papers/` トップに探索系記事と演習系記事の位置づけを補足し、ArticleList上のモジュール構成を初学者にも分かりやすくする。

- `/papers/` に「記事群の位置づけ」セクションを追加する。
- 論文の構造、読み方のワークフロー、論文探索、架空ケース演習の4分類を表で整理する。
- PubMed、PMC、DOI、レビュー論文、読む論文の選び方を、論文を探す・選ぶ段階で使う探索系記事として説明する。
- RNA-seq、single-cell、Western blot、免疫染色の演習を、読み方の型を試す演習系記事として説明する。
- 既存の「まず読む」「演習から選ぶ」「演習を順番に進める」「目的別に読む」「ArticleList」は維持する。

## 次フェーズ候補

1. ゲノム系Figure記事から `/glossary/genetic-variant/` への直接導線を追加する。
2. `/figures/` と `/paths/figure-reading/` の目的別入口の重複を点検し、片方をカテゴリ一覧、片方を学習ルートとして役割分担させる。
3. `/paths/` トップで、3つのラーニングパスの役割と選び方を現在の内容に合わせて更新する。
4. `/papers/` と `/paths/paper-reading/` の重複を点検し、カテゴリトップと学習パスの役割分担を明確にする。

## Phase 55 実装範囲

今回の Phase 55 では、ゲノム系Figure記事から `/glossary/genetic-variant/` への直接導線を追加し、Figure読解中に用語の違いへ戻れるようにする。

- `/figures/how-to-read-genome-browser/` に、遺伝的変異、変異、SNPの違いへ戻る説明とNextStepsを追加する。
- `/figures/how-to-read-lollipop-plot/` に、mutation、variant、alterationの言葉をFigure legendで確認する導線を追加する。
- `/figures/how-to-read-cnv-plot/` に、CNVをゲノム領域のコピー数が変わる遺伝的変異として整理する導線を追加する。
- 3記事の `relatedTerms` と `prerequisites` に `genetic-variant` または `/glossary/genetic-variant/` を追加する。
- 既存の `/genomics/genetic-variants/` への本文記事導線は維持し、Glossaryは用語整理、本文記事は概念解説として役割を分ける。

## 次フェーズ候補

1. `/figures/` と `/paths/figure-reading/` の目的別入口の重複を点検し、片方をカテゴリ一覧、片方を学習ルートとして役割分担させる。
2. `/paths/` トップで、3つのラーニングパスの役割と選び方を現在の内容に合わせて更新する。
3. `/papers/` と `/paths/paper-reading/` の重複を点検し、カテゴリトップと学習パスの役割分担を明確にする。
4. `/resources/` トップを、Methods早見表、Figure早見表、PubMed/PMCの使い分けが分かる入口へ更新する。

## Phase 56 実装範囲

今回の Phase 56 では、`/figures/` と `/paths/figure-reading/` の目的別入口の重複を点検し、カテゴリトップと学習パスの役割分担を明確にする。

- `/figures/` は、Figureの種類や目的から記事を探すカテゴリトップとして維持する。
- `/figures/` の「読む順番」を「記事一覧」に変更し、ArticleListはカテゴリ一覧として位置づける。
- `/paths/figure-reading/` の「目的別に選ぶ」を「練習の進め方」に置き換える。
- `/paths/figure-reading/` では、前提、ばらつきと関係、対照と測定条件、解析条件、主張の範囲という段階的な学習順を示す。
- 特定のFigureだけを探す場合は `/figures/`、順番に身につける場合は `/paths/figure-reading/` と明記する。

## 次フェーズ候補

1. `/paths/` トップで、3つのラーニングパスの役割と選び方を現在の内容に合わせて更新する。
2. `/papers/` と `/paths/paper-reading/` の重複を点検し、カテゴリトップと学習パスの役割分担を明確にする。
3. `/resources/` トップを、Methods早見表、Figure早見表、PubMed/PMCの使い分けが分かる入口へ更新する。
4. `/statistics/` トップに、Figure読解へ戻る目的別入口を追加する。

## Phase 57 実装範囲

今回の Phase 57 では、`/paths/` トップを現在の3つのラーニングパスの役割に合わせて更新する。

- `/paths/` に、基礎、Figure、論文の3つのカード入口を追加する。
- 目的別に、基礎用語、DNA/RNA/タンパク質/ゲノム、Figure読解、実験Figure、論文全体、論文探索の入口を整理する。
- 推奨順を、基礎から学ぶ、Figureを読めるようになる、論文を読めるようになるの順として説明する。
- すでに基礎用語に慣れている場合は Figure読解から始めてもよいことを明記する。
- 特定の記事を探す場合は、ラーニングパスではなく分野別カテゴリや用語集を使う役割分担を明記する。

## 次フェーズ候補

1. `/papers/` と `/paths/paper-reading/` の重複を点検し、カテゴリトップと学習パスの役割分担を明確にする。
2. `/resources/` トップを、Methods早見表、Figure早見表、PubMed/PMCの使い分けが分かる入口へ更新する。
3. `/statistics/` トップに、Figure読解へ戻る目的別入口を追加する。
4. `/roadmap/` を、現在の主要入口とラーニングパスの構成に合わせて点検する。

## Phase 58 実装範囲

今回の Phase 58 では、`/papers/` と `/paths/paper-reading/` の重複を点検し、カテゴリトップと学習パスの役割分担を明確にする。

- `/papers/` は、論文の構造、読み方、論文探索、架空ケース演習を目的別に選ぶカテゴリトップとして整理する。
- `/papers/` の冒頭カードを、初回読みの順路ではなく、構造、読み方、探索の入口へ変更する。
- `/papers/` に、順番に身につけたい場合は `/paths/paper-reading/` を使う説明を追加する。
- `/paths/paper-reading/` は、論文読解の型を順番に練習する学習パスとして位置づける。
- `/paths/paper-reading/` に、特定の記事や演習を探す場合は `/papers/` を使う説明を追加する。
- 推奨ルートは論文を訳す順番ではなく、全体像、Figure、Methods、Results、Discussionを行き来する練習順であることを明記する。

## 次フェーズ候補

1. `/resources/` トップを、Methods早見表、Figure早見表、PubMed/PMCの使い分けが分かる入口へ更新する。
2. `/statistics/` トップに、Figure読解へ戻る目的別入口を追加する。
3. `/roadmap/` を、現在の主要入口とラーニングパスの構成に合わせて点検する。
4. `/papers/` の論文探索系記事から `/resources/` への接続を点検する。

## Phase 59 実装範囲

今回の Phase 59 では、`/resources/` トップを、Methods早見表、Figure早見表、PubMed/PMCの使い分けが分かる入口へ更新する。

- `/resources/` に、実験手法早見表、Figure早見表、PubMed / PMC の使い方への3カード入口を追加する。
- 目的別に、Methodsの手法名、Figureの種類、PubMed/PMCの違い、読む論文の選び方、用語確認へ分岐できる表を追加する。
- 早見表は順番に学ぶページではなく、論文を読んでいる途中で確認点を思い出すための参照ページであることを明記する。
- 手法の背景は `/methods/`、Figure読解の練習は `/figures/`、論文探索は `/papers/` に戻る役割分担を追加する。
- 外部リソースは研究内容を理解するために読み、医療上の診断や治療方針の判断として扱わないことを明記する。

## 次フェーズ候補

1. `/statistics/` トップに、Figure読解へ戻る目的別入口を追加する。
2. `/roadmap/` を、現在の主要入口とラーニングパスの構成に合わせて点検する。
3. `/papers/` の論文探索系記事から `/resources/` への接続を点検する。
4. `methods-cheatsheet` と `figures-cheatsheet` の掲載項目を、現在の記事数に合わせて拡張する。

## Phase 60 実装範囲

今回の Phase 60 では、`/statistics/` トップに、Figure読解へ戻る目的別入口を追加する。

- `/statistics/` の冒頭に、エラーバー、p値、n数と反復へ戻る3カード入口を追加する。
- Figureで困ること別に、軸と単位、平均と中央値、エラーバー、有意差、多重検定、相関と因果、結論の強さを確認できる表を追加する。
- 各統計記事から、棒グラフ、箱ひげ図、Volcano plot、GSEA plot、散布図、Figureと主張などのFigure読解記事へ戻れるようにする。
- `/statistics/` は統計用語の一覧だけでなく、Figure読解中に前提へ戻る入口として使うことを明確にする。
- 順番に練習したい場合は `/paths/figure-reading/` を使う導線を追加する。

## 次フェーズ候補

1. `/roadmap/` を、現在の主要入口とラーニングパスの構成に合わせて点検する。
2. `/papers/` の論文探索系記事から `/resources/` への接続を点検する。
3. `methods-cheatsheet` と `figures-cheatsheet` の掲載項目を、現在の記事数に合わせて拡張する。
4. `/methods/` トップに、Figure legendやMethods確認へ戻る目的別入口を追加する。

## Phase 61 実装範囲

今回の Phase 61 では、`/roadmap/` を現在の主要入口とラーニングパスの構成に合わせて点検する。

- `/roadmap/` の冒頭に、ラーニングパス、分野別カテゴリ、用語集の使い分けを示す3カード入口を追加する。
- 全体像のFlowDiagramに「発展: 論文全体を読む」を追加し、Figure読解の先に論文読解があることを明確にする。
- 到達目標に、Figure、Methods、Results、Discussionを行き来して論文の主張をデータに戻して確認できることを追加する。
- 第5章の後に、論文全体を読む発展章を追加し、論文構造、初回読み、Figure first、Methods確認、Results、Discussionへ進む流れを明記する。
- 目的別ルートに、Figure読解パスと論文読解パスへの導線を追加する。
- 次に進む導線を、ラーニングパス、Figureカテゴリ、論文読解パス、用語集の役割分担に合わせて更新する。

## 次フェーズ候補

1. `/papers/` の論文探索系記事から `/resources/` への接続を点検する。
2. `methods-cheatsheet` と `figures-cheatsheet` の掲載項目を、現在の記事数に合わせて拡張する。
3. `/methods/` トップに、Figure legendやMethods確認へ戻る目的別入口を追加する。
4. `/start/` を、現在の主要入口とラーニングパス構成に合わせて点検する。

## Phase 62 実装範囲

今回の Phase 62 では、`/papers/` の論文探索系記事から `/resources/` への接続を点検する。

- `/papers/pubmed/` のNextStepsに、`/resources/pubmed-pmc/` への導線を追加する。
- `/papers/pmc/` のNextStepsに、`/resources/pubmed-pmc/` への導線を追加する。
- `/papers/how-to-choose-paper/` のNextStepsに、`/resources/pubmed-pmc/` への導線を追加する。
- `/papers/doi/` のNextStepsに、`/resources/pubmed-pmc/` への導線を追加する。
- `/papers/review-vs-primary-paper/` のNextStepsに、`/resources/pubmed-pmc/` への導線を追加する。
- `/resources/pubmed-pmc/` に、使い分け早見表としての位置づけと、論文探索系記事への関連ページ一覧を追加する。

## 次フェーズ候補

1. `methods-cheatsheet` と `figures-cheatsheet` の掲載項目を、現在の記事数に合わせて拡張する。
2. `/methods/` トップに、Figure legendやMethods確認へ戻る目的別入口を追加する。
3. `/start/` を、現在の主要入口とラーニングパス構成に合わせて点検する。
4. 論文探索系記事の `relatedTerms` を、DOI、PubMed、PMC、原著論文、レビュー論文などの将来用語集候補として整理する。

## Phase 63 実装範囲

今回の Phase 63 では、`methods-cheatsheet` と `figures-cheatsheet` の掲載項目を、現在の記事数に合わせて拡張する。

- `/resources/methods-cheatsheet/` を、実験手法とシーケンス・解析に分けて整理する。
- Methods早見表に、qPCR、RT-qPCR、Western blot、免疫染色、フローサイトメトリー、陽性対照・陰性対照、ローディングコントロールを追加する。
- Methods早見表に、シーケンシング、NGS、ライブラリ調製、RNA-seq、single-cell RNA-seq、差次的発現解析、細胞型アノテーション、バッチ効果を追加する。
- `/resources/figures-cheatsheet/` を、共通確認、基本グラフ、実験・画像Figure、オミクス・ゲノムFigure、論文構造Figureに分けて整理する。
- Figure早見表に、現在存在する主要Figure記事へのリンクを追加し、Figure legend、軸、複数パネル、Figureと主張へ戻れるようにする。
- 早見表は参照ページであり、順番に練習する場合は `/paths/figure-reading/`、Methodsの読み方は `/papers/how-to-read-methods/` を使う導線を追加する。

## 次フェーズ候補

1. `/methods/` トップに、Figure legendやMethods確認へ戻る目的別入口を追加する。
2. `/start/` を、現在の主要入口とラーニングパス構成に合わせて点検する。
3. 論文探索系記事の `relatedTerms` を、DOI、PubMed、PMC、原著論文、レビュー論文などの将来用語集候補として整理する。
4. `/bioinformatics/` トップに、オミクスFigureとsingle-cell記事への目的別入口を追加する。

## Phase 64 実装範囲

今回の Phase 64 では、`/methods/` トップに、Figure legendやMethods確認へ戻る目的別入口を追加する。

- `/methods/` の冒頭に、実験手法早見表、Methodsの読み方、Figure legendの読み方への3カード入口を追加する。
- 目的別に、PCR/qPCR、Western blot、免疫染色、フローサイトメトリー、対照、NGS/RNA-seq前処理へ戻れる表を追加する。
- 各手法カテゴリから、関連するFigure記事や論文読解記事へ進めるようにする。
- 既に追加済みの記事と矛盾していた「今後追加」文を削除する。
- `/methods/` を手法名から記事を探すカテゴリトップとして維持し、Methodsを順番に読む練習は `/papers/how-to-read-methods/` と `/paths/paper-reading/` へ誘導する。

## 次フェーズ候補

1. `/start/` を、現在の主要入口とラーニングパス構成に合わせて点検する。
2. 論文探索系記事の `relatedTerms` を、DOI、PubMed、PMC、原著論文、レビュー論文などの将来用語集候補として整理する。
3. `/bioinformatics/` トップに、オミクスFigureとsingle-cell記事への目的別入口を追加する。
4. `/cell-biology/` と `/genomics/` トップを、現在の記事数に合わせて目的別入口化する。

## Phase 65 実装範囲

今回の Phase 65 では、`/start/` を、現在の主要入口とラーニングパス構成に合わせて点検する。

- `/start/` の冒頭を、基礎、Figure、論文の3つのラーニングパスへ分岐できる入口に更新する。
- 学習の全体像に、論文Figureの先に論文読解があることを追加する。
- 使い方を、基礎から始める場合、Figure読解から始める場合、論文読解へ進む場合、特定記事を探す場合に整理する。
- 古い長い推奨学習順序を削除し、詳しい順番は `/roadmap/` と各ラーニングパスに任せる構成にする。
- 迷ったときの戻り先として、ラーニングパス、ロードマップ、用語集、Figure、Methods、統計、PubMed/PMC早見表への導線を追加する。

## 次フェーズ候補

1. 論文探索系記事の `relatedTerms` を、DOI、PubMed、PMC、原著論文、レビュー論文などの将来用語集候補として整理する。
2. `/bioinformatics/` トップに、オミクスFigureとsingle-cell記事への目的別入口を追加する。
3. `/cell-biology/` と `/genomics/` トップを、現在の記事数に合わせて目的別入口化する。
4. `/fundamentals/` トップと `/paths/foundations/` の役割分担を点検する。

## Phase 66 実装範囲

今回の Phase 66 では、論文探索系記事の `relatedTerms` を、将来の用語集拡張や関連記事表示に使いやすい形へ整理する。

- `/papers/pubmed/` に、PubMed、PMC、DOI、Abstract、論文種別、原著論文、レビュー論文を関連用語として追加する。
- `/papers/pmc/` に、PMC、PubMed、DOI、オープンアクセス、Figure、Methods、Resultsを関連用語として追加する。
- `/papers/doi/` に、DOI、PubMed、PMID、PMC、引用、文献管理、識別子を関連用語として追加する。
- `/papers/review-vs-primary-paper/` に、レビュー論文、原著論文、Abstract、Figure、Methods、Results、Referencesを関連用語として追加する。
- `/papers/how-to-choose-paper/` に、PubMed、PMC、DOI、レビュー論文、原著論文、Figure、Methodsを関連用語として追加する。
- 今回はURL変更や新規用語ページ作成は行わず、メタデータ整備に限定する。

## 次フェーズ候補

1. `/bioinformatics/` トップに、オミクスFigureとsingle-cell記事への目的別入口を追加する。
2. `/cell-biology/` と `/genomics/` トップを、現在の記事数に合わせて目的別入口化する。
3. `/fundamentals/` トップと `/paths/foundations/` の役割分担を点検する。
4. `relatedTerms` が空の論文読解系記事を、論文構造、Figure、Methods、Results、Discussionなどの軸で整理する。

## Phase 67 実装範囲

今回の Phase 67 では、`/bioinformatics/` トップに、オミクスFigureとsingle-cell記事への目的別入口を追加する。

- `/bioinformatics/` の冒頭に、RNA-seq、single-cell、オミクスFigure、統計確認への4カード入口を追加する。
- RNA-seq、差次的発現解析、single-cell解析、クラスタ・細胞型、バッチ効果の迷いごと別に、読む記事と戻るFigure記事を対応づける表を追加する。
- `/bioinformatics/` を解析記事の一覧だけでなく、論文中のデータ解析Figureを読むための前提へ戻るカテゴリトップとして位置づける。
- 医療上の判断ではなく、研究内容と解析結果の読み取りを目的にする文脈を維持する。

## 次フェーズ候補

1. `/cell-biology/` と `/genomics/` トップを、現在の記事数に合わせて目的別入口化する。
2. `/fundamentals/` トップと `/paths/foundations/` の役割分担を点検する。
3. `relatedTerms` が空の論文読解系記事を、論文構造、Figure、Methods、Results、Discussionなどの軸で整理する。
4. `/molecular-biology/` トップを、基礎パスと遺伝子発現・セントラルドグマ記事への入口として点検する。

## Phase 68 実装範囲

今回の Phase 68 では、`/cell-biology/` と `/genomics/` トップを、現在の記事数に合わせて目的別入口化する。

- `/cell-biology/` に、細胞全体像、細胞膜、細胞小器官、細胞シグナル伝達への4カード入口を追加する。
- `/cell-biology/` に、顕微鏡画像、免疫染色、フローサイトメトリー、single-cell解析へ戻れる目的別表を追加する。
- `/genomics/` に、ゲノム基礎、遺伝的変異、ゲノムブラウザ、シーケンスデータへの4カード入口を追加する。
- `/genomics/` に、ゲノムブラウザ図、Lollipop plot、CNV plot、RNA-seq系Figureへ戻れる目的別表を追加する。
- どちらのカテゴリも、記事一覧だけでなく、Figure読解中に基礎へ戻る入口として位置づける。

## 次フェーズ候補

1. `/fundamentals/` トップと `/paths/foundations/` の役割分担を点検する。
2. `relatedTerms` が空の論文読解系記事を、論文構造、Figure、Methods、Results、Discussionなどの軸で整理する。
3. `/molecular-biology/` トップを、基礎パスと遺伝子発現・セントラルドグマ記事への入口として点検する。
4. `/resources/figures-cheatsheet/` と `/bioinformatics/` のオミクスFigure導線の重複を点検する。

## Phase 69 実装範囲

今回の Phase 69 では、`/fundamentals/` トップと `/paths/foundations/` の役割分担を点検する。

- `/fundamentals/` を、基礎記事を目的別に探すカテゴリトップとして明確化する。
- `/fundamentals/` に、生命科学の全体像、細胞、遺伝情報、ゲノムへの4カード入口を追加する。
- `/fundamentals/` に、迷いごと別に戻る基礎記事と次に進む場所を対応づける表を追加する。
- `/paths/foundations/` は、順番に進むためのラーニングパスとして維持し、特定記事だけを探す場合は `/fundamentals/` を使う説明を追加する。
- URL変更や記事移動は行わず、既存の主要入口型構成に沿って導線を整理する。

## 次フェーズ候補

1. `relatedTerms` が空の論文読解系記事を、論文構造、Figure、Methods、Results、Discussionなどの軸で整理する。
2. `/molecular-biology/` トップを、基礎パスと遺伝子発現・セントラルドグマ記事への入口として点検する。
3. `/resources/figures-cheatsheet/` と `/bioinformatics/` のオミクスFigure導線の重複を点検する。
4. `/papers/` トップと `/paths/paper-reading/` の導線を、Phase 66以降の `relatedTerms` 整備に合わせて再点検する。

## Phase 70 実装範囲

今回の Phase 70 では、`relatedTerms` が空だった論文読解系記事を、論文構造、Figure、Methods、Results、Discussionなどの軸で整理する。

- `/papers/paper-structure/` に、Title、Abstract、Introduction、Methods、Results、Discussion、Referencesを関連用語として追加する。
- `/papers/how-to-read-title-abstract/`、`/papers/how-to-read-introduction/`、`/papers/how-to-read-results/`、`/papers/how-to-read-references/` に、各セクションで拾う情報を関連用語として追加する。
- `/papers/first-pass-reading/` と `/papers/figure-first-reading/` に、初回読み、Figure、Results、Methods、Discussionなどの読解導線を追加する。
- `/papers/critical-reading/` に、主張、証拠、限界、代替説明、バイアス、交絡、再現性を追加する。
- `/papers/note-taking/` に、論文ノート、研究の問い、Methods、Figure、主張、限界、次に読む文献を追加する。
- 論文カテゴリ内に残っていた空の `relatedTerms` をなくす。

## 次フェーズ候補

1. `/molecular-biology/` トップを、基礎パスと遺伝子発現・セントラルドグマ記事への入口として点検する。
2. `/resources/figures-cheatsheet/` と `/bioinformatics/` のオミクスFigure導線の重複を点検する。
3. `/papers/` トップと `/paths/paper-reading/` の導線を、Phase 66以降の `relatedTerms` 整備に合わせて再点検する。
4. `relatedTerms` を使った関連記事表示や用語集拡張方針を `docs/IMPLEMENTATION_PLAN.md` に整理する。

## Phase 71 実装範囲

今回の Phase 71 では、`/molecular-biology/` トップを、基礎パスと遺伝子発現・セントラルドグマ記事への入口として点検する。

- `/molecular-biology/` に、セントラルドグマ、転写、翻訳、遺伝子発現への4カード入口を追加する。
- DNA、RNA、タンパク質の流れ、RNA-seq前提、タンパク質Figure、発現差、qPCR/RT-qPCRへ戻る目的別表を追加する。
- `/fundamentals/` や `/paths/foundations/` で学んだ基礎語を、情報の流れとして読み直すカテゴリトップとして位置づける。
- RNA-seq、差次的発現解析、qPCR、Western blotなど、Figure読解や実験手法への接続を強める。
- URL変更や記事移動は行わない。

## 次フェーズ候補

1. `/resources/figures-cheatsheet/` と `/bioinformatics/` のオミクスFigure導線の重複を点検する。
2. `/papers/` トップと `/paths/paper-reading/` の導線を、Phase 66以降の `relatedTerms` 整備に合わせて再点検する。
3. `relatedTerms` を使った関連記事表示や用語集拡張方針を `docs/IMPLEMENTATION_PLAN.md` に整理する。
4. `/statistics/` と `/figures/` の相互導線を、現在の記事数に合わせて再点検する。

## Phase 72 実装範囲

今回の Phase 72 では、`/resources/figures-cheatsheet/` と `/bioinformatics/` のオミクスFigure導線の重複を点検する。

- `/resources/figures-cheatsheet/` は、Figureを読んでいる途中で確認点を思い出すための早見表として位置づける。
- `/bioinformatics/` は、RNA-seq、single-cell解析、次元削減、クラスタリングなど、解析の前提を学び直すカテゴリトップとして位置づける。
- `/resources/figures-cheatsheet/` のオミクス・ゲノムFigure欄に、RNA-seq、差次的発現解析、次元削減、クラスタリング、single-cell、ゲノミクスへ戻る表を追加する。
- `/bioinformatics/` に、図の種類ごとの確認点だけを素早く見たい場合は `/resources/figures-cheatsheet/` を使う説明を追加する。
- URL変更や記事移動は行わず、導線の役割を明確にする。

## 次フェーズ候補

1. `/papers/` トップと `/paths/paper-reading/` の導線を、Phase 66以降の `relatedTerms` 整備に合わせて再点検する。
2. `relatedTerms` を使った関連記事表示や用語集拡張方針を `docs/IMPLEMENTATION_PLAN.md` に整理する。
3. `/statistics/` と `/figures/` の相互導線を、現在の記事数に合わせて再点検する。
4. `/resources/` トップを、Phase 72の役割分担に合わせて微調整する。

## Phase 73 実装範囲

今回の Phase 73 では、`/papers/` トップと `/paths/paper-reading/` の導線を、Phase 66以降の `relatedTerms` 整備に合わせて再点検する。

- `/papers/` に、Title、Abstract、Introduction、Methods、Results、Discussion、References、Figure、主張、限界などの軸で記事を探せる「論文の部位から探す」表を追加する。
- `/papers/` は、論文の一部を確認したい、論文を探したい、特定の演習へ進みたいときのカテゴリトップとして維持する。
- `/paths/paper-reading/` は、順番に論文読解の型を練習するラーニングパスとして維持する。
- `/paths/paper-reading/` に、用語や論文の部位で迷った場合は `/papers/` の「論文の部位から探す」へ戻る説明を追加する。
- URL変更や記事移動は行わず、Phase 66以降で整理した `relatedTerms` と主要入口の整合を取る。

## 次フェーズ候補

1. `relatedTerms` を使った関連記事表示や用語集拡張方針を `docs/IMPLEMENTATION_PLAN.md` に整理する。
2. `/statistics/` と `/figures/` の相互導線を、現在の記事数に合わせて再点検する。
3. `/resources/` トップを、Phase 72の役割分担に合わせて微調整する。
4. `/paths/figure-reading/` と `/figures/` トップの役割分担を再点検する。

## Phase 74 実装範囲

今回の Phase 74 では、`relatedTerms` を使った用語集導線の受け皿を整備する。

- 論文読解系記事の `relatedTerms` を、英語小文字kebab-caseの用語集 slug に統一する。
- `ArticleList` が生成する `/glossary/{term}/` リンクに対応できるよう、論文読解用語の用語集ページを追加する。
- 用語集データに「論文読解」カテゴリを追加し、Title、Abstract、Introduction、Methods、Results、Discussion、References、Figure、Figure legend、主張、証拠、限界、PubMed、PMC、DOI、PMIDなどを登録する。
- `/glossary/` トップに、論文読解の用語を目的別に探す導線を追加する。
- URL変更や記事移動は行わず、既存の `ArticleList` 表示を活かして未作成の用語集リンクを減らす。

## 次フェーズ候補

1. `/statistics/` と `/figures/` の相互導線を、現在の記事数に合わせて再点検する。
2. `/resources/` トップを、Phase 72の役割分担に合わせて微調整する。
3. `/paths/figure-reading/` と `/figures/` トップの役割分担を再点検する。
4. 用語集ページの本文を、頻出用語から順に個別記事レベルへ拡張する。

## Phase 75 実装範囲

今回の Phase 75 では、`/statistics/` と `/figures/` の相互導線を、現在の記事数に合わせて再点検する。

- `/figures/` に「統計表示で迷ったら」を追加し、Figure上の見え方から統計・研究デザイン記事へ戻れる表を追加する。
- `/statistics/` に「統計からFigureへ進む」を追加し、統計概念をどのFigure記事で確認するかを対応づける。
- `/paths/figure-reading/` に、Figure読解中につまずきやすい統計表示だけを先に確認するミニルートを追加する。
- 既存記事の移動やURL変更は行わず、カテゴリトップとラーニングパスの役割を維持したまま相互導線を強める。

## 次フェーズ候補

1. `/resources/` トップを、Phase 72の役割分担に合わせて微調整する。
2. `/paths/figure-reading/` と `/figures/` トップの役割分担を再点検する。
3. 用語集ページの本文を、頻出用語から順に個別記事レベルへ拡張する。
4. `/papers/` の記事一覧で表示される用語リンクを確認し、論文読解用語の説明ページを必要に応じて拡張する。

## Phase 76 実装範囲

今回の Phase 76 では、`/resources/` トップを、Phase 72以降の役割分担に合わせて微調整する。

- `/resources/` の公開ページ名を「外部学習リソース」から「リファレンス」へ寄せ、BioLearn内の早見表・参照ページの入口であることを明確にする。
- `/resources/` に、Methods、Figure、統計表示、PubMed / PMC、用語集のどこへ戻るかを整理する「迷ったらどこへ戻るか」表を追加する。
- 早見表は順番に学ぶページではなく、論文・Figure・Methodsを読んでいる途中で確認点を思い出すページとして説明する。
- サイドバーの `/resources/` ラベルも「リファレンス」に統一する。
- URL変更やページ移動は行わない。

## 次フェーズ候補

1. `/paths/figure-reading/` と `/figures/` トップの役割分担を再点検する。
2. 用語集ページの本文を、頻出用語から順に個別記事レベルへ拡張する。
3. `/papers/` の記事一覧で表示される用語リンクを確認し、論文読解用語の説明ページを必要に応じて拡張する。
4. `/methods/` と `/resources/methods-cheatsheet/` の役割分担を再点検する。

## Phase 77 実装範囲

今回の Phase 77 では、`/paths/figure-reading/` と `/figures/` トップの役割分担を再点検する。

- `/figures/` に「このページの役割」を追加し、Figureの種類や困りごとから記事を探すカテゴリトップであることを明確にする。
- `/paths/figure-reading/` に「このパスの役割」を追加し、Figure読解を順番に練習するラーニングパスであることを明確にする。
- `/paths/` に、ラーニングパスとカテゴリトップの使い分けを整理する表を追加する。
- 既存URLや記事配置は変更せず、主要入口型の構造を維持したまま導線説明を補強する。

## 次フェーズ候補

1. 用語集ページの本文を、頻出用語から順に個別記事レベルへ拡張する。
2. `/papers/` の記事一覧で表示される用語リンクを確認し、論文読解用語の説明ページを必要に応じて拡張する。
3. `/methods/` と `/resources/methods-cheatsheet/` の役割分担を再点検する。
4. `/statistics/` と `/resources/figures-cheatsheet/` の統計表示導線を再点検する。

## Phase 78 実装範囲

今回の Phase 78 では、用語集ページの本文を、論文読解で頻出する用語から順に拡張する。

- `/glossary/claim/` に、主張を読むときの確認点、混同しやすい用語、Figureで見る場所を追加する。
- `/glossary/evidence/` に、証拠を読むときの確認点、主張・結果・Methods・限界との違い、Figureで見る場所を追加する。
- `/glossary/limitation/` に、限界の種類、研究を否定するためだけではない読み方、Figureで見る場所を追加する。
- `/glossary/figure-legend/` に、legendで確認する条件・記号・統計表示・n数の見方を追加する。
- `/glossary/research-question/` に、研究の問いを一文にして読む方法と、Figureごとの役割確認を追加する。
- `/glossary/abstract/` に、Abstractを背景・目的・方法・結果・結論に分けて読む観点を追加する。
- URL変更や記事移動は行わず、用語集を短い辞書ページから論文読解の補助ページへ少し厚くする。

## 次フェーズ候補

1. `/papers/` の記事一覧で表示される用語リンクを確認し、論文読解用語の説明ページをさらに拡張する。
2. `/methods/` と `/resources/methods-cheatsheet/` の役割分担を再点検する。
3. `/statistics/` と `/resources/figures-cheatsheet/` の統計表示導線を再点検する。
4. `primary-research-article`、`review-paper`、`pubmed`、`doi` など、論文選定・検索系の用語集ページを拡張する。

## Phase 79 実装範囲

今回の Phase 79 では、論文選定・検索系の用語集ページを拡張する。

- `/glossary/primary-research-article/` に、原著論文を読むときの確認点、レビュー論文との違い、関連用語を追加する。
- `/glossary/review-paper/` に、レビュー論文を読むときの確認点、原著論文へ戻る読み方、関連用語を追加する。
- `/glossary/pubmed/` に、検索結果で見る項目、PMC・DOI・PMIDとの違い、論文タイプを意識した探し方を追加する。
- `/glossary/doi/` に、DOIを使う場面、PMID・PMCとの違い、全文アクセスと識別子を混同しない説明を追加する。
- `/glossary/pmc/` に、全文、Figure、Methodsを確認する入口としての役割と、PubMedとの違いを追加する。
- `/glossary/pmid/` に、PubMed上で文献を指定する番号としての使い方と、DOIとの違いを追加する。
- URL変更や記事移動は行わず、論文を探す・選ぶ・戻るための用語集導線を強化する。

## 次フェーズ候補

1. `/papers/` トップと論文検索系用語集の相互導線を再点検する。
2. `/methods/` と `/resources/methods-cheatsheet/` の役割分担を再点検する。
3. `/statistics/` と `/resources/figures-cheatsheet/` の統計表示導線を再点検する。
4. `title`、`introduction`、`methods`、`results`、`discussion`、`references` など論文部位系の用語集ページを同じ厚みにそろえる。

## Phase 80 実装範囲

今回の Phase 80 では、`/papers/` トップと論文検索系用語集の相互導線を再点検する。

- `/papers/` に「論文を探す・選ぶ前に確認する用語」を追加し、PubMed、PMC、DOI、PMID、レビュー論文、原著論文への用語集リンクを整理する。
- `/papers/` では、用語だけ確認したい場合は用語集へ、実際に練習したい場合は探索系記事へ進む形にする。
- `/resources/pubmed-pmc/` に「用語で迷ったら」を追加し、PubMed / PMC の早見表から用語集へ戻れるようにする。
- URL変更や記事移動は行わず、既存の主要入口型構造を保ったまま相互導線を強化する。

## 次フェーズ候補

1. `/methods/` と `/resources/methods-cheatsheet/` の役割分担を再点検する。
2. `/statistics/` と `/resources/figures-cheatsheet/` の統計表示導線を再点検する。
3. `title`、`introduction`、`methods`、`results`、`discussion`、`references` など論文部位系の用語集ページを同じ厚みにそろえる。
4. `/glossary/` トップに、論文探索・論文タイプ・識別子の小カテゴリを追加する。

## Phase 81 実装範囲

今回の Phase 81 では、`/methods/` と `/resources/methods-cheatsheet/` の役割分担を再点検する。

- `/methods/` に「このページの役割」を追加し、実験手法を分野として学び直すカテゴリトップであることを明確にする。
- `/resources/methods-cheatsheet/` に「このページの役割」を追加し、論文やFigureを読んでいる途中で確認点を思い出す早見表であることを明確にする。
- `/resources/methods-cheatsheet/` に、対照、反復、解析条件、Figure legend、限界へ戻る表を追加する。
- `/papers/how-to-read-methods/` と `/papers/methods-checklist/` の NextSteps に、`/methods/` と `/resources/methods-cheatsheet/` への戻り道を追加する。
- URL変更や記事移動は行わず、主要入口型の構造を維持したまま Methods 導線を補強する。

## 次フェーズ候補

1. `/statistics/` と `/resources/figures-cheatsheet/` の統計表示導線を再点検する。
2. `title`、`introduction`、`methods`、`results`、`discussion`、`references` など論文部位系の用語集ページを同じ厚みにそろえる。
3. `/glossary/` トップに、論文探索・論文タイプ・識別子の小カテゴリを追加する。
4. `/papers/how-to-read-methods/` と Methods個別記事の `relatedTerms` を再点検する。

## Phase 82 実装範囲

今回の Phase 82 では、`/statistics/` と `/resources/figures-cheatsheet/` の統計表示導線を再点検する。

- `/statistics/` に「このページの役割」を追加し、統計と研究デザインを概念として学び直すカテゴリトップであることを明確にする。
- `/resources/figures-cheatsheet/` に「このページの役割」を追加し、Figureを見ながら確認点を短く拾う参照ページであることを明確にする。
- `/resources/figures-cheatsheet/` に「統計表示で迷ったら」を追加し、平均、n数、エラーバー、p値、相関、結論の強さから統計記事へ戻れるようにする。
- `/paths/figure-reading/` の役割表に、統計表示の意味を学び直す入口として `/statistics/` を追加する。
- URL変更や記事移動は行わず、統計カテゴリ、Figureカテゴリ、早見表、ラーニングパスの役割分担を補強する。

## 次フェーズ候補

1. `title`、`introduction`、`methods`、`results`、`discussion`、`references` など論文部位系の用語集ページを同じ厚みにそろえる。
2. `/glossary/` トップに、論文探索・論文タイプ・識別子の小カテゴリを追加する。
3. `/papers/how-to-read-methods/` と Methods個別記事の `relatedTerms` を再点検する。
4. `/resources/` トップが Phase 80〜82 の早見表導線を十分に反映しているか再点検する。

## Phase 83 実装範囲

今回の Phase 83 では、論文部位系の用語集ページを同じ厚みにそろえる。

- `/glossary/title/` に、Titleで確認する対象、手法、結論表現、AbstractやResultsへの戻り方を追加する。
- `/glossary/introduction/` に、背景、先行研究、未解決点、研究の問いを分けて読む観点を追加する。
- `/glossary/methods/` に、サンプル、条件、対照、反復、測定方法、解析手順を確認する観点を追加する。
- `/glossary/results/` に、本文、Figure、Figure legendを往復して主張と根拠を対応づける観点を追加する。
- `/glossary/discussion/` に、解釈、限界、代替説明、医療助言に読ませない注意を追加する。
- `/glossary/references/` に、引用文献を背景、手法、比較対象、次に読む論文として使い分ける観点を追加する。
- URL変更や記事移動は行わず、Phase 78で拡張したAbstractなどと同じ用語集補助ページの型へ近づける。

## 次フェーズ候補

1. `/glossary/` トップに、論文探索・論文タイプ・識別子の小カテゴリを追加する。
2. `/papers/how-to-read-methods/` と Methods個別記事の `relatedTerms` を再点検する。
3. `/resources/` トップが Phase 80〜82 の早見表導線を十分に反映しているか再点検する。
4. `/papers/` と `/glossary/` の論文部位導線を、今回拡張した用語集本文に合わせて再点検する。

## Phase 84 実装範囲

今回の Phase 84 では、`/glossary/` トップに論文探索・論文タイプ・識別子の小カテゴリを追加する。

- `/glossary/` の論文読解セクションに「論文探索・論文タイプ・識別子で迷ったら」を追加する。
- PubMed、PMC、レビュー論文、原著論文、DOI、PMID、References、先行研究、論文ノートを目的別に探せる表を追加する。
- 関連教材として `/papers/pubmed/`、`/papers/pmc/`、`/papers/review-vs-primary-paper/`、`/papers/doi/`、`/resources/pubmed-pmc/`、`/papers/how-to-read-references/`、`/papers/note-taking/` へ戻れるようにする。
- 識別子やデータベース名は論文を探す入口であり、研究内容の妥当性はMethods、Results、Figure、Discussionで確認する説明を追加する。
- URL変更や記事移動は行わず、用語集トップの探索導線だけを補強する。

## 次フェーズ候補

1. `/papers/how-to-read-methods/` と Methods個別記事の `relatedTerms` を再点検する。
2. `/resources/` トップが Phase 80〜82 の早見表導線を十分に反映しているか再点検する。
3. `/papers/` と `/glossary/` の論文部位導線を、今回拡張した用語集本文に合わせて再点検する。
4. `/glossary/` トップの分野別カテゴリと目的別導線が長くなりすぎていないか、見出し構造を再点検する。

## Phase 85 実装範囲

今回の Phase 85 では、`/papers/how-to-read-methods/` と Methods個別記事の `relatedTerms` を再点検する。

- `/papers/how-to-read-methods/` の関連用語を、PCR/RNA-seqだけでなく、Methods、対照群、反復、n数、Figure legend、p値、多重検定補正へ広げる。
- `/methods/control/` と `/methods/positive-negative-control/` の空だった `relatedTerms` を補い、対照、Methods、Figure legend、バイアスへ戻れるようにする。
- PCR、qPCR、RT-qPCR、シーケンシング、NGS、ライブラリ調製の記事に、Methods、対照、反復、n数、統計表示、配列データなどの確認軸を追加する。
- Western blot、ローディングコントロール、免疫染色、フローサイトメトリーの記事に、Methods、対照、反復、Figure legend、バイアスなどの確認軸を追加する。
- URL変更や本文移動は行わず、記事一覧や関連記事表示から用語集へ戻る導線を補強する。

## 次フェーズ候補

1. `/resources/` トップが Phase 80〜82 の早見表導線を十分に反映しているか再点検する。
2. `/papers/` と `/glossary/` の論文部位導線を、拡張済みの用語集本文に合わせて再点検する。
3. `/glossary/` トップの分野別カテゴリと目的別導線が長くなりすぎていないか、見出し構造を再点検する。
4. Methods系記事の本文内「重要用語」に、今回追加した関連用語とのズレがないか点検する。

## Phase 86 実装範囲

今回の Phase 86 では、`/resources/` トップが Phase 80〜82 の早見表導線を十分に反映しているか再点検する。

- `/resources/` に「早見表をどう使い分けるか」を追加し、実験手法早見表、Figure早見表、PubMed / PMC の使い方の役割を分けて説明する。
- Methods、Figure、統計表示、論文探索で止まったときに、カテゴリトップ、論文読解記事、ラーニングパスへ戻る導線を整理する。
- `/resources/` に「用語で迷ったら」を追加し、論文読解、実験手法・解析、統計・研究デザイン、論文探索・識別子の用語集導線を明示する。
- 早見表は確認点だけを拾うページであり、概念を学び直すときはカテゴリトップ、順番に練習するときはラーニングパスへ戻る説明を追加する。
- URL変更や記事移動は行わず、リファレンストップの導線だけを補強する。

## 次フェーズ候補

1. `/papers/` と `/glossary/` の論文部位導線を、拡張済みの用語集本文に合わせて再点検する。
2. `/glossary/` トップの分野別カテゴリと目的別導線が長くなりすぎていないか、見出し構造を再点検する。
3. Methods系記事の本文内「重要用語」に、今回追加した関連用語とのズレがないか点検する。
4. `/paths/paper-reading/` が Phase 83〜86 の論文部位・用語集・リファレンス導線を十分に反映しているか再点検する。

## Phase 87 実装範囲

今回の Phase 87 では、`/papers/` と `/glossary/` の論文部位導線を、拡張済みの用語集本文に合わせて再点検する。

- `/papers/` の「論文の部位から探す」表に、練習する記事、用語だけ確認するページ、あわせて戻る場所を分けた列を追加する。
- Title、Abstract、Introduction、Methods、Results、Figure、Discussion、Referencesから、対応する用語集ページへ直接戻れるようにする。
- `/glossary/` の論文読解セクションに「論文の部位から練習へ進む」を追加し、用語集から論文読解演習記事へ進めるようにする。
- 用語集は短く確認する入口、`/papers/` は読み方を練習する場所として役割分担を明記する。
- URL変更や記事移動は行わず、論文部位、用語集、論文読解演習の相互導線を補強する。

## 次フェーズ候補

1. `/glossary/` トップの分野別カテゴリと目的別導線が長くなりすぎていないか、見出し構造を再点検する。
2. Methods系記事の本文内「重要用語」に、今回追加した関連用語とのズレがないか点検する。
3. `/paths/paper-reading/` が Phase 83〜87 の論文部位・用語集・リファレンス導線を十分に反映しているか再点検する。
4. `/papers/` の探索系記事と `/resources/pubmed-pmc/` の役割分担を、用語集導線込みで再点検する。

## Phase 88 実装範囲

今回の Phase 88 では、`/glossary/` トップの分野別カテゴリと目的別導線が長くなりすぎていないか再点検し、入口構造を整理する。

- `/glossary/` の冒頭に「まず選ぶ」を追加し、カテゴリ、統計・研究デザイン、ゲノミクス、論文読解、論文探索、用語一覧へ短く移動できるようにする。
- 分野別カテゴリを冒頭近くへ移し、用語集トップをまずカテゴリから探せる構造にする。
- 目的別セクションに英語の安定アンカーを追加し、外部ページから日本語見出し生成に依存せず戻れるようにする。
- `/resources/` の用語集リンクを、新しい安定アンカーへ更新する。
- URL変更や記事移動は行わず、用語集トップの見出し構造と内部導線だけを整理する。

## 次フェーズ候補

1. Methods系記事の本文内「重要用語」に、Phase 85で追加した `relatedTerms` とのズレがないか点検する。
2. `/paths/paper-reading/` が Phase 83〜88 の論文部位・用語集・リファレンス導線を十分に反映しているか再点検する。
3. `/papers/` の探索系記事と `/resources/pubmed-pmc/` の役割分担を、用語集導線込みで再点検する。
4. `/glossary/` トップの目的別アンカーを、必要に応じて他のカテゴリトップからも参照する。

## Phase 89 実装範囲

今回の Phase 89 では、Methods系記事の本文内「重要用語」と Phase 85で追加した `relatedTerms` のズレを点検し、本文から用語集へ戻る導線を補強する。

- `/papers/how-to-read-methods/` の重要用語に、対照群、反復、n数、Figure legendへの用語集リンクを追加する。
- `/methods/control/`、`/methods/positive-negative-control/`、`/methods/pcr/` の重要用語に、対照、反復、n数、Figure legend、バイアスなどの確認軸を追加する。
- `/methods/qpcr/`、`/methods/rt-qpcr/` の重要用語に、反復、対照群、p値、効果量への戻り先を追加する。
- `/methods/sequencing/`、`/methods/ngs/`、`/methods/library-preparation/` の重要用語に、シーケンスデータ、n数、多重検定補正、バイアスへの戻り先を追加する。
- `/methods/western-blot/`、`/methods/loading-control/`、`/methods/immunostaining/`、`/methods/flow-cytometry/` の重要用語に、対照群、反復、n数、Figure legend、バイアスへの戻り先を追加する。
- URL変更や記事移動は行わず、既存本文の重要用語と関連用語表示の意味的なズレを小さくする。

## 次フェーズ候補

1. `/paths/paper-reading/` が Phase 83〜89 の論文部位・用語集・リファレンス導線を十分に反映しているか再点検する。
2. `/papers/` の探索系記事と `/resources/pubmed-pmc/` の役割分担を、用語集導線込みで再点検する。
3. `/glossary/` トップの目的別アンカーを、必要に応じて `/papers/`、`/methods/`、`/statistics/` からも参照する。
4. Methods系記事の確認問題が、対照、反復、n数、Figure legendを十分に問えているか点検する。

## Phase 90 実装範囲

今回の Phase 90 では、`/paths/paper-reading/` が Phase 83〜89 の論文部位・用語集・リファレンス導線を十分に反映しているか再点検する。

- 推奨ルートに [Referencesの読み方](/papers/how-to-read-references/) を追加し、引用文献を背景、手法、比較対象、次に読む論文として使い分ける流れを含める。
- `/paths/paper-reading/` に「部位別に戻る」を追加し、Title / Abstract、Introduction、Figure / Results、Methods、Discussion、References / 論文探索ごとに、練習記事、用語集、補助リファレンスを整理する。
- Methodsで止まった場合に、対照群、反復、n数、Figure legendを短く確認してからMethodsチェックリストへ戻る導線を追加する。
- PubMed、PMC、DOI、PMIDで迷った場合に、`/resources/pubmed-pmc/` と用語集の論文探索アンカーへ戻れるようにする。
- URL変更や記事移動は行わず、論文読解パスの順番学習と迷った時の復帰導線を補強する。

## 次フェーズ候補

1. `/papers/` の探索系記事と `/resources/pubmed-pmc/` の役割分担を、用語集導線込みで再点検する。
2. `/glossary/` トップの目的別アンカーを、必要に応じて `/papers/`、`/methods/`、`/statistics/` からも参照する。
3. Methods系記事の確認問題が、対照、反復、n数、Figure legendを十分に問えているか点検する。
4. `/paths/figure-reading/` と `/paths/paper-reading/` の相互導線が、Figureから論文へ進む流れとして十分か再点検する。

## Phase 91 実装範囲

今回の Phase 91 では、`/papers/` の探索系記事と `/resources/pubmed-pmc/` の役割分担を、用語集導線込みで再点検する。

- `/resources/pubmed-pmc/` に「この早見表の位置づけ」を追加し、早見表、PubMed練習、PMC本文読解、DOI/PMID確認、論文選定、論文種別確認の役割を分ける。
- `/resources/pubmed-pmc/` に「読む順番の例」を追加し、PubMedで探す、論文種別を分ける、読む論文を選ぶ、PMCで本文へ進む流れを明記する。
- `/resources/pubmed-pmc/` から用語集の論文探索・識別子アンカーへ戻れるようにする。
- `/papers/pubmed/`、`/papers/pmc/`、`/papers/doi/`、`/papers/how-to-choose-paper/`、`/papers/review-vs-primary-paper/` に、それぞれの役割と早見表・用語集への戻り方を短く追加する。
- URL変更や記事移動は行わず、探索系記事は練習、`/resources/pubmed-pmc/` は短い確認用リファレンスとして役割を整理する。

## 次フェーズ候補

1. `/paths/figure-reading/` と `/paths/paper-reading/` の相互導線が、Figureから論文へ進む流れとして十分か再点検する。
2. `/resources/` トップから `/resources/pubmed-pmc/` の新しい役割整理へ十分に進めるか再点検する。

## Phase 93 実装範囲

今回の Phase 93 では、Methods系記事とMethods読解記事の確認問題が、対照、反復、n数、Figure legendを十分に問えているか点検し、不足している問いを補強する。

- `/papers/how-to-read-methods/` に、Figure legendとMethodsを合わせて確認する情報を問う確認問題を追加する。
- `/papers/methods-checklist/` に、Figure legendでn数や統計表示が分からない場合にMethodsで探す情報を問う確認問題を追加する。
- `/methods/qpcr/`、`/methods/rt-qpcr/` に、Figure legend、反復、正規化、参照遺伝子を確認する問いを追加する。
- `/methods/sequencing/`、`/methods/ngs/`、`/methods/library-preparation/` に、リード数とサンプル数の違い、独立サンプル、バッチやインデックスを確認する問いを追加する。
- `/methods/western-blot/` に、Figure legendで抗体、補正方法、n数、統計表示を確認する問いを追加する。
- URL変更や本文構造の大きな変更は行わず、既存の確認問題をMethods読解の確認軸に寄せる。

## 次フェーズ候補

1. `/resources/` トップから `/resources/pubmed-pmc/` の新しい役割整理へ十分に進めるか再点検する。
2. Methods系記事の `relatedTerms` に `sample-size` と `figure-legend` の不足がないか再点検する。

## Phase 94 実装範囲

今回の Phase 94 では、`/paths/figure-reading/` と `/paths/paper-reading/` の相互導線が、Figureから論文へ進む流れとして十分か再点検する。

- `/paths/figure-reading/` に「Figureから論文へ進むタイミング」を追加し、Figure legend、Results本文、Methods、複数Figure、架空ケース演習へ進む判断を整理する。
- `/paths/paper-reading/` に「Figure読解に戻るタイミング」を追加し、論文読解中にFigure legend、軸、Figure種類、統計表示、本文との対応で止まった場合の戻り先を整理する。
- 既存の推奨ルートや記事一覧は変更せず、ラーニングパス間を往復する判断基準を補強する。
- URL変更やページ移動は行わず、既存の主要入口型構成を保つ。

## 次フェーズ候補

1. `/resources/` トップから `/resources/pubmed-pmc/` の新しい役割整理へ十分に進めるか再点検する。
2. Methods系記事の `relatedTerms` に `sample-size` と `figure-legend` の不足がないか再点検する。
3. `/paths/` トップから3つのラーニングパスの選び分けが十分に分かるか再点検する。

## Phase 92 実装範囲

今回の Phase 92 では、`/glossary/` トップの目的別アンカーを、主要カテゴリトップから参照できるようにする。

- `/papers/` の論文部位別導線から、`/glossary/#paper-section-terms` へ戻れるようにする。
- `/papers/` の論文探索導線から、`/glossary/#paper-search-terms` へ戻れるようにする。
- `/methods/` のカテゴリトップに、対照、反復、n数、統計表示で迷ったときの `/glossary/#figure-statistics-terms` 導線を追加する。
- `/methods/` から、シーケンシング、NGS、シーケンスデータなどの配列関連語を確認する `/glossary/#genomics-terms` 導線を追加する。
- `/statistics/` のカテゴリトップに、統計・研究デザイン用語だけを短く確認する `/glossary/#figure-statistics-terms` 導線を追加する。
- URL変更やページ移動は行わず、既存の主要入口型構成の戻り道を補強する。

## 次フェーズ候補

1. Methods系記事の確認問題が、対照、反復、n数、Figure legendを十分に問えているか点検する。
2. `/paths/figure-reading/` と `/paths/paper-reading/` の相互導線が、Figureから論文へ進む流れとして十分か再点検する。
3. `/resources/` トップから `/resources/pubmed-pmc/` の新しい役割整理へ十分に進めるか再点検する。

## Phase 95 実装範囲

今回の Phase 95 では、`/resources/` トップから `/resources/pubmed-pmc/` の新しい役割整理へ十分に進めるか再点検する。

- `/resources/` トップのカード名を「PubMed / PMC 早見表」に寄せ、検索入口、全文アーカイブ、識別子の違いを短く確認するページだと分かるようにする。
- `/resources/` トップの早見表使い分け表で、`/resources/pubmed-pmc/` の役割を「論文を探す入口、全文アーカイブ、DOIやPMIDの違いを短く確認する」ページとして明記する。
- `/resources/` トップに「論文探索で迷ったら」を追加し、PubMed/PMC、DOI/PMID、論文種別、読む論文の選び方、PMC本文読解への進み方を整理する。
- `/resources/pubmed-pmc/` から `/resources/` トップへ戻れるようにする。
- URL変更やページ移動は行わず、リファレンス内の役割分担と導線だけを補強する。

## 次フェーズ候補

1. Methods系記事の `relatedTerms` に `sample-size` と `figure-legend` の不足がないか再点検する。
2. `/paths/` トップから3つのラーニングパスの選び分けが十分に分かるか再点検する。

## Phase 96 実装範囲

今回の Phase 96 では、Methods系記事の `relatedTerms` が、Figure読解で必要になるn数、反復、Figure legendへ十分に戻れるか再点検する。

- `/methods/` 配下の個別記事で、`sample-size` と `figure-legend` の不足を補う。
- サンプル準備、対照、定量、シーケンシング、タンパク質・細胞系手法で、必要に応じて `biological-technical-replicates` も補う。
- URL変更や本文構成の大きな変更は行わず、カテゴリ一覧や将来の関連記事表示で使うメタデータを整える。
- 医療上の診断・治療助言に踏み込まず、論文FigureとMethodsを読むための学習導線として扱う。

## 次フェーズ候補

1. `/paths/` トップから3つのラーニングパスの選び分けが十分に分かるか再点検する。
2. Methods系記事のカテゴリ一覧で、`relatedTerms` の表示順が読者に分かりやすいか再点検する。

## Phase 97 実装範囲

今回の Phase 97 では、`/paths/` トップから3つのラーニングパスを選び分けやすいか再点検する。

- `/paths/` トップに、迷った場合は「基礎」「Figure」「論文」のどこから始めるかを短く説明する導入文を追加する。
- `/paths/` トップに「迷ったときの選び方」を追加し、基礎用語、Figure読解、論文読解、用語確認、リファレンス、分野別探索の入口を整理する。
- `/paths/` トップに「パスを切り替える目安」を追加し、基礎からFigureへ、Figureから論文へ、論文からFigureやMethodsへ戻る判断を明記する。
- URL変更やページ移動は行わず、主要入口型のラーニングパス導線を補強する。

## 次フェーズ候補

1. Methods系記事のカテゴリ一覧で、`relatedTerms` の表示順が読者に分かりやすいか再点検する。
2. `/roadmap/` から `/paths/`、`/resources/`、主要カテゴリへの導線が重複しすぎていないか再点検する。

## Phase 98 実装範囲

今回の Phase 98 では、Methods系記事のカテゴリ一覧で表示される `relatedTerms` の先頭3件が、読者に分かりやすい順序になっているか再点検する。

- `ArticleList` が `relatedTerms` の先頭3件を「用語」として表示する前提に合わせ、Methods個別記事の `relatedTerms` を並べ替える。
- PCR、qPCR、RT-qPCR、NGS、シーケンシング、ライブラリ調製では、手法名、配列関連語、反復、n数、Figure legendが見えやすい順序にする。
- 対照、ローディングコントロール、Western blot、免疫染色、フローサイトメトリーでは、対照、反復、n数、Figure legendが見えやすい順序にする。
- `relatedTerms` は用語集 slug として扱い、ページURLは `prerequisites` に残す。
- URL変更や本文構成の変更は行わず、一覧表示と将来の関連記事表示で使いやすいメタデータに整える。

## 次フェーズ候補

1. `/roadmap/` から `/paths/`、`/resources/`、主要カテゴリへの導線が重複しすぎていないか再点検する。
2. `ArticleList` 側で `relatedTerms` の表示件数や表示順ルールを文書化する。

## Phase 99 実装範囲

今回の Phase 99 では、`/roadmap/` から `/paths/`、`/resources/`、主要カテゴリへの導線が重複しすぎていないか再点検する。

- `/roadmap/` の役割を「BioLearn全体を章立てで見渡すシラバス」として明記する。
- 冒頭の使い分けカードを、順番に学ぶ `/paths/`、途中で確認する `/resources/`、用語を確認する `/glossary/` に整理する。
- `/figures/` だけへ飛んでいた「分野別カテゴリ」カードをやめ、主要カテゴリを一覧表として別に整理する。
- URL変更やページ移動は行わず、ロードマップ、ラーニングパス、リファレンス、カテゴリトップの役割分担を明確にする。

## 次フェーズ候補

1. `ArticleList` 側で `relatedTerms` の表示件数や表示順ルールを文書化する。
2. `/start/` とトップページの導線が Phase 99 の役割分担と一致しているか再点検する。

## Phase 100 実装範囲

今回の Phase 100 では、`/start/` とトップページの導線が Phase 99 の役割分担と一致しているか再点検する。

- `/start/` で、ロードマップを「BioLearn全体の章立て」、ラーニングパスを「順番に練習する入口」、リファレンスを「途中で確認点だけ見直す入口」として説明する。
- `/start/` に分野別カテゴリ表を追加し、特定の記事を探す場合に `/roadmap/` ではなく主要カテゴリトップへ進めるようにする。
- トップページで、ロードマップ、ラーニングパス、カテゴリトップ、リファレンスの役割分担を短く補足する。
- PubMed / PMC の導線名を「早見表」に寄せ、`/resources/` 内の位置づけと揃える。
- URL変更やページ移動は行わず、主要入口ページ同士の役割分担を明確にする。

## 次フェーズ候補

1. `ArticleList` 側で `relatedTerms` の表示件数や表示順ルールを文書化する。
2. `/start/` の分野別カテゴリ表が長く見えすぎないか、必要に応じてカードや短縮表へ調整する。

## Phase 101 実装範囲

今回の Phase 101 では、`ArticleList` 側で `relatedTerms` と `prerequisites` の表示件数や表示順ルールを文書化する。

- `ArticleList` は `prerequisites` と `relatedTerms` の先頭3件だけを一覧上に表示することを明記する。
- `relatedTerms` はURLではなく用語集 slug として扱うことを明記する。
- 表示したい前提記事や用語ほど配列の前に置く運用ルールを明記する。
- `COMPONENT_GUIDELINES.md` にコンポーネント利用ルールとして追記する。
- `INFORMATION_ARCHITECTURE.md` の frontmatter 設計にも、一覧表示とメタデータの関係を追記する。
- URL変更や本文移動は行わず、今後の記事追加時にメタデータの表示意図がぶれないようにする。

## 次フェーズ候補

1. `/start/` の分野別カテゴリ表が長く見えすぎないか、必要に応じてカードや短縮表へ調整する。
2. `relatedTerms` に存在しない用語集 slug が混ざっていないか、全記事で機械的に点検する。

## Phase 102 実装範囲

今回の Phase 102 では、`relatedTerms` に存在しない用語集 slug が混ざっていないか、全記事で機械的に点検する。

- `src/content/docs/` 配下の全 MDX の frontmatter から `relatedTerms` だけを抽出する。
- `src/content/docs/glossary/` 配下の用語集 slug と照合する。
- `/glossary/.../` のようなURL形式が `relatedTerms` に混ざっていないか確認する。
- 点検の結果、すべての `relatedTerms` は既存の用語集 slug に解決できた。
- URL変更、本文移動、frontmatter修正は不要だったため、実装変更は行わない。

## 次フェーズ候補

1. `/start/` の分野別カテゴリ表が長く見えすぎないか、必要に応じてカードや短縮表へ調整する。
2. `prerequisites` に存在しない内部URLが混ざっていないか、全記事で機械的に点検する。

## Phase 103 実装範囲

今回の Phase 103 では、`prerequisites` に存在しない内部URLが混ざっていないか、全記事で機械的に点検する。

- `src/content/docs/` 配下の全 MDX の frontmatter から `prerequisites` だけを抽出する。
- `src/content/docs/` 配下の実在ページから生成した内部URL一覧と照合する。
- 外部URLや slug だけの値が `prerequisites` に混ざっていないか確認する。
- 点検の結果、すべての `prerequisites` は既存の内部ページに解決できた。
- URL変更、本文移動、frontmatter修正は不要だったため、実装変更は行わない。

## 次フェーズ候補

1. `/start/` の分野別カテゴリ表が長く見えすぎないか、必要に応じてカードや短縮表へ調整する。
2. `ArticleList` の `moduleLabels` と実際の `module` 値にズレがないか、全記事で機械的に点検する。

## Phase 104 実装範囲

今回の Phase 104 では、`ArticleList` の `moduleLabels` と実際の `module` 値にズレがないか、全記事で機械的に点検する。

- `src/content/docs/` 配下の全 MDX の frontmatter から `module` 値を抽出する。
- `src/components/ArticleList.astro` の `moduleLabels` と照合する。
- 点検の結果、現在使われているすべての `module` 値には日本語ラベルが定義されていた。
- 未使用の `moduleLabels` として `orientation` と `cell-communication` が残っているが、将来の入口ページ・細胞間コミュニケーション記事用の予約ラベルとして維持する。
- URL変更、本文移動、frontmatter修正、コンポーネント修正は不要だったため、実装変更は行わない。

## 次フェーズ候補

1. `/start/` の分野別カテゴリ表が長く見えすぎないか、必要に応じてカードや短縮表へ調整する。
2. `ArticleList` の `partLabels` と実際の `part` 値にズレがないか、全記事で機械的に点検する。

## Phase 105 実装範囲

今回の Phase 105 では、`ArticleList` の `partLabels` と実際の `part` 値にズレがないか、全記事で機械的に点検する。

- `src/content/docs/` 配下の全 MDX の frontmatter から `part` 値を抽出する。
- `src/components/ArticleList.astro` の `partLabels` と照合する。
- 点検の結果、現在使われているすべての `part` 値には日本語ラベルが定義されていた。
- 未使用の `partLabels` として `start`、`glossary`、`resources`、`paths`、`about` が残っているが、主要入口ページや用語集・リソース・ラーニングパス・About の将来利用に備えた予約ラベルとして維持する。
- 現在の実記事で使われている `part` は、`fundamentals`、`molecular-biology`、`cell-biology`、`genomics`、`methods`、`bioinformatics`、`statistics`、`figures`、`papers` に整理されている。
- URL変更、本文移動、frontmatter修正、コンポーネント修正は不要だったため、実装変更は行わない。

## 次フェーズ候補

1. `/start/` の分野別カテゴリ表が長く見えすぎないか、必要に応じてカードや短縮表へ調整する。
2. 主要入口ページ、カテゴリトップ、記事一覧で `ArticleList` の表示粒度が重複しすぎていないか確認する。
