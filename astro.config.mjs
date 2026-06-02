import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://biolearn.ai',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'BioLearn',
      description:
        'BioLearnは、生命科学論文のFigure、Methods、Resultsを読めるようになるための日本語教材サイトです。',
      locales: {
        root: {
          label: '日本語',
          lang: 'ja',
        },
      },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: '/favicon.svg',
            type: 'image/svg+xml',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'shortcut icon',
            href: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        },
        {
          tag: 'link',
          attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        },
        {
          tag: 'link',
          attrs: { rel: 'manifest', href: '/site.webmanifest' },
        },
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#12343b' },
        },
        {
          tag: 'meta',
          attrs: { name: 'robots', content: 'index, follow' },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:site_name',
            content: 'BioLearn',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://biolearn.ai/ogp.jpg',
          },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:width', content: '1200' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:height', content: '630' },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:alt',
            content: 'BioLearn の共有カード画像',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image',
            content: 'https://biolearn.ai/ogp.jpg',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image:alt',
            content: 'BioLearn の共有カード画像',
          },
        },
      ],
      logo: {
        src: './src/assets/biolearn-logo.svg',
        alt: 'BioLearn',
      },
      components: {
        PageTitle: './src/components/PageTitle.astro',
        Search: './src/components/Search.astro',
        Footer: './src/components/BiolearnFooter.astro',
      },
      routeMiddleware: './src/starlightRouteData.ts',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: '学習を始める',
          items: [
            { label: 'はじめに', link: '/start/' },
            { label: 'ラーニングパス', link: '/paths/' },
            { label: '分野別カテゴリ', link: '/categories/' },
            { label: '学習履歴と復習', link: '/review/' },
          ],
        },
        {
          label: 'ラーニングパス',
          items: [
            { label: '基礎を固める', link: '/paths/foundations/' },
            {
              label: '細胞のしくみを理解する',
              link: '/paths/cell-mechanisms/',
            },
            {
              label: '実験・統計を確認する',
              link: '/paths/methods-statistics/',
            },
            { label: 'オミクス解析を読む', link: '/paths/omics-analysis/' },
            {
              label: 'Figureを読む',
              link: '/paths/figure-reading/',
            },
            { label: '論文を読む', link: '/paths/paper-reading/' },
          ],
        },
        {
          label: '分野別に学ぶ',
          items: [
            { label: '生命科学の基礎', link: '/fundamentals/' },
            { label: '分子生物学', link: '/molecular-biology/' },
            { label: '細胞生物学', link: '/cell-biology/' },
            { label: 'ゲノミクス', link: '/genomics/' },
            { label: '実験手法', link: '/methods/' },
            { label: 'バイオインフォマティクス', link: '/bioinformatics/' },
            { label: '統計・研究デザイン', link: '/statistics/' },
            { label: '論文Figureの読み方', link: '/figures/' },
            { label: '論文読解演習', link: '/papers/' },
          ],
        },
        {
          label: 'リファレンス',
          items: [
            { label: '用語集', link: '/glossary/' },
            { label: '実験手法早見表', link: '/resources/methods-cheatsheet/' },
            { label: 'Figure早見表', link: '/resources/figures-cheatsheet/' },
            { label: 'PubMed / PMC の使い方', link: '/resources/pubmed-pmc/' },
            { label: 'リファレンス', link: '/resources/' },
            { label: 'About', link: '/about/' },
          ],
        },
      ],
    }),
  ],
});
