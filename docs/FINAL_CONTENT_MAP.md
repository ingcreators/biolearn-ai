# BioLearn 最終コンテンツ構成・URL設計・実装ロードマップ

この文書は、BioLearn を「生命科学論文を読めるようになるための日本語教材サイト」として育てるための、最終コンテンツ構成案です。

以前の `PRODUCT_BRIEF.md` は、プロジェクトの目的・方針・情報設計を中心にまとめたものです。本書では、さらに一歩進めて、**最終的にどの部・モジュール・記事を持つべきか** を洗い出します。

---

## 1. この文書の目的

BioLearn は、最終的に以下を実現する教材サイトです。

> 生命科学の基礎から学び、最終的に生命科学論文の Figure、Methods、Results を読めるようになる。

そのためには、単に記事を増やすだけではなく、最初から以下を明確にしておく必要があります。

- どの分野を扱うか
- どの順番で学ぶか
- どの記事をどのカテゴリに置くか
- どのURLを使うか
- どのカテゴリトップを入口にするか
- どこまでを初期公開で作り、どこから先を拡張にするか

この文書では、最終的に120〜160本程度の記事へ拡張しても破綻しないように、全体構成を固定します。

---

## 2. 基本方針

### 2.1 表示ブランド名

```text
BioLearn
```

ドメインは `biolearn.ai` のまま使うが、公開サイト名は `BioLearn AI` ではなく `BioLearn` とする。

### 2.2 最終ゴール

BioLearn のゴールは、単なる生命科学入門ではなく、次の状態を目指すことです。

```text
1. 生命科学の基本用語を理解できる
2. 分子・細胞・ゲノムの概念をつなげて理解できる
3. 実験手法が何を測っているか理解できる
4. バイオインフォマティクス解析結果の意味を読める
5. 統計・研究デザインの基本を確認できる
6. 論文Figureを読める
7. Methodsの大意を追える
8. ResultsとFigureが論文の主張をどう支えているか読める
```

### 2.3 数値入りコース名は使わない

公開サイトの表示名やURLには、`Core 30`、`Figure 80`、`Paper 160` のような数値入りコース名は使わない。

理由は、記事数が増減したときに名称やURLが固定されてしまうため。

使う名前は以下。

```text
基礎から学ぶ
Figureを読めるようになる
論文を読めるようになる
```

---

## 3. 最終URL構成

公開前なので、既存URLは整理してよい。

### 3.1 トップレベル

```text
/
/start/
/roadmap/
/paths/
/paths/foundations/
/paths/figure-reading/
/paths/paper-reading/
/fundamentals/
/molecular-biology/
/cell-biology/
/genomics/
/methods/
/bioinformatics/
/statistics/
/figures/
/papers/
/glossary/
/resources/
/about/
```

### 3.2 URL命名ルール

- URL slug は英語小文字 kebab-case
- 日本語URLは使わない
- `what-is-*` は原則使わず、短い名詞ベースにする
- ただし、読者にとって意味が曖昧な場合は `how-to-read-*` を使ってよい

例：

```text
/fundamentals/dna/
/fundamentals/gene/
/molecular-biology/transcription/
/methods/qpcr/
/figures/how-to-read-western-blot/
/papers/how-to-read-methods/
```

---

## 4. サイドバー最終方針

120〜160本規模の記事を想定するため、サイドバーに全記事を並べない。

サイドバーは主要入口だけにする。

```text
学習を始める
  はじめに
  学習ロードマップ
  論文を読めるようになるまで

ラーニングパス
  基礎から学ぶ
  Figureを読めるようになる
  論文を読めるようになる

分野別に学ぶ
  生命科学の基礎
  分子生物学
  細胞生物学
  ゲノミクス
  実験手法
  バイオインフォマティクス
  統計・研究デザイン
  論文Figureの読み方
  論文読解演習

リファレンス
  用語集
  実験手法早見表
  Figure早見表
  PubMed / PMC の使い方
  外部学習リソース
  About
```

全記事一覧は、各カテゴリトップやラーニングパスページで見せる。

---

## 5. ラーニングパス

### 5.1 基礎から学ぶ

URL:

```text
/paths/foundations/
```

目的:

```text
生命科学を初めて学ぶ人が、細胞・DNA・RNA・タンパク質・遺伝子・ゲノムを混同せず理解する。
```

主に含めるカテゴリ:

```text
/fundamentals/
/molecular-biology/ の一部
/cell-biology/ の一部
```

### 5.2 Figureを読めるようになる

