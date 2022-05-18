import tailwindcss from '@astrojs/tailwind';

export default {
  site: 'https://syrovatskiy.tk',
  integrations: [tailwindcss()],
  markdown: {
    syntaxHighlight: false,
  },
};
