# BioLearn 構想・情報設計・実装方針まとめ

この文書は、BioLearn を「生命科学論文を読めるようになるための日本語教材サイト」として設計・実装していくための統合ブリーフです。Codex に計画立案・実装を依頼する際の参照ファイルとして使うことを想定しています。

最終的な部・モジュール・記事構成、優先度、URL一覧は [FINAL_CONTENT_MAP.md](./FINAL_CONTENT_MAP.md) を基準にする。この文書は目的、編集方針、情報設計、実装方針をまとめる上位ブリーフであり、個別記事の配置やslugに差分がある場合は `FINAL_CONTENT_MAP.md` に合わせて更新する。

---

## 1. プロジェクトの基本方針

### 1.1 サイト名

表示上の正式名称は **BioLearn** とする。

ドメインは引き続き以下を使う。

```text
biolearn.ai
```

ただし、サイト上のブランド名には **AI** を入れない。

理由は、現時点の主役がAI機能ではなく、**日本語で体系的に生命科学を学ぶ教材サイト**だからである。`BioLearn AI` とすると、読者が「AIチャットサービス」「AI論文解説ツール」「AIバイオ系プロダクト」を期待する可能性がある。

将来的にAI機能を追加する場合は、サイト名ではなく機能名として使う。

```text
サイト名: BioLearn
将来のAI機能名: BioLearn Tutor / BioLearn AI Tutor / 論文読解AIアシスタント
```

### 1.2 ドメイン・リポジトリ

```text
Domain:
biolearn.ai

GitHub organization:
ingcreators

Repository:
ingcreators/biolearn-ai
```

リポジトリ名は `biolearn-ai` のままでよい。これは開発上の識別子であり、表示ブランド名と完全一致している必要はない。

---

## 2. BioLearnの最終ゴール

BioLearnは、単なる生命科学用語解説サイトではなく、最終的には次を実現する教材サイトにする。

> 日本語で生命科学を基礎から学び、最終的に生命科学論文を読めるようになるための体系的な学習サイト。

ここでいう「論文を読める」とは、次のレベルを指す。

```text
1. Abstractで研究の問いと結論をつかめる
2. Introductionで背景用語を追える
3. ResultsでFigureの主張を読める
4. Methodsで実験・解析の大意を確認できる
5. Discussionで主張と限界を分けて読める
6. PubMed / PMC などで関連論文を探せる
7. Figure・実験条件・統計表示を批判的に読める
```

BioLearnの中心価値は以下の流れを日本語で体系化することにある。

```text
生命科学の基礎
  → 実験手法
  → データ解析
  → 論文Figure
  → 論文読解
```

---

## 3. 対象読者

BioLearnの主な対象読者は以下。

```text
- 高校生物を学び直したい社会人
- 医療・ヘルスケア・創薬領域に関心がある人
- 情報系エンジニアで生命科学に入門したい人
- バイオインフォマティクスを学びたい初学者
- 生命科学論文を読めるようになりたい人
- AI創薬・バイオ×AI領域に入門したい人
```

専門家だけを対象にしない。初学者にも読みやすくしつつ、専門的に不正確にならない教材にする。

---

## 4. 教材としての編集方針

BioLearnは、ブログではなく **教材サイト** として設計する。

### 4.1 基本方針

```text
- 日本語で自然に説明する
- 英語名・略語をできるだけ併記する
- 図解と用語整理を重視する
- 実験とデータ解析をつなぐ
- FigureとMethodsを読む力につなげる
- 医療助言ではなく学習教材として書く
- 用語を孤立させず、概念同士の関係を説明する
- 記事末尾から次の学習へ自然に進める
```

### 4.2 避けること

```text
- 医療上の診断・治療助言に見える表現
- 著作権不明の論文画像・外部画像の使用
- 専門用語だけを並べた説明
- 断片的なブログ記事の集合
- サイドバーに全記事を並べる巨大目次
- 数値固定のコース名
```

---

## 5. 技術構成

現時点の技術構成は以下を前提にする。

```text
Astro
Starlight
MDX
TypeScript
Cloudflare Pages
GitHub Actions
```

### 5.1 リポジトリ運用

