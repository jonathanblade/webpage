module.exports = {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['winter', 'night'],
  },
};