URL:

```text
/paths/figure-reading/
```

目的:

```text
生命科学論文のResultsに出てくる主要なFigureを読めるようになる。
```

主に含めるカテゴリ:

```text
/methods/
/bioinformatics/
/statistics/
/figures/
```

### 5.3 論文を読めるようになる

URL:

```text
/paths/paper-reading/
```

目的:

```text
生命科学論文のAbstract、Results、Methods、Discussionを読めるようになる。
```

主に含めるカテゴリ:

```text
/papers/
/figures/
/methods/
/statistics/
/resources/
```

---

# 6. 最終コンテンツ構成

以下では、各部ごとに「モジュール」と「記事候補」を定義する。

優先度の目安:

```text
P0: 初期公開〜早期に必要
P1: 論文Figure読解に必要
P2: 論文読解演習や発展で必要
```

---

## 第0部 学習の入口

URL:

```text
/start/
/roadmap/
/paths/
```

目的:

```text
BioLearnの使い方、学習順、最終ゴールを説明する。
```

### 0-1 はじめに

- `/start/` はじめに [P0]
- `/roadmap/` 学習ロードマップ [P0]
- `/paths/` ラーニングパス一覧 [P0]
- `/paths/foundations/` 基礎から学ぶ [P0]
- `/paths/figure-reading/` Figureを読めるようになる [P0]
- `/paths/paper-reading/` 論文を読めるようになる [P0]
- `/about/` BioLearnについて [P0]

---

## 第1部 生命科学の基礎

URL:

```text
/fundamentals/
```

目的:

```text
論文を読むために必要な、生命科学の共通語彙と概念の地図を作る。
```

記事数目安:

```text
10〜15本
```

### 1-1 生命科学の全体像

- `/fundamentals/life-science/` 生命科学とは何か [P0]
- `/fundamentals/cell/` 細胞とは何か [P0]
- `/fundamentals/molecule/` 分子とは何か [P1]
- `/fundamentals/organism-tissue-cell/` 個体・組織・細胞の関係 [P1]

### 1-2 遺伝情報の基本

- `/fundamentals/dna/` DNAとは何か [P0]
- `/fundamentals/rna/` RNAとは何か [P0]
- `/fundamentals/protein/` タンパク質とは何か [P0]
- `/fundamentals/gene/` 遺伝子とは何か [P0]
- `/fundamentals/genome/` ゲノムとは何か [P0]
- `/fundamentals/chromosome/` 染色体とは何か [P0]

### 1-3 論文読解に必要な基本概念

- `/fundamentals/mutation/` 変異とは何か [P0]
- `/fundamentals/gene-expression/` 遺伝子発現とは何か [P0]
- `/fundamentals/phenotype/` 表現型とは何か [P1]
- `/fundamentals/model-organisms/` モデル生物とは何か [P1]
- `/fundamentals/biological-question/` 生命科学の問いとは何か [P1]

---

## 第2部 分子生物学

URL:

```text
/molecular-biology/
```

目的:

```text
DNA、RNA、タンパク質、遺伝子発現制御を理解し、分子レベルの論文を読めるようにする。
```

記事数目安:

```text
20〜25本
```

### 2-1 DNA・RNA・タンパク質を分子として理解する

このモジュールは、第1部の基礎記事と強く接続する。DNA/RNA/タンパク質の基本記事は `/fundamentals/` に置き、分子機構の詳細を `/molecular-biology/` に置く。

- `/molecular-biology/nucleic-acids/` 核酸とは何か [P1]
- `/molecular-biology/nucleotide/` ヌクレオチドとは何か [P1]
- `/molecular-biology/base-pairing/` 塩基対とは何か [P1]
- `/molecular-biology/amino-acid/` アミノ酸とは何か [P1]
- `/molecular-biology/protein-structure/` タンパク質構造とは何か [P1]
- `/molecular-biology/enzyme/` 酵素とは何か [P1]

関連する基礎記事:

- `/fundamentals/dna/`
- `/fundamentals/rna/`
- `/fundamentals/protein/`
- `/fundamentals/gene/`

### 2-2 セントラルドグマ

- `/molecular-biology/central-dogma/` セントラルドグマとは何か [P0]
- `/molecular-biology/dna-replication/` DNA複製とは何か [P1]
- `/molecular-biology/transcription/` 転写とは何か [P0]
- `/molecular-biology/translation/` 翻訳とは何か [P0]
- `/molecular-biology/rna-processing/` RNAプロセシングとは何か [P1]
- `/molecular-biology/splicing/` スプライシングとは何か [P1]
- `/molecular-biology/protein-folding/` タンパク質フォールディングとは何か [P2]

