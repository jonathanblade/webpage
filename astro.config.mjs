import sitemap from '@astrojs/sitemap';
import tailwindcss from '@astrojs/tailwind';

export default {
  site: 'https://syrovatskiy.tk',
  integrations: [sitemap(), tailwindcss()],
  markdown: {
    syntaxHighlight: false,
  },
};
