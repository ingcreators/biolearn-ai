import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://biolearn.ai',
  integrations: [
    starlight({
      title: 'BioLearn AI',
      description:
        '分子生物学・細胞生物学・ゲノミクス・バイオインフォマティクスを体系的に学ぶ日本語教材サイト',
      logo: {
        src: './src/assets/biolearn-logo.svg',
        alt: 'BioLearn AI',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/ingcreators/biolearn-ai',
        },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: '学習ロードマップ',
          items: [
            { label: '00. はじめに', link: '/getting-started/' },
            { label: '01. 生命科学とは何か', link: '/getting-started/what-is-life-science/' },
            { label: '02. 細胞とは何か', link: '/basics/what-is-a-cell/' },
            { label: '03. DNAとは何か', link: '/molecular-biology/what-is-dna/' },
            { label: '04. RNAとは何か', link: '/molecular-biology/what-is-rna/' },
            { label: '05. タンパク質とは何か', link: '/molecular-biology/what-is-protein/' },
            { label: '06. 遺伝子とは何か', link: '/molecular-biology/what-is-gene/' },
            { label: '07. セントラルドグマとは何か', link: '/molecular-biology/what-is-central-dogma/' },
            { label: '08. 転写とは何か', link: '/molecular-biology/what-is-transcription/' },
            { label: '09. 翻訳とは何か', link: '/molecular-biology/what-is-translation/' },
            { label: '10. 遺伝子発現とは何か', link: '/molecular-biology/what-is-gene-expression/' },
            { label: '11. 細胞膜とは何か', link: '/cell-biology/what-is-cell-membrane/' },
            { label: '12. 細胞小器官とは何か', link: '/cell-biology/what-are-organelles/' },
            { label: '13. 細胞シグナル伝達とは何か', link: '/cell-biology/what-is-cell-signaling/' },
            { label: '14. ゲノムとは何か', link: '/genomics/what-is-genome/' },
            { label: '15. 染色体とは何か', link: '/genomics/what-are-chromosomes/' },
            { label: '16. 遺伝的変異とは何か', link: '/genomics/what-are-genetic-variants/' },
            { label: '17. PCRとは何か', link: '/molecular-biology/what-is-pcr/' },
            { label: '18. RNA-seqとは何か', link: '/bioinformatics/what-is-rna-seq/' },
            { label: '19. シーケンスデータとは何か', link: '/bioinformatics/what-is-sequence-data/' },
            { label: '20. 差次的発現解析とは何か', link: '/bioinformatics/what-is-differential-expression-analysis/' },
          ],
        },
        {
          label: 'カテゴリ別に探す',
          items: [
            { label: '生命科学の基礎', link: '/basics/' },
            { label: '分子生物学', link: '/molecular-biology/' },
            { label: '細胞生物学', link: '/cell-biology/' },
            { label: 'ゲノミクス', link: '/genomics/' },
            { label: 'バイオインフォマティクス', link: '/bioinformatics/' },
            { label: '論文Figureの読み方', link: '/reading-figures/' },
          ],
        },
        {
          label: 'リファレンス',
          items: [{ label: '用語集', link: '/glossary/' }],
        },
      ],
    }),
  ],
});