### 2-3 遺伝子発現制御

- `/molecular-biology/gene-expression-regulation/` 遺伝子発現制御とは何か [P1]
- `/molecular-biology/promoter/` プロモーターとは何か [P1]
- `/molecular-biology/enhancer/` エンハンサーとは何か [P1]
- `/molecular-biology/transcription-factor/` 転写因子とは何か [P1]
- `/molecular-biology/noncoding-rna/` non-coding RNAとは何か [P2]
- `/molecular-biology/microrna/` miRNAとは何か [P2]
- `/molecular-biology/post-transcriptional-regulation/` 転写後制御とは何か [P2]

### 2-4 クロマチンとエピジェネティクス

- `/molecular-biology/chromatin/` クロマチンとは何か [P1]
- `/molecular-biology/nucleosome/` ヌクレオソームとは何か [P2]
- `/molecular-biology/epigenetics/` エピジェネティクスとは何か [P1]
- `/molecular-biology/dna-methylation/` DNAメチル化とは何か [P1]
- `/molecular-biology/histone-modification/` ヒストン修飾とは何か [P1]
- `/molecular-biology/chromatin-accessibility/` クロマチンアクセシビリティとは何か [P2]

### 2-5 DNA損傷・修復・組換え

- `/molecular-biology/dna-damage/` DNA損傷とは何か [P2]
- `/molecular-biology/dna-repair/` DNA修復とは何か [P2]
- `/molecular-biology/recombination/` 組換えとは何か [P2]

---

## 第3部 細胞生物学

URL:

```text
/cell-biology/
```

目的:

```text
分子が細胞内でどのように働き、細胞のふるまいにつながるかを理解する。
```

記事数目安:

```text
15〜20本
```

### 3-1 細胞の構造

- `/cell-biology/cell-membrane/` 細胞膜とは何か [P0]
- `/cell-biology/organelles/` 細胞小器官とは何か [P0]
- `/cell-biology/nucleus/` 核とは何か [P1]
- `/cell-biology/mitochondria/` ミトコンドリアとは何か [P1]
- `/cell-biology/endoplasmic-reticulum-golgi/` 小胞体・ゴルジ体とは何か [P1]
- `/cell-biology/lysosome/` リソソームとは何か [P2]
- `/cell-biology/cytoskeleton/` 細胞骨格とは何か [P1]

### 3-2 細胞膜・輸送・局在

- `/cell-biology/membrane-transport/` 膜輸送とは何か [P1]
- `/cell-biology/vesicle-trafficking/` 小胞輸送とは何か [P2]
- `/cell-biology/endocytosis-exocytosis/` エンドサイトーシスとエキソサイトーシス [P2]
- `/cell-biology/protein-localization/` タンパク質局在とは何か [P2]

### 3-3 細胞シグナル伝達

- `/cell-biology/cell-signaling/` 細胞シグナル伝達とは何か [P0]
- `/cell-biology/receptor/` 受容体とは何か [P1]
- `/cell-biology/phosphorylation/` リン酸化とは何か [P1]
- `/cell-biology/kinase/` キナーゼとは何か [P1]
- `/cell-biology/pathway/` シグナル伝達経路とは何か [P1]
- `/cell-biology/mapk-pathway/` MAPK経路とは何か [P2]
- `/cell-biology/pi3k-akt-pathway/` PI3K-AKT経路とは何か [P2]

### 3-4 細胞周期・細胞死・品質管理

- `/cell-biology/cell-cycle/` 細胞周期とは何か [P1]
- `/cell-biology/checkpoint/` チェックポイントとは何か [P2]
- `/cell-biology/apoptosis/` アポトーシスとは何か [P1]
- `/cell-biology/autophagy/` オートファジーとは何か [P2]
- `/cell-biology/senescence/` 細胞老化とは何か [P2]

### 3-5 分化・がん・免疫

- `/cell-biology/differentiation/` 細胞分化とは何か [P1]
- `/cell-biology/stem-cell/` 幹細胞とは何か [P1]
- `/cell-biology/cancer-cell/` がん細胞とは何か [P1]
- `/cell-biology/immune-cell/` 免疫細胞とは何か [P1]
- `/cell-biology/inflammation/` 炎症とは何か [P2]

---

## 第4部 ゲノミクス

URL:

```text
/genomics/
```

目的:

