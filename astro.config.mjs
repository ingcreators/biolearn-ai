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
          label: 'はじめに',
          items: [
            { label: 'カテゴリ概要', link: '/getting-started/' },
            { label: '生命科学とは何か', link: '/getting-started/what-is-life-science/' },
          ],
        },
        {
          label: '生命科学の基礎',
          items: [
            { label: 'カテゴリ概要', link: '/basics/' },
            { label: '細胞とは何か', link: '/basics/what-is-a-cell/' },
          ],
        },
        {
          label: '分子生物学',
          items: [
            { label: 'カテゴリ概要', link: '/molecular-biology/' },
            { label: 'DNAとは何か', link: '/molecular-biology/what-is-dna/' },
            { label: 'RNAとは何か', link: '/molecular-biology/what-is-rna/' },
            { label: 'タンパク質とは何か', link: '/molecular-biology/what-is-protein/' },
            { label: '遺伝子とは何か', link: '/molecular-biology/what-is-gene/' },
            { label: 'セントラルドグマとは何か', link: '/molecular-biology/what-is-central-dogma/' },
            { label: 'PCRとは何か', link: '/molecular-biology/what-is-pcr/' },
          ],
        },
        {
          label: '細胞生物学',
          items: [{ label: 'カテゴリ概要', link: '/cell-biology/' }],
        },
        {
          label: 'ゲノミクス',
          items: [
            { label: 'カテゴリ概要', link: '/genomics/' },
            { label: 'ゲノムとは何か', link: '/genomics/what-is-genome/' },
          ],
        },
        {
          label: 'バイオインフォマティクス',
          items: [
            { label: 'カテゴリ概要', link: '/bioinformatics/' },
            { label: 'RNA-seqとは何か', link: '/bioinformatics/what-is-rna-seq/' },
          ],
        },
        {
          label: '論文Figureの読み方',
          items: [{ label: 'カテゴリ概要', link: '/reading-figures/' }],
        },
        {
          label: '用語集',
          items: [{ label: '用語集', link: '/glossary/' }],
        },
      ],
    }),
  ],
});
