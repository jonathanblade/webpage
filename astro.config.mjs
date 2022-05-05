import tailwindcss from '@astrojs/tailwind';

export default {
  integrations: [tailwindcss()],
  vite: {
    ssr: {
      external: ['svgo'], // for astro-icons
    },
  },
};