```text
ゲノム、変異、エピゲノム、疾患ゲノムを理解し、ゲノム論文の背景を読めるようにする。
```

記事数目安:

```text
15〜20本
```

### 4-1 ゲノムの基本

- `/genomics/reference-genome/` リファレンスゲノムとは何か [P1]
- `/genomics/genome-annotation/` ゲノムアノテーションとは何か [P1]
- `/genomics/genomic-coordinate/` ゲノム座標とは何か [P2]
- `/genomics/genome-browser/` ゲノムブラウザとは何か [P1]

関連する基礎記事:

- `/fundamentals/genome/`
- `/fundamentals/chromosome/`

### 4-2 変異・多型・バリアント

- `/genomics/variant/` variantとは何か [P1]
- `/genomics/snp-snv/` SNPとSNVの違い [P1]
- `/genomics/indel/` indelとは何か [P1]
- `/genomics/copy-number-variation/` コピー数変異とは何か [P1]
- `/genomics/structural-variant/` 構造多型とは何か [P2]
- `/genomics/somatic-germline-variant/` 体細胞変異と生殖細胞系列変異 [P1]
- `/genomics/variant-annotation/` variant annotationとは何か [P2]

### 4-3 疾患ゲノミクス

- `/genomics/gwas/` GWASとは何か [P1]
- `/genomics/polygenic-risk-score/` ポリジェニックリスクスコアとは何か [P2]
- `/genomics/rare-disease-genomics/` 希少疾患ゲノミクスとは何か [P2]
- `/genomics/cancer-genomics/` がんゲノミクスとは何か [P1]
- `/genomics/tumor-normal-comparison/` Tumor-normal比較とは何か [P2]

### 4-4 エピゲノム・機能ゲノミクス

- `/genomics/epigenome/` エピゲノムとは何か [P1]
- `/genomics/methylome/` メチロームとは何か [P2]
- `/genomics/chip-seq/` ChIP-seqとは何か [P1]
- `/genomics/atac-seq/` ATAC-seqとは何か [P1]
- `/genomics/three-dimensional-genome/` 3Dゲノムとは何か [P2]

### 4-5 オミクス全体像

- `/genomics/transcriptomics/` トランスクリプトミクスとは何か [P1]
- `/genomics/proteomics/` プロテオミクスとは何か [P2]
- `/genomics/metabolomics/` メタボロミクスとは何か [P2]
- `/genomics/multiomics/` マルチオミクスとは何か [P2]

---

## 第5部 実験手法

URL:

```text
/methods/
```

目的:

```text
論文Figureが何の実験結果なのかを理解できるようにする。
```

記事数目安:

```text
20〜25本
```

このカテゴリは、BioLearnを「論文が読める教材」にするうえで非常に重要。

### 5-1 サンプル・モデル・実験系

- `/methods/sample/` サンプルとは何か [P1]
- `/methods/control/` 対照群とは何か [P1]
- `/methods/cell-culture/` 細胞培養とは何か [P1]
- `/methods/model-organism/` モデル生物とは何か [P1]
- `/methods/animal-model/` 動物モデルとは何か [P2]
- `/methods/organoid/` オルガノイドとは何か [P2]
- `/methods/clinical-sample/` 臨床サンプルとは何か [P2]

### 5-2 核酸を測る実験

- `/methods/pcr/` PCRとは何か [P0]
- `/methods/rt-pcr/` RT-PCRとは何か [P1]
- `/methods/qpcr/` qPCRとは何か [P1]
- `/methods/rt-qpcr/` RT-qPCRとは何か [P1]
- `/methods/dna-extraction/` DNA抽出とは何か [P2]
- `/methods/rna-extraction/` RNA抽出とは何か [P1]
- `/methods/library-preparation/` ライブラリ調製とは何か [P1]
- `/methods/sequencing/` シーケンシングとは何か [P0]
- `/methods/ngs/` NGSとは何か [P0]

### 5-3 タンパク質・細胞を測る実験

- `/methods/western-blot/` Western blotとは何か [P1]
- `/methods/elisa/` ELISAとは何か [P2]
- `/methods/immunostaining/` 免疫染色とは何か [P1]
- `/methods/fluorescence-microscopy/` 蛍光顕微鏡とは何か [P1]
- `/methods/flow-cytometry/` フローサイトメトリーとは何か [P1]
- `/methods/facs/` FACSとは何か [P2]

### 5-4 遺伝子機能を調べる実験

