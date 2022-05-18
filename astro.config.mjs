import tailwindcss from '@astrojs/tailwind';

export default {
  site: 'https://syrovatskiy.tk',
  integrations: [tailwindcss()],
  vite: {
    ssr: {
      external: ['svgo'], // for astro-icons
    },
  },
};