```text
Repository visibility:
Public

Code license:
MIT License

Educational content / articles / diagrams / figures:
CC BY-NC-SA 4.0
```

教材本文・図解・記事とコードはライセンスを分ける。

```text
LICENSE              → コード用 MIT
LICENSE-CONTENT.md   → 教材・図解用 CC BY-NC-SA 4.0
```

---

## 6. 最終的なコンテンツ規模

最終的には、次の程度の規模を想定する。

```text
本文記事: 120〜160本程度
用語集: 100〜200語程度
Figure読み方記事: 20〜30本程度
論文読解演習: 10〜20本程度
```

ただし、この数値は **内部的な目安** として扱う。公開サイトのコース名やURLには数値を入れない。

避けるべき名称。

```text
Core 30
Figure 80
Paper 160
```

理由は、記事数が増えたときに名称やURLが破綻するため。

代わりに、目的ベースの名前にする。

```text
基礎から学ぶ
Figureを読めるようになる
論文を読めるようになる
```

---

## 7. 最終的な情報設計

現在はまだ公開前なので、URL変更してよい。今のうちに最終形を見据えてURLとサイドバーをきれいに整理する。

### 7.1 基本思想

BioLearnでは、以下の3種類の導線を明確に分ける。

```text
ラーニングパス = 目的別に順番に学ぶ
分野別カテゴリ = 必要な記事を分野から探す
用語集 = 辞書的に調べる
```

これを分けないと、記事が120〜160本に増えたときに破綻する。

---

## 8. 推奨URL設計

### 8.1 トップレベル

```text
/
  トップページ

/start/
  はじめに

/roadmap/
  学習ロードマップ

/paths/
  ラーニングパス一覧

/paths/foundations/
  基礎から学ぶ

/paths/figure-reading/
  Figureを読めるようになる

/paths/paper-reading/
  論文を読めるようになる

/fundamentals/
  生命科学の基礎

/molecular-biology/
  分子生物学

/cell-biology/
  細胞生物学

/genomics/
  ゲノミクス

/methods/
  実験手法

/bioinformatics/
  バイオインフォマティクス

/statistics/
  統計・研究デザイン

/figures/
  論文Figureの読み方

/papers/
  論文読解演習

/glossary/
  用語集

/resources/
  外部学習リソース

/about/
  BioLearnについて
```

### 8.2 現在のURLからの整理案

公開前なので、URLはきれいに変更してよい。

#### `getting-started` 系

```text
/getting-started/
```

は、以下へ変更。

```text
/start/
```

#### `basics` 系

```text
/basics/
```

は、以下へ変更。

```text
/fundamentals/
```

#### `reading-figures` 系

```text
/reading-figures/
```

は、以下へ変更。

```text
/figures/
```

#### `what-is-*` 系

公開前なので、できればURLから `what-is-` を外して短くする。

例：

```text
/fundamentals/dna/
```

よりも、

```text
/fundamentals/dna/
```

の方がきれい。

DNA、RNA、タンパク質、遺伝子、ゲノムは、初学者が最初に読む基礎なので `/fundamentals/` に置く方がよい。

推奨例：

```text
/fundamentals/life-science/
/fundamentals/cell/
/fundamentals/dna/
/fundamentals/rna/
/fundamentals/protein/
/fundamentals/gene/
/fundamentals/genome/
/fundamentals/chromosome/
/fundamentals/mutation/

/molecular-biology/central-dogma/
/molecular-biology/transcription/
/molecular-biology/translation/
/fundamentals/gene-expression/

/cell-biology/cell-membrane/
/cell-biology/organelles/
/cell-biology/cell-signaling/

/bioinformatics/rna-seq/
/bioinformatics/sequence-data/
/bioinformatics/differential-expression/

/figures/how-to-read-bar-plot/
/figures/how-to-read-qpcr-plot/
/figures/how-to-read-western-blot/
/figures/how-to-read-volcano-plot/
/figures/how-to-read-heatmap/
```

詳細な記事一覧と優先度は `FINAL_CONTENT_MAP.md` を参照する。

---

## 9. サイドバー設計

### 9.1 重要な方針

120〜160本規模を見据えると、**サイドバーに全記事を並べてはいけない**。