- `/methods/knockout/` ノックアウトとは何か [P1]
- `/methods/knockdown/` ノックダウンとは何か [P1]
- `/methods/overexpression/` 過剰発現とは何か [P1]
- `/methods/crispr/` CRISPRとは何か [P1]
- `/methods/reporter-assay/` レポーターアッセイとは何か [P2]
- `/methods/screening/` スクリーニング実験とは何か [P2]

### 5-5 実験の品質とコントロール

- `/methods/positive-negative-control/` 陽性対照・陰性対照とは何か [P1]
- `/methods/loading-control/` ローディングコントロールとは何か [P1]
- `/methods/housekeeping-gene/` ハウスキーピング遺伝子とは何か [P1]
- `/methods/antibody-validation/` 抗体の検証とは何か [P2]
- `/methods/batch-effect/` バッチ効果とは何か [P1]

---

## 第6部 バイオインフォマティクス

URL:

```text
/bioinformatics/
```

目的:

```text
生命科学データ解析のFigureを読むために、データ形式・解析手順・結果の意味を理解する。
```

記事数目安:

```text
20〜25本
```

### 6-1 データ形式とデータベース

- `/bioinformatics/bioinformatics/` バイオインフォマティクスとは何か [P0]
- `/bioinformatics/fasta/` FASTAとは何か [P1]
- `/bioinformatics/fastq/` FASTQとは何か [P1]
- `/bioinformatics/sam-bam/` SAM/BAMとは何か [P1]
- `/bioinformatics/vcf/` VCFとは何か [P1]
- `/bioinformatics/metadata/` メタデータとは何か [P1]
- `/bioinformatics/gene-annotation/` 遺伝子アノテーションとは何か [P1]

### 6-2 シーケンスデータ処理

- `/bioinformatics/sequence-data/` シーケンスデータとは何か [P0]
- `/bioinformatics/read/` リードとは何か [P1]
- `/bioinformatics/quality-score/` quality scoreとは何か [P1]
- `/bioinformatics/trimming/` trimmingとは何か [P2]
- `/bioinformatics/mapping/` マッピングとは何か [P1]
- `/bioinformatics/alignment/` アライメントとは何か [P1]
- `/bioinformatics/assembly/` アセンブリとは何か [P2]
- `/bioinformatics/variant-calling/` variant callingとは何か [P1]

### 6-3 RNA-seqと発現解析

- `/bioinformatics/rna-seq/` RNA-seqとは何か [P0]
- `/bioinformatics/count-data/` カウントデータとは何か [P1]
- `/bioinformatics/normalization/` 正規化とは何か [P1]
- `/bioinformatics/differential-expression/` 差次的発現解析とは何か [P0]
- `/bioinformatics/multiple-testing/` 多重検定補正とは何か [P1]
- `/bioinformatics/pathway-enrichment/` pathway enrichmentとは何か [P1]
- `/bioinformatics/gsea/` GSEAとは何か [P1]

### 6-4 single-cell解析

- `/bioinformatics/single-cell-rna-seq/` single-cell RNA-seqとは何か [P1]
- `/bioinformatics/count-matrix/` カウント行列とは何か [P1]
- `/bioinformatics/single-cell-quality-control/` single-cell QCとは何か [P2]
- `/bioinformatics/dimensionality-reduction/` 次元削減とは何か [P1]
- `/bioinformatics/clustering/` クラスタリングとは何か [P1]
- `/bioinformatics/marker-gene/` マーカー遺伝子とは何か [P1]
- `/bioinformatics/umap/` UMAPとは何か [P1]
- `/bioinformatics/cell-type-annotation/` 細胞タイプ注釈とは何か [P2]

### 6-5 再現性と公共データ

- `/bioinformatics/public-dataset/` 公共データセットとは何か [P1]
- `/bioinformatics/reanalysis/` 論文データの再解析とは何か [P2]
- `/bioinformatics/workflow/` 解析ワークフローとは何か [P2]
- `/bioinformatics/notebook/` 解析ノートブックとは何か [P2]

---

## 第7部 統計・研究デザイン

URL:

```text
/statistics/
```

目的:

```text
FigureやMethodsに出てくる統計表示・実験設計を理解する。
```

記事数目安:

```text
10〜15本
```

### 7-1 統計の基本

- `/statistics/variable/` 変数とは何か [P1]
- `/statistics/distribution/` 分布とは何か [P1]
- `/statistics/mean-median/` 平均と中央値 [P1]
- `/statistics/standard-deviation-standard-error/` 標準偏差と標準誤差 [P1]
- `/statistics/confidence-interval/` 信頼区間とは何か [P1]

