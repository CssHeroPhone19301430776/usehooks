import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'usehooks',
    apiHeader: false,
    nav: [
      { title: '指南', link: '/guide' },
      {
        title: 'Hooks',
        link: '/components/use-toggle',
      },
    ],
  },
});