サイドバーは以下の方針にする。

```text
主要入口だけを出す
```

全記事一覧は、各カテゴリトップやラーニングパスページに持たせる。

### 9.2 推奨サイドバー

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

ここで重要なのは、**記事単位ではなくカテゴリ単位で表示する**こと。

### 9.3 各カテゴリトップの役割

サイドバーに全記事を出さない代わりに、カテゴリトップをしっかり作る。

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

---

## 10. ラーニングパス設計

数値入りのコース名は使わない。以下の3つを正式なラーニングパスにする。

### 10.1 基礎から学ぶ

URL:

```text
/paths/foundations/
```

目的:

```text
生命科学の基本概念を、細胞・DNA・RNA・タンパク質・遺伝子・ゲノムから順に学ぶ。
```

対象:

```text
- 高校生物を学び直したい人
- 生命科学の用語が曖昧な人
- 医療・創薬・バイオ領域に入門したい人
```

含める内容:

```text
生命科学
細胞
DNA
RNA
タンパク質
遺伝子
ゲノム
染色体
セントラルドグマ
転写
翻訳
遺伝子発現
```

### 10.2 Figureを読めるようになる

URL:

```text
/paths/figure-reading/
```

目的:

```text
論文のResultsに出てくる主要なFigureを読めるようになる。
```

対象:

```text
- 論文の図を見ても何を示しているかわからない人
- qPCR、Western blot、RNA-seqなどの図を読みたい人
- バイオインフォマティクス結果を解釈したい人
```

含める内容:

```text
棒グラフ
qPCRグラフ
Western blot
ヒートマップ
Volcano plot
Figure legend
顕微鏡画像
UMAP / t-SNE
GSEA plot
Kaplan-Meier曲線
```

### 10.3 論文を読めるようになる

URL:

```text
/paths/paper-reading/
```

目的:

```text
生命科学論文を、Abstract、Results、Methods、Discussionまで読めるようになる。
```

対象:

```text
- 論文を読み始めたい人
- ResultsとFigureを対応づけたい人
- Methodsの大意を追いたい人
- 主張と限界を批判的に読みたい人
```

含める内容:

```text
論文の構成
Abstractの読み方
Introductionの読み方
Resultsの読み方
Methodsの読み方
Figure legendの読み方
Discussionの読み方
PubMed / PMC の使い方
論文読解演習
```

---

## 11. 最終カテゴリ構成

### 11.1 生命科学の基礎

URL:

```text
/fundamentals/
```

記事数目安:

```text
10〜15本
```

目的:

```text
生命科学論文を読むための最小限の地図を作る。
```

代表記事:

```text
生命科学とは何か
細胞とは何か
DNAとは何か
RNAとは何か
タンパク質とは何か
遺伝子とは何か
ゲノムとは何か
染色体とは何か
変異とは何か
遺伝子発現とは何か
```

### 11.2 分子生物学

URL:

```text
/molecular-biology/
```

記事数目安:

```text
20〜25本
```

目的:

```text
DNA、RNA、タンパク質、遺伝子発現制御を理解し、分子レベルの論文を読めるようにする。
```

代表記事:

```text
セントラルドグマとは何か
DNA複製とは何か
DNA修復とは何か
転写とは何か
翻訳とは何か
遺伝子発現とは何か
プロモーターとは何か
エンハンサーとは何か
転写因子とは何か
スプライシングとは何か
翻訳後修飾とは何か
クロマチンとは何か
エピジェネティクスとは何か
DNAメチル化とは何か
ヒストン修飾とは何か
```

### 11.3 細胞生物学

URL:

```text
/cell-biology/
```

記事数目安:

```text
15〜20本
```

目的:

```text
分子が細胞の中でどのように働くかを理解する。
```

代表記事:

```text
細胞膜とは何か
細胞小器官とは何か
核とは何か
ミトコンドリアとは何か
小胞体・ゴルジ体とは何か
細胞骨格とは何か
受容体とは何か
細胞シグナル伝達とは何か
リン酸化とは何か
細胞周期とは何か
アポトーシスとは何か
オートファジーとは何か
細胞分化とは何か
幹細胞とは何か
がん細胞とは何か
免疫細胞とは何か
```