### 7-2 実験デザイン

- `/statistics/sample-size/` n数とは何か [P1]
- `/statistics/biological-technical-replicates/` 生物学的反復と技術的反復 [P1]
- `/statistics/control-group/` 対照群とは何か [P1]
- `/statistics/randomization/` ランダム化とは何か [P2]
- `/statistics/blinding/` ブラインド化とは何か [P2]
- `/statistics/batch-effect/` バッチ効果とは何か [P1]

### 7-3 推定・検定・解釈

- `/statistics/p-value/` p値とは何か [P1]
- `/statistics/effect-size/` 効果量とは何か [P1]
- `/statistics/multiple-testing-correction/` 多重検定補正とは何か [P1]
- `/statistics/correlation-causation/` 相関と因果の違い [P1]
- `/statistics/significance-vs-importance/` 統計的有意性と生物学的重要性 [P1]

### 7-4 論文を批判的に読むために

- `/statistics/bias/` バイアスとは何か [P1]
- `/statistics/confounding/` 交絡とは何か [P2]
- `/statistics/reproducibility/` 再現性とは何か [P1]
- `/statistics/limitations/` 研究の限界を読む [P2]

---

## 第8部 論文Figureの読み方

URL:

```text
/figures/
```

目的:

```text
生命科学論文のResultsに出てくる主要Figureを読めるようにする。
```

記事数目安:

```text
20〜30本
```

### 8-1 Figure読解の基本

- `/figures/figure-legend/` Figure legendの読み方 [P0]
- `/figures/panel/` パネルA/B/Cの読み方 [P1]
- `/figures/axis-label-unit/` 軸・ラベル・単位の読み方 [P1]
- `/figures/error-bars/` エラーバーの読み方 [P1]
- `/figures/p-values/` Figure中のp値の読み方 [P1]
- `/figures/supplementary-figures/` 補足Figureの読み方 [P2]
- `/figures/graphical-abstract/` Graphical abstractの読み方 [P2]

### 8-2 基本的なグラフ

- `/figures/how-to-read-bar-plot/` 棒グラフの読み方 [P0]
- `/figures/how-to-read-box-plot/` 箱ひげ図の読み方 [P1]
- `/figures/how-to-read-scatter-plot/` 散布図の読み方 [P1]
- `/figures/how-to-read-correlation-plot/` 相関図の読み方 [P1]
- `/figures/how-to-read-violin-plot/` Violin plotの読み方 [P1]

### 8-3 実験Figure

- `/figures/how-to-read-qpcr-plot/` qPCRグラフの読み方 [P0]
- `/figures/how-to-read-western-blot/` Western blotの読み方 [P0]
- `/figures/how-to-read-immunostaining/` 免疫染色画像の読み方 [P1]
- `/figures/how-to-read-microscopy-image/` 顕微鏡画像の読み方 [P1]
- `/figures/how-to-read-flow-cytometry/` フローサイトメトリーの読み方 [P1]

### 8-4 オミクスFigure

- `/figures/how-to-read-volcano-plot/` Volcano plotの読み方 [P0]
- `/figures/how-to-read-heatmap/` ヒートマップの読み方 [P0]
- `/figures/how-to-read-pca-plot/` PCAプロットの読み方 [P1]
- `/figures/how-to-read-umap-tsne/` UMAP / t-SNEの読み方 [P1]
- `/figures/how-to-read-gsea-plot/` GSEA plotの読み方 [P1]
- `/figures/how-to-read-pathway-enrichment/` pathway enrichment plotの読み方 [P1]
- `/figures/how-to-read-genome-browser/` ゲノムブラウザ図の読み方 [P2]
- `/figures/how-to-read-lollipop-plot/` 変異ロリポッププロットの読み方 [P2]
- `/figures/how-to-read-cnv-plot/` CNVプロットの読み方 [P2]

### 8-5 臨床・疾患関連Figure

- `/figures/how-to-read-kaplan-meier/` Kaplan-Meier曲線の読み方 [P1]
- `/figures/how-to-read-roc-curve/` ROC曲線の読み方 [P2]
- `/figures/how-to-read-forest-plot/` Forest plotの読み方 [P2]
- `/figures/how-to-read-patient-cohort-table/` 患者コホート表の読み方 [P2]

### 8-6 複数Figureをつなげて読む

