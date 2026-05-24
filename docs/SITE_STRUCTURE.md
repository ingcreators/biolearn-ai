# Site structure

## Categories

- はじめに: サイトの使い方と生命科学の全体像
- 生命科学の基礎: 細胞や生命現象の基本単位
- 分子生物学: DNA、RNA、タンパク質、遺伝子、セントラルドグマ、遺伝子発現
- 細胞生物学: 細胞構造、細胞小器官、細胞周期など
- ゲノミクス: ゲノム、変異、ゲノム解析
- 実験手法: PCR、qPCR、Western blotなど
- バイオインフォマティクス: 生命科学データ解析、RNA-seqなど
- 統計・研究デザイン: ばらつき、p値、反復、対照群など
- 論文Figureの読み方: 図表、画像、解析結果の読み方
- 論文読解演習: Methods、Results、Figureを行き来する練習
- 用語集: 日本語、英語、略語、説明

## Initial lessons

- `/start/what-is-life-science/`
- `/fundamentals/what-is-a-cell/`
- `/molecular-biology/what-is-dna/`
- `/molecular-biology/what-is-rna/`
- `/molecular-biology/what-is-protein/`
- `/molecular-biology/what-is-gene/`
- `/genomics/what-is-genome/`
- `/molecular-biology/what-is-central-dogma/`
- `/methods/what-is-pcr/`
- `/bioinformatics/what-is-rna-seq/`

## File rules

- Use lowercase kebab-case for file names and URL slugs.
- Keep Japanese display titles in frontmatter.
- Put MDX lessons under `src/content/docs`.
- Prefer relative imports from MDX to `src/components`.