### 11.4 ゲノミクス

URL:

```text
/genomics/
```

記事数目安:

```text
15〜20本
```

目的:

```text
ゲノム、変異、エピゲノム、疾患ゲノムを理解する。
```

代表記事:

```text
ゲノムとは何か
染色体とは何か
リファレンスゲノムとは何か
バリアントとは何か
SNPとSNVの違い
indelとは何か
コピー数変異とは何か
GWASとは何か
がんゲノムとは何か
エピゲノムとは何か
メチル化解析とは何か
ChIP-seqとは何か
ATAC-seqとは何か
```

### 11.5 実験手法

URL:

```text
/methods/
```

記事数目安:

```text
20〜25本
```

目的:

```text
論文Figureが何の実験結果なのかを理解できるようにする。
```

代表記事:

```text
PCRとは何か
qPCRとは何か
RT-qPCRとは何か
Western blotとは何か
ELISAとは何か
免疫染色とは何か
蛍光顕微鏡とは何か
フローサイトメトリーとは何か
FACSとは何か
RNA抽出とは何か
ライブラリ調製とは何か
NGSとは何か
CRISPRとは何か
ノックアウトとは何か
ノックダウンとは何か
レポーターアッセイとは何か
細胞培養とは何か
動物モデルとは何か
オルガノイドとは何か
```

このカテゴリは、論文読解サイトとして非常に重要。現在のBioLearnにはまだ独立カテゴリとして弱いので、早めに新設する。

### 11.6 バイオインフォマティクス

URL:

```text
/bioinformatics/
```

記事数目安:

```text
20〜25本
```

目的:

```text
生命科学データ解析のFigureを読むために、データ形式・解析手順・結果の意味を理解する。
```

代表記事:

```text
バイオインフォマティクスとは何か
FASTAとは何か
FASTQとは何か
BAM/SAMとは何か
VCFとは何か
リードとは何か
マッピングとは何か
アセンブリとは何か
カウントデータとは何か
正規化とは何か
RNA-seqとは何か
差次的発現解析とは何か
多重検定補正とは何か
pathway enrichmentとは何か
GSEAとは何か
single-cell RNA-seqとは何か
UMAPとは何か
クラスタリングとは何か
マーカー遺伝子とは何か
公共データベースとは何か
```

### 11.7 統計・研究デザイン

URL:

```text
/statistics/
```

記事数目安:

```text
10〜15本
```

目的:

```text
FigureやMethodsに出てくる統計表示・実験設計を理解する。
```

代表記事:

```text
n数とは何か
生物学的反復と技術的反復の違い
平均・中央値・分散とは何か
標準偏差と標準誤差の違い
エラーバーの読み方
p値とは何か
信頼区間とは何か
多重検定補正とは何か
対照群とは何か
ランダム化とは何か
バイアスとは何か
相関と因果の違い
```

### 11.8 論文Figureの読み方

URL:

```text
/figures/
```

記事数目安:

```text
20〜30本
```

目的:

```text
生命科学論文のResultsに出てくる主要Figureを読めるようにする。
```

既存記事として残すもの:

```text
棒グラフの読み方
qPCRグラフの読み方
Western blotの読み方
Volcano plotの読み方
ヒートマップの読み方
```

追加したい記事:

```text
Figure legendの読み方
顕微鏡画像の読み方
免疫染色画像の読み方
フローサイトメトリーの読み方
箱ひげ図の読み方
散布図の読み方
相関図の読み方
Kaplan-Meier曲線の読み方
ROC曲線の読み方
Violin plotの読み方
UMAP / t-SNEの読み方
single-cell RNA-seq Figureの読み方
pathway enrichment plotの読み方
GSEA plotの読み方
ゲノムブラウザ図の読み方
変異ロリポッププロットの読み方
CNVプロットの読み方
補足Figureの読み方
Graphical abstractの読み方
```

### 11.9 論文読解演習

URL:

```text
/papers/
```

記事数目安:

```text
10〜20本
```

目的:

```text
実際の生命科学論文を題材に、Abstract、Figure、Methods、Discussionを段階的に読む練習をする。
```

代表記事:

```text
生命科学論文の構成
Abstractの読み方
Introductionの読み方
Resultsの読み方
Methodsの読み方
Discussionの読み方
Figure legendの読み方
PubMedの使い方
PMC論文の探し方
論文読解演習: RNA-seq論文
論文読解演習: Western blotを含む論文
論文読解演習: single-cell RNA-seq論文
論文読解演習: がんゲノム論文
論文読解演習: CRISPR論文
```

---

## 12. 用語集設計

URL:

```text
/glossary/
```

最終語数:

```text
100〜200語
```

用語集は、単なる一覧ではなく **学習ハブ** として扱う。

各用語ページには以下を入れる。

```text
- 日本語名
- 英語名
- 略語
- まず一言でいうと
- もう少し詳しく
- なぜ重要か
- よく混同される用語
- 関連する用語
- 関連する教材ページ
- 次に読む記事
```

用語集トップはカテゴリ別に整理する。

```text
基礎概念
分子生物学
細胞生物学
ゲノミクス
実験手法
バイオインフォマティクス
統計・研究デザイン
論文Figure
```

重要語は個別ページを持つ。補助的な語は、最初は一覧内の短い説明だけでもよい。

---

## 13. 記事テンプレート

各記事は、単なる説明ではなく、論文読解につながる形にする。

基礎概念記事の標準テンプレート:

```text
title
description

# タイトル

## この記事で学ぶこと

見出しなしの「とは何か」説明

LessonFigure

## なぜ{概念名}の視点が重要か

## どんな{概念名}があるか / どんな種類があるか

## {概念名}はどう調べるか / どう観察・測定するか

## {概念名}の変化は何につながるか

## 論文や実験ではどう出てくるか

## どんな点でつまずきやすいか

## 重要用語

## 確認問題

## 次に読む記事
```

本文内にはページタイトルと同じ `## {概念名}とは何か` 見出しを作らない。`LearningGoals` の直後に、見出しなしで2段落・合計2〜4文程度の「とは何か」説明を置き、その直後に `LessonFigure` を置く。

`英語表記と略語` は独立節にせず、`重要用語` の `GlossaryTable` に統合する。本文中の用語集リンクは、用語集ページがある語を通常本文で初めて登場した箇所だけに付ける。ただし、記事タイトルと同じ中心語は本文中で無理に自己リンクせず、`GlossaryTable` で接続する。`NextSteps` は次に読むレッスン記事だけに絞る。

すべての記事に全項目を必ず入れる必要はないが、最終的には次のセクションを重視する。

```text
なぜ{概念名}の視点が重要か
論文や実験ではどう出てくるか
どんな点でつまずきやすいか
```

これにより、BioLearnは単なる生命科学入門ではなく、論文読解に直結する教材になる。

---

## 14. frontmatter設計

将来的に記事数が増えるため、frontmatterでメタデータ管理する。

推奨frontmatter:

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

Astro Starlight では `next` がページネーション設定として使われるため、実装上は衝突しない名前（例: `nextLessons`）または既存の `NextSteps` コンポーネントで管理する。設計上の推奨フィールドとしての `next` は `FINAL_CONTENT_MAP.md` の考え方を参照する。

主なフィールド:

```text
part
  大カテゴリ

module
  カテゴリ内の小単元

level
  foundation / intermediate / advanced など

order
  カテゴリ内の表示順

learningPaths
  どのラーニングパスに含まれるか

relatedTerms
  用語集との接続

prerequisites
  前提記事

next
  次に読む記事
```

この設計により、以下を自動生成しやすくする。

```text
カテゴリ内の記事一覧
モジュール内の記事一覧
ラーニングパス別の記事一覧
関連用語
次に読む記事
```

---

## 15. コンポーネント設計

既存の教材コンポーネントに加えて、次を整備する。

### 15.1 教材用コンポーネント

```text
LearningGoals
Quiz
NextSteps
GlossaryTable
LessonFigure
RelatedTerms
ModuleNav
LearningPathCard
ArticleList
```

### 15.2 論文読解用コンポーネント

```text
FigureReadingChecklist
PaperReadingChecklist
MethodBox
StatNote
CommonPitfall
EvidenceQuestion
```

### 15.3 図解コンポーネント