- `/figures/figure-to-claim/` Figureと主張を対応づける [P1]
- `/figures/multi-panel-figure/` multi-panel Figureの読み方 [P1]
- `/figures/results-section-flow/` Resultsセクションの流れを読む [P1]

---

## 第9部 論文読解演習

URL:

```text
/papers/
```

目的:

```text
実際の生命科学論文を題材に、Abstract、Figure、Methods、Discussionを段階的に読む練習をする。
```

記事数目安:

```text
10〜20本
```

### 9-1 論文の構成を読む

- `/papers/paper-structure/` 生命科学論文の構成 [P0]
- `/papers/how-to-read-title-abstract/` TitleとAbstractの読み方 [P0]
- `/papers/how-to-read-introduction/` Introductionの読み方 [P1]
- `/papers/how-to-read-results/` Resultsの読み方 [P0]
- `/papers/how-to-read-methods/` Methodsの読み方 [P0]
- `/papers/how-to-read-discussion/` Discussionの読み方 [P1]
- `/papers/how-to-read-references/` Referencesの読み方 [P2]

### 9-2 論文を探す

- `/papers/pubmed/` PubMedの使い方 [P0]
- `/papers/pmc/` PMC論文の探し方 [P0]
- `/papers/doi/` DOIとは何か [P1]
- `/papers/review-vs-primary-paper/` レビュー論文と原著論文の違い [P1]
- `/papers/how-to-choose-paper/` 最初に読む論文の選び方 [P1]

### 9-3 論文読解の方法

- `/papers/first-pass-reading/` 論文を最初に読む手順 [P0]
- `/papers/figure-first-reading/` Figureから論文を読む方法 [P0]
- `/papers/methods-checklist/` Methods確認チェックリスト [P1]
- `/papers/critical-reading/` 論文を批判的に読む [P1]
- `/papers/note-taking/` 論文ノートの取り方 [P2]

### 9-4 論文読解演習

実際の論文を扱う場合は、オープンアクセスでライセンスが明確な論文を選ぶ。

- `/papers/walkthrough-rna-seq/` 論文読解演習: RNA-seq論文 [P1]
- `/papers/walkthrough-western-blot/` 論文読解演習: Western blotを含む論文 [P1]
- `/papers/walkthrough-immunostaining/` 論文読解演習: 免疫染色を含む論文 [P1]
- `/papers/walkthrough-single-cell/` 論文読解演習: single-cell RNA-seq論文 [P2]
- `/papers/walkthrough-cancer-genomics/` 論文読解演習: がんゲノム論文 [P2]
- `/papers/walkthrough-crispr/` 論文読解演習: CRISPR論文 [P2]

---

## 第10部 リファレンス

URL:

```text
/glossary/
/resources/
/about/
```

目的:

```text
学習中に参照する辞書・早見表・外部リソース・運営情報をまとめる。
```

### 10-1 用語集

- `/glossary/` 用語集トップ [P0]
- `/glossary/dna/` DNA [P0]
- `/glossary/rna/` RNA [P0]
- `/glossary/protein/` タンパク質 [P0]
- `/glossary/gene/` 遺伝子 [P0]
- `/glossary/genome/` ゲノム [P0]
- `/glossary/transcription/` 転写 [P0]
- `/glossary/translation/` 翻訳 [P0]
- `/glossary/rna-seq/` RNA-seq [P0]

最終的には100〜200語を想定する。

### 10-2 早見表

- `/resources/methods-cheatsheet/` 実験手法早見表 [P1]
- `/resources/figures-cheatsheet/` Figure早見表 [P1]
- `/resources/file-formats-cheatsheet/` 生命科学データ形式早見表 [P1]
- `/resources/statistics-cheatsheet/` 統計表示早見表 [P2]

### 10-3 外部リソース

- `/resources/` 外部学習リソース [P1]
- `/resources/databases/` 生命科学データベース一覧 [P1]
- `/resources/pubmed-pmc/` PubMed / PMC の使い方 [P0]
- `/resources/learning-materials/` さらに学ぶための教材 [P2]

### 10-4 サイト情報

- `/about/` BioLearnについて [P0]
- `/about/license/` ライセンス [P1]
- `/about/contributing/` コントリビューション方針 [P2]
- `/about/disclaimer/` 医療助言ではないこと [P1]

---

# 7. モジュール構造の設計ルール

## 7.1 カテゴリトップは必ず作る

各カテゴリトップには以下を入れる。

```text
- この分野で学ぶこと
- まず押さえる3つの考え方
- モジュール一覧
- 読む順番
- このカテゴリを終えるとできること
- 関連する用語
- 関連するFigure
- 次に進むカテゴリ
```

