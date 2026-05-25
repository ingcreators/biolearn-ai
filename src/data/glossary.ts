export interface GlossaryTerm {
  term: string;
  english?: string;
  abbreviation?: string;
  description: string;
  href: string;
  category: GlossaryCategory;
}

export type GlossaryCategory =
  | 'foundations'
  | 'molecular-biology'
  | 'cell-biology'
  | 'genomics'
  | 'methods-and-analysis'
  | 'statistics-and-design'
  | 'paper-reading';

export const glossaryCategories: {
  id: GlossaryCategory;
  label: string;
  description: string;
}[] = [
  {
    id: 'foundations',
    label: '生命科学の基礎',
    description: '細胞、生命科学、基本分子など、最初に押さえる用語。',
  },
  {
    id: 'molecular-biology',
    label: '分子生物学',
    description:
      '遺伝情報の流れ、遺伝子発現、DNA・RNA・タンパク質に関わる用語。',
  },
  {
    id: 'cell-biology',
    label: '細胞生物学',
    description:
      '細胞内構造、膜、シグナル伝達など、細胞の働きを読むための用語。',
  },
  {
    id: 'genomics',
    label: 'ゲノミクス',
    description: 'ゲノム、染色体、変異、配列の違いを読むための用語。',
  },
  {
    id: 'methods-and-analysis',
    label: '実験手法・解析',
    description:
      'PCR、シーケンシング、RNA-seq、バイオインフォマティクス解析の用語。',
  },
  {
    id: 'statistics-and-design',
    label: '統計・研究デザイン',
    description:
      'p値、効果量、n数、対照群、相関と因果、バイアス、交絡、再現性など、Figureと論文の主張の強さを読むための用語。',
  },
  {
    id: 'paper-reading',
    label: '論文読解',
    description:
      'Title、Abstract、Methods、Results、Discussion、Referencesなど、論文の構造と読み方に関わる用語。',
  },
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: '生命科学',
    english: 'life science',
    description: '生命現象を分子、細胞、個体、集団などの階層で理解する分野。',
    href: '/glossary/life-science/',
    category: 'foundations',
  },
  {
    term: '細胞',
    english: 'cell',
    description: '生物の構造と働きの基本単位。',
    href: '/glossary/cell/',
    category: 'foundations',
  },
  {
    term: '分子',
    english: 'molecule',
    description: '原子が結びついてできた物質のまとまり。',
    href: '/glossary/molecule/',
    category: 'foundations',
  },
  {
    term: '個体',
    english: 'organism',
    description: '1つの生物としてのまとまり。',
    href: '/glossary/organism/',
    category: 'foundations',
  },
  {
    term: '組織',
    english: 'tissue',
    description: '似た働きや構造を持つ細胞が集まったまとまり。',
    href: '/glossary/tissue/',
    category: 'foundations',
  },
  {
    term: 'DNA',
    english: 'deoxyribonucleic acid',
    abbreviation: 'DNA',
    description: '遺伝情報を長期的に保存する分子。',
    href: '/glossary/dna/',
    category: 'molecular-biology',
  },
  {
    term: 'RNA',
    english: 'ribonucleic acid',
    abbreviation: 'RNA',
    description: '遺伝情報の読み出しや調節に関わる分子。',
    href: '/glossary/rna/',
    category: 'molecular-biology',
  },
  {
    term: '核酸',
    english: 'nucleic acid',
    description: 'DNAやRNAのように、ヌクレオチドが連なってできた情報分子。',
    href: '/glossary/nucleic-acids/',
    category: 'molecular-biology',
  },
  {
    term: 'ヌクレオチド',
    english: 'nucleotide',
    description: '塩基、糖、リン酸からなる、DNAやRNAなど核酸の構成単位。',
    href: '/glossary/nucleotide/',
    category: 'molecular-biology',
  },
  {
    term: '塩基対',
    english: 'base pair',
    abbreviation: 'bp',
    description:
      '相補的に対応する2つの塩基の組。DNAの長さの単位としても使われる。',
    href: '/glossary/base-pairing/',
    category: 'molecular-biology',
  },
  {
    term: 'タンパク質',
    english: 'protein',
    description: '細胞内外で構造、反応、輸送、情報伝達などを担う分子。',
    href: '/glossary/protein/',
    category: 'foundations',
  },
  {
    term: 'アミノ酸',
    english: 'amino acid',
    description: 'タンパク質を構成する基本単位。',
    href: '/glossary/amino-acid/',
    category: 'molecular-biology',
  },
  {
    term: 'タンパク質構造',
    english: 'protein structure',
    description:
      'アミノ酸の鎖が折りたたまれてできる、タンパク質の三次元的な形。',
    href: '/glossary/protein-structure/',
    category: 'molecular-biology',
  },
  {
    term: '酵素',
    english: 'enzyme',
    description: '化学反応を進みやすくする触媒として働く分子。',
    href: '/glossary/enzyme/',
    category: 'molecular-biology',
  },
  {
    term: '遺伝子',
    english: 'gene',
    description: '機能を持つRNAやタンパク質の産生に関わるDNA領域。',
    href: '/glossary/gene/',
    category: 'molecular-biology',
  },
  {
    term: 'ゲノム',
    english: 'genome',
    description: 'ある生物が持つ遺伝情報の全体。',
    href: '/glossary/genome/',
    category: 'genomics',
  },
  {
    term: 'セントラルドグマ',
    english: 'central dogma',
    description: 'DNA、RNA、タンパク質の間で情報が使われる基本的な流れ。',
    href: '/glossary/central-dogma/',
    category: 'molecular-biology',
  },
  {
    term: '転写',
    english: 'transcription',
    description: 'DNAの情報をもとにRNAを合成する過程。',
    href: '/glossary/transcription/',
    category: 'molecular-biology',
  },
  {
    term: '翻訳',
    english: 'translation',
    description: 'mRNAの情報をもとにアミノ酸をつなぎ、タンパク質を作る過程。',
    href: '/glossary/translation/',
    category: 'molecular-biology',
  },
  {
    term: '遺伝子発現',
    english: 'gene expression',
    description: '遺伝子の情報がRNAやタンパク質として使われること。',
    href: '/glossary/gene-expression/',
    category: 'molecular-biology',
  },
  {
    term: '細胞膜',
    english: 'cell membrane',
    description: '細胞内外を区切り、物質輸送や情報伝達に関わる膜。',
    href: '/glossary/cell-membrane/',
    category: 'cell-biology',
  },
  {
    term: '細胞小器官',
    english: 'organelle',
    description: '真核細胞の内部で特定の機能を担う構造。',
    href: '/glossary/organelle/',
    category: 'cell-biology',
  },
  {
    term: '細胞シグナル伝達',
    english: 'cell signaling',
    description: '細胞が外からの情報を受け取り、内部の反応へ変える仕組み。',
    href: '/glossary/cell-signaling/',
    category: 'cell-biology',
  },
  {
    term: '染色体',
    english: 'chromosome',
    description:
      'DNAとタンパク質からなる、遺伝情報の収納と受け渡しに関わる構造。',
    href: '/glossary/chromosome/',
    category: 'genomics',
  },
  {
    term: '変異',
    english: 'mutation',
    description:
      'DNA配列に生じた変化。文脈によって遺伝的変異と区別して使われる。',
    href: '/glossary/mutation/',
    category: 'genomics',
  },
  {
    term: '表現型',
    english: 'phenotype',
    description: '生物、細胞、組織などで観察または測定できる性質や状態。',
    href: '/glossary/phenotype/',
    category: 'foundations',
  },
  {
    term: 'モデル生物',
    english: 'model organism',
    description: '生命現象を調べるために研究でよく使われる生物。',
    href: '/glossary/model-organism/',
    category: 'foundations',
  },
  {
    term: 'SNP',
    english: 'single nucleotide polymorphism',
    abbreviation: 'SNP',
    description: '集団の中で見られる1塩基の配列多型。',
    href: '/glossary/snp/',
    category: 'genomics',
  },
  {
    term: '遺伝的変異',
    english: 'genetic variant',
    abbreviation: 'variant',
    description: 'ゲノム配列に見られる違い。',
    href: '/glossary/genetic-variant/',
    category: 'genomics',
  },
  {
    term: 'PCR',
    english: 'polymerase chain reaction',
    abbreviation: 'PCR',
    description: '特定のDNA領域を試験管内で増幅する実験法。',
    href: '/glossary/pcr/',
    category: 'methods-and-analysis',
  },
  {
    term: 'シーケンシング',
    english: 'sequencing',
    description: 'DNAやRNA由来の塩基配列を読み取る技術の総称。',
    href: '/glossary/sequencing/',
    category: 'methods-and-analysis',
  },
  {
    term: 'NGS',
    english: 'next-generation sequencing',
    abbreviation: 'NGS',
    description:
      '多数の配列断片を並列に読み取る高スループットなシーケンシング技術。',
    href: '/glossary/ngs/',
    category: 'methods-and-analysis',
  },
  {
    term: 'RNA-seq',
    english: 'RNA sequencing',
    abbreviation: 'RNA-seq',
    description: 'RNAを配列決定し、遺伝子発現などを調べる手法。',
    href: '/glossary/rna-seq/',
    category: 'methods-and-analysis',
  },
  {
    term: 'single-cell RNA-seq',
    english: 'single-cell RNA sequencing',
    abbreviation: 'scRNA-seq',
    description: '1細胞ごとのRNA量を測り、細胞集団の違いを調べる手法。',
    href: '/glossary/single-cell-rna-seq/',
    category: 'methods-and-analysis',
  },
  {
    term: 'カウント行列',
    english: 'count matrix',
    description: '遺伝子とサンプルまたは細胞ごとのリード数を並べた表。',
    href: '/glossary/count-matrix/',
    category: 'methods-and-analysis',
  },
  {
    term: 'single-cell QC',
    english: 'single-cell quality control',
    abbreviation: 'QC',
    description: 'single-cell解析で低品質細胞や技術的な外れ値を確認する工程。',
    href: '/glossary/single-cell-quality-control/',
    category: 'methods-and-analysis',
  },
  {
    term: '次元削減',
    english: 'dimensionality reduction',
    description: '多数の特徴を少数の軸にまとめ、全体像を見やすくする解析。',
    href: '/glossary/dimensionality-reduction/',
    category: 'methods-and-analysis',
  },
  {
    term: 'クラスタリング',
    english: 'clustering',
    description: '似た特徴を持つデータ点を探索的にまとめる解析。',
    href: '/glossary/clustering/',
    category: 'methods-and-analysis',
  },
  {
    term: 'マーカー遺伝子',
    english: 'marker gene',
    description: '細胞型や状態を見分ける手がかりとして使われる遺伝子。',
    href: '/glossary/marker-gene/',
    category: 'methods-and-analysis',
  },
  {
    term: 'UMAP',
    english: 'Uniform Manifold Approximation and Projection',
    abbreviation: 'UMAP',
    description: '高次元データを2次元などに配置して構造を見る可視化手法。',
    href: '/glossary/umap/',
    category: 'methods-and-analysis',
  },
  {
    term: 'バッチ効果',
    english: 'batch effect',
    description:
      '実験日、試薬、機器などの技術的な違いによって生じるデータの差。',
    href: '/glossary/batch-effect/',
    category: 'methods-and-analysis',
  },
  {
    term: 'シーケンスデータ',
    english: 'sequence data',
    description: 'DNAやRNAの塩基配列を読み取って得られるデータ。',
    href: '/glossary/sequence-data/',
    category: 'methods-and-analysis',
  },
  {
    term: '差次的発現解析',
    english: 'differential expression analysis',
    abbreviation: 'DEA',
    description: '条件間で遺伝子発現に差があるかを調べる解析。',
    href: '/glossary/differential-expression-analysis/',
    category: 'methods-and-analysis',
  },
  {
    term: 'バイオインフォマティクス',
    english: 'bioinformatics',
    description: '生命科学のデータを情報科学の方法で整理、解析、解釈する分野。',
    href: '/glossary/bioinformatics/',
    category: 'methods-and-analysis',
  },
  {
    term: 'p値',
    english: 'p-value',
    description:
      '帰無仮説のもとで、観察された差やそれ以上の差がどのくらい起こり得るかを表す値。',
    href: '/glossary/p-value/',
    category: 'statistics-and-design',
  },
  {
    term: '信頼区間',
    english: 'confidence interval',
    abbreviation: 'CI',
    description: '推定値の不確かさを範囲として示す統計表示。',
    href: '/glossary/confidence-interval/',
    category: 'statistics-and-design',
  },
  {
    term: '効果量',
    english: 'effect size',
    description: '差や関係の大きさを表す指標。',
    href: '/glossary/effect-size/',
    category: 'statistics-and-design',
  },
  {
    term: 'バイアス',
    english: 'bias',
    description:
      '研究の設計、測定、解析、報告によって結果が一方向にずれる可能性。',
    href: '/glossary/bias/',
    category: 'statistics-and-design',
  },
  {
    term: '交絡',
    english: 'confounding',
    description: '調べたい関係が第三の要因によって見かけ上変わって見えること。',
    href: '/glossary/confounding/',
    category: 'statistics-and-design',
  },
  {
    term: '再現性',
    english: 'reproducibility',
    description:
      '同じ問いに対して、同じような結果が繰り返し得られるかという考え方。',
    href: '/glossary/reproducibility/',
    category: 'statistics-and-design',
  },
  {
    term: '相関と因果',
    english: 'correlation and causation',
    description:
      '2つの変数が一緒に変化することと、一方がもう一方を引き起こすことの違い。',
    href: '/glossary/correlation-causation/',
    category: 'statistics-and-design',
  },
  {
    term: '統計的有意性と生物学的重要性',
    english: 'statistical significance and biological importance',
    description:
      '偶然だけでは説明しにくいかという統計上の判断と、研究文脈で意味があるかという解釈の違い。',
    href: '/glossary/significance-vs-importance/',
    category: 'statistics-and-design',
  },
  {
    term: 'n数',
    english: 'sample size',
    abbreviation: 'n',
    description:
      'Figureや統計解析で数えられているサンプル、個体、細胞、測定点などの数。',
    href: '/glossary/sample-size/',
    category: 'statistics-and-design',
  },
  {
    term: '対照群',
    english: 'control group',
    description: '処理群や観察対象を解釈するための比較の基準。',
    href: '/glossary/control-group/',
    category: 'statistics-and-design',
  },
  {
    term: '変数',
    english: 'variable',
    description: '研究で観察、測定、比較する値やカテゴリ。',
    href: '/glossary/variable/',
    category: 'statistics-and-design',
  },
  {
    term: '分布',
    english: 'distribution',
    description: 'データがどの値の周辺にどれくらい集まっているかを表す見方。',
    href: '/glossary/distribution/',
    category: 'statistics-and-design',
  },
  {
    term: '平均と中央値',
    english: 'mean and median',
    description:
      'データの中心を表す代表値。平均は外れ値の影響を受けやすく、中央値は受けにくい。',
    href: '/glossary/mean-median/',
    category: 'statistics-and-design',
  },
  {
    term: '反復',
    english: 'replicate',
    description:
      '同じ問いを複数のサンプルや測定で繰り返すこと。生物学的反復と技術的反復を区別する。',
    href: '/glossary/biological-technical-replicates/',
    category: 'statistics-and-design',
  },
  {
    term: 'ランダム化',
    english: 'randomization',
    description:
      'サンプルや処理順を無作為に割り付け、偏りを減らす研究デザインの考え方。',
    href: '/glossary/randomization/',
    category: 'statistics-and-design',
  },
  {
    term: '多重検定補正',
    english: 'multiple testing correction',
    description:
      '多数の検定を行うと偶然の有意が増える問題を調整する統計的な考え方。',
    href: '/glossary/multiple-testing-correction/',
    category: 'statistics-and-design',
  },
  {
    term: 'Title',
    english: 'Title',
    description: '論文の題名。研究対象、方法、主な発見の手がかりになる部分。',
    href: '/glossary/title/',
    category: 'paper-reading',
  },
  {
    term: 'Abstract',
    english: 'Abstract',
    description:
      '研究の背景、目的、方法、結果、結論を短くまとめた論文冒頭の要約。',
    href: '/glossary/abstract/',
    category: 'paper-reading',
  },
  {
    term: 'Introduction',
    english: 'Introduction',
    description:
      '研究背景、先行研究、未解決の問い、研究目的を示す論文の導入部分。',
    href: '/glossary/introduction/',
    category: 'paper-reading',
  },
  {
    term: 'Methods',
    english: 'Methods',
    description: '実験や解析の条件、手順、対象、比較方法を説明する部分。',
    href: '/glossary/methods/',
    category: 'paper-reading',
  },
  {
    term: 'Results',
    english: 'Results',
    description: '実験や解析から得られた結果を、Figureや表とともに示す部分。',
    href: '/glossary/results/',
    category: 'paper-reading',
  },
  {
    term: 'Discussion',
    english: 'Discussion',
    description: '結果の解釈、研究の意味、限界、今後の課題を述べる部分。',
    href: '/glossary/discussion/',
    category: 'paper-reading',
  },
  {
    term: 'References',
    english: 'References',
    description: '本文で引用された先行研究や資料を並べた文献リスト。',
    href: '/glossary/references/',
    category: 'paper-reading',
  },
  {
    term: 'Figure',
    english: 'Figure',
    description: '研究結果を図、画像、グラフ、模式図などで示した論文中の要素。',
    href: '/glossary/figure/',
    category: 'paper-reading',
  },
  {
    term: 'Figure legend',
    english: 'Figure legend',
    description:
      'Figureの条件、記号、サンプル、統計表示などを説明する図の説明文。',
    href: '/glossary/figure-legend/',
    category: 'paper-reading',
  },
  {
    term: '研究の問い',
    english: 'research question',
    description: 'その研究が何を明らかにしようとしているかを表す問い。',
    href: '/glossary/research-question/',
    category: 'paper-reading',
  },
  {
    term: '生命科学の問い',
    english: 'biological question',
    description: '生命現象について何を明らかにしたいのかを具体化した問い。',
    href: '/glossary/biological-question/',
    category: 'foundations',
  },
  {
    term: '研究背景',
    english: 'research background',
    description: 'その研究が必要になった文脈や、前提となる知識。',
    href: '/glossary/research-background/',
    category: 'paper-reading',
  },
  {
    term: '先行研究',
    english: 'prior study',
    description: '現在の研究より前に行われ、背景や比較対象になる研究。',
    href: '/glossary/prior-study/',
    category: 'paper-reading',
  },
  {
    term: '主張',
    english: 'claim',
    description: '論文が結果から言おうとしている解釈や結論。',
    href: '/glossary/claim/',
    category: 'paper-reading',
  },
  {
    term: '証拠',
    english: 'evidence',
    description: '論文の主張を支えるデータ、Figure、解析、観察結果。',
    href: '/glossary/evidence/',
    category: 'paper-reading',
  },
  {
    term: '限界',
    english: 'limitation',
    description: '研究の設計、データ、解析、解釈に残る制約や注意点。',
    href: '/glossary/limitation/',
    category: 'paper-reading',
  },
  {
    term: 'レビュー論文',
    english: 'review article',
    description: '複数の研究を整理し、分野の知見や流れをまとめる論文。',
    href: '/glossary/review-paper/',
    category: 'paper-reading',
  },
  {
    term: '原著論文',
    english: 'primary research article',
    description: '新しい実験、解析、観察に基づく研究結果を報告する論文。',
    href: '/glossary/primary-research-article/',
    category: 'paper-reading',
  },
  {
    term: 'PubMed',
    english: 'PubMed',
    description:
      '生命科学・医学系文献の書誌情報や要約を検索できるデータベース。',
    href: '/glossary/pubmed/',
    category: 'paper-reading',
  },
  {
    term: 'PMC',
    english: 'PubMed Central',
    abbreviation: 'PMC',
    description: '無料で全文を読める生命科学・医学系論文を収録するアーカイブ。',
    href: '/glossary/pmc/',
    category: 'paper-reading',
  },
  {
    term: 'DOI',
    english: 'digital object identifier',
    abbreviation: 'DOI',
    description: '論文やデータなどの学術資料を永続的に識別するための文字列。',
    href: '/glossary/doi/',
    category: 'paper-reading',
  },
  {
    term: 'PMID',
    english: 'PubMed identifier',
    abbreviation: 'PMID',
    description: 'PubMedに登録された文献を識別するための番号。',
    href: '/glossary/pmid/',
    category: 'paper-reading',
  },
  {
    term: '論文ノート',
    english: 'paper note',
    description:
      '研究の問い、方法、Figure、主張、限界を自分の言葉で整理する記録。',
    href: '/glossary/paper-note/',
    category: 'paper-reading',
  },
];