```text
CentralDogmaDiagram
GenomeGeneChromosomeDiagram
PcrWorkflowDiagram
RnaSeqWorkflowDiagram
DifferentialExpressionWorkflowDiagram
VolcanoPlotExample
HeatmapExample
QpcrPlotExample
WesternBlotExample
FigureLegendExample
```

外部の論文画像は使わず、原則としてオリジナルのSVG / HTML / CSS図解を使う。

---

## 16. トップページ方針

トップページでは、BioLearnのゴールを明確にする。

推奨コピー:

```text
BioLearn
生命科学を、論文が読めるところまで。

分子生物学・細胞生物学・ゲノミクス・バイオインフォマティクスを日本語で体系的に学び、最終的に生命科学論文のFigureとMethodsを読めるようになるための教材サイトです。
```

トップページの主要導線:

```text
1. はじめに
2. 学習ロードマップ
3. 基礎から学ぶ
4. Figureを読めるようになる
5. 論文を読めるようになる
6. 用語集
```

---

## 17. Aboutページ方針

`/about/` を作る。

含める内容:

```text
BioLearnとは
対象読者
扱う範囲
医療上の診断・治療助言ではないこと
運営元 ingcreators
GitHubリポジトリ
ライセンス方針
既存のBiolearn関連プロジェクトとは無関係であること
```

---

## 18. 品質管理

Codexで継続開発するため、以下を整備する。

```text
Prettier
npm run format
npm run format:check
npm run check
npm run build
GitHub Actions
```

GitHub Actionsでは最低限以下を実行する。

```text
npm install
npm run build
npm run format:check
```

必要に応じてリンクチェックも追加する。

---

## 19. AGENTS.md方針

`AGENTS.md` には以下を明記する。

```text
- BioLearnは日本語の生命科学論文読解教材サイトである
- 表示ブランド名は BioLearn
- ドメインは biolearn.ai
- リポジトリ名は biolearn-ai
- Astro + Starlight + MDXを使う
- ユーザー向け本文は日本語
- ファイル名とURL slugは英語小文字kebab-case
- 医療助言を避ける
- 専門的正確性を重視する
- 外部著作権画像を使わない
- npm run buildを必ず実行する
- 可能ならformat:checkも実行する
```

---

## 20. Codexに最初に依頼するべき計画タスク

まずCodexには、いきなり全実装ではなく、**情報設計とURL再構成の計画**を作らせるのがよい。

```text
Repository:
https://github.com/ingcreators/biolearn-ai

Goal:
BioLearnを、最終的に生命科学論文を読めるようになるための日本語教材サイトとして再設計してください。
まだ正式公開前なので、既存URLは変更して構いません。
将来的に120〜160本規模の記事に拡張しても破綻しないように、情報設計・URL設計・サイドバー設計を整理してください。

Background:
BioLearnは、分子生物学・細胞生物学・ゲノミクス・バイオインフォマティクスを日本語で体系的に学び、最終的に生命科学論文のFigure、Methods、Resultsを読めるようになるための教材サイトです。
単なるブログや用語集ではなく、学習ロードマップ、ラーニングパス、分野別カテゴリ、用語集、論文Figure読解、論文読解演習を持つ教材サイトにします。

Brand:
- Site name: BioLearn
- Domain: biolearn.ai
- Repository: biolearn-ai
- Organization: ingcreators
- Do not use "BioLearn AI" as the public site name.
- AI may be used later as a feature name, but not as the main brand.

Important:
Do not use numeric course names such as Core 30, Figure 80, or Paper 160.
Use purpose-based learning path names instead.

Learning paths:
- 基礎から学ぶ
- Figureを読めるようになる
- 論文を読めるようになる

Preferred learning path URLs:
- /paths/foundations/
- /paths/figure-reading/
- /paths/paper-reading/

Final top-level categories:
- /start/
- /roadmap/
- /paths/
- /fundamentals/
- /molecular-biology/
- /cell-biology/
- /genomics/
- /methods/
- /bioinformatics/
- /statistics/
- /figures/
- /papers/
- /glossary/
- /resources/
- /about/

Tasks:
1. Create or update docs/INFORMATION_ARCHITECTURE.md.
2. Define the final site structure, URL structure, sidebar policy, learning paths, and content model.
3. Refactor the existing sidebar so it shows major entry points, not all articles.
4. Rename or move existing routes to the cleaner final URL structure.
5. Since the site is not publicly launched yet, URL changes are allowed.
6. Keep the content that already exists, but move it into the new structure where appropriate.
7. Create placeholder top pages for categories that do not yet have content:
   - /methods/
   - /statistics/
   - /papers/
   - /paths/
   - /paths/foundations/
   - /paths/figure-reading/
   - /paths/paper-reading/
   - /about/
8. Update internal links after moving pages.
9. Ensure the public brand name is BioLearn, not BioLearn AI.
10. Run npm run build and fix any errors.

Sidebar policy:
The sidebar should not list all articles.
It should use this structure:

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

Content principles:
- User-facing content must be Japanese.
- File names and URL slugs should be lowercase kebab-case English.
- Avoid medical diagnosis or treatment advice.
- Do not use external copyrighted images.
- Keep the site static-first.
- Use Astro + Starlight + MDX.
- Keep existing educational content where possible.
- Improve internal links after route changes.

Completion criteria:
- docs/INFORMATION_ARCHITECTURE.md exists and explains the final design.
- Public site name is BioLearn.
- URLs are cleaned up according to the new structure.
- Sidebar uses major entry points, not a full article list.
- Existing pages are moved or linked correctly.
- New placeholder category/path pages exist.
- npm run build succeeds.
```