## 7.2 モジュールはカテゴリトップ内で見せる

サイドバーに全モジュール・全記事を並べるのではなく、カテゴリトップ内にモジュールを表示する。

例:

```text
分子生物学
  2-1 DNA・RNA・タンパク質を分子として理解する
  2-2 セントラルドグマ
  2-3 遺伝子発現制御
  2-4 クロマチンとエピジェネティクス
  2-5 DNA損傷・修復・組換え
```

## 7.3 個別記事には同じモジュールの記事を表示する

個別記事の末尾に以下を表示する。

```text
このモジュールの記事
関連する用語
次に読む記事
関連するFigure
Methodsでの出てき方
```

---

# 8. frontmatter設計

各記事には、将来的な自動一覧生成のためにメタデータを持たせる。

```yaml
---
title: DNAとは何か
description: DNAの役割、遺伝子・ゲノムとの違い、論文での出てき方を説明します。
part: fundamentals
module: genetic-information
level: foundation
priority: P0
order: 10
learningPaths:
  - foundations
  - figure-reading
relatedTerms:
  - dna
  - gene
  - genome
  - chromosome
prerequisites: []
next:
  - /fundamentals/rna/
---
```

推奨フィールド:

```text
part
module
level
priority
order
learningPaths
relatedTerms
prerequisites
next
```

---

# 9. 実装フェーズ

## Phase 1: 情報設計の固定

- `docs/PRODUCT_BRIEF.md` を更新
- `docs/INFORMATION_ARCHITECTURE.md` を更新
- 本文書を `docs/FINAL_CONTENT_MAP.md` として追加
- サイドバー方針を確定
- URL方針を確定

## Phase 2: URL再整理

公開前なので、URLをきれいに整理する。

- `/getting-started/` → `/start/`
- `/basics/` → `/fundamentals/`
- `/reading-figures/` → `/figures/`
- `what-is-*` 系を短いslugへ整理

## Phase 3: 主要入口ページ作成

- `/paths/`
- `/paths/foundations/`
- `/paths/figure-reading/`
- `/paths/paper-reading/`
- `/methods/`
- `/statistics/`
- `/papers/`
- `/about/`
- `/resources/`

## Phase 4: 既存記事の移動と内部リンク修正

- 既存記事を新URL構造へ移動
- 内部リンクを更新
- 用語集リンクを更新
- Figure記事リンクを更新

## Phase 5: カテゴリトップ強化

各カテゴリトップにモジュール構成を反映する。

## Phase 6: frontmatter整備

既存記事に `part`、`module`、`learningPaths`、`relatedTerms` などを追加する。

## Phase 7: 不足カテゴリの記事追加

優先順位:

```text
1. 実験手法
2. 統計・研究デザイン
3. Figure legend
4. 論文読解の基本
5. 論文読解演習
```

---

# 10. Codexへの推奨指示

```text
Repository:
https://github.com/ingcreators/biolearn-ai

Goal:
BioLearnを、最終的に生命科学論文を読めるようになるための日本語教材サイトとして拡張できるように、最終コンテンツ構成を明文化し、現在の情報設計に反映してください。

Context:
このタスクでは、添付またはリポジトリ内に追加する `biolearn-final-content-map-ja.md` を上位設計として扱ってください。

Tasks:
1. この文書を `docs/FINAL_CONTENT_MAP.md` として追加してください。
2. `docs/PRODUCT_BRIEF.md` と `docs/INFORMATION_ARCHITECTURE.md` がこの文書と矛盾しないように更新してください。
3. サイドバーを、全記事一覧ではなく主要入口型にしてください。
4. 公開前なので、URLを最終構成に合わせて整理してください。
5. `/start/`, `/fundamentals/`, `/figures/`, `/methods/`, `/statistics/`, `/papers/`, `/paths/`, `/about/`, `/resources/` の入口ページを整備してください。
6. 既存記事を新しいカテゴリに移動し、内部リンクを修正してください。
7. まだ本文が不足するカテゴリは、プレースホルダーのカテゴリトップだけ作成してください。
8. npm run build を実行し、エラーがあれば修正してください。

Completion criteria:
- `docs/FINAL_CONTENT_MAP.md` が追加されている
- 最終コンテンツ構成が明文化されている
- サイドバーが主要入口型になっている
- URL構成が最終設計に近づいている
- 既存記事へのリンクが壊れていない
- npm run build が成功する
```