---

## 21. 実装フェーズ案

Codexでは、一度に全部作らせず、以下のフェーズに分ける。

### Phase 1：情報設計・URL整理

```text
docs/INFORMATION_ARCHITECTURE.md
サイドバー再設計
URL再配置
カテゴリトップのプレースホルダー作成
内部リンク修正
```

### Phase 2：カテゴリトップ強化

```text
/fundamentals/
/molecular-biology/
/cell-biology/
/genomics/
/methods/
/bioinformatics/
/statistics/
/figures/
/papers/
```

各カテゴリトップを「入口ページ」として厚くする。

### Phase 3：ラーニングパス整備

```text
/paths/foundations/
/paths/figure-reading/
/paths/paper-reading/
```

目的別に読む順番を提示する。

### Phase 4：記事テンプレートとfrontmatter整備

```text
全記事にpart / module / level / order / learningPaths / relatedTermsを追加
次に読む記事・関連用語を整理
```

### Phase 5：実験手法カテゴリを追加

最優先で追加。

```text
qPCR
RT-qPCR
Western blot
免疫染色
フローサイトメトリー
NGS
CRISPR
細胞培養
```

### Phase 6：統計・研究デザインカテゴリを追加

```text
n数
生物学的反復
エラーバー
p値
多重検定補正
対照群
相関と因果
```

### Phase 7：Figureカテゴリ拡充

```text
Figure legend
顕微鏡画像
フローサイトメトリー
UMAP
GSEA
Kaplan-Meier
```

### Phase 8：論文読解演習

```text
論文の構成
Abstractの読み方
Resultsの読み方
Methodsの読み方
PMC論文を使った演習
```

---

## 22. 直近で最も重要な判断

今やるべきことは、記事を増やすことよりも先に、**最終形に耐える情報設計へ切り替えること**。

特に重要なのは以下。

```text
1. BioLearnというブランド名に統一
2. URLを公開前にきれいに整理
3. サイドバーを全記事一覧から主要入口型へ変更
4. ラーニングパスと分野別カテゴリを分ける
5. 実験手法・統計・論文読解演習を正式カテゴリに追加
6. 数値入りコース名を使わない
7. 最終ゴールを「生命科学論文を読めるようになる」に置く
```

---

## 23. 最終的なBioLearnの一文説明

最終的には、BioLearnをこう説明できるようにする。

```text
BioLearnは、分子生物学・細胞生物学・ゲノミクス・バイオインフォマティクスを日本語で体系的に学び、最終的に生命科学論文のFigure、Methods、Resultsを読めるようになるための教材サイトです。
```

トップページ用の短いコピーなら、以下がよい。

```text
生命科学を、論文が読めるところまで。
```
