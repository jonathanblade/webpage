module.exports = {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.black'),
            '--tw-prose-headings': theme('colors.black'),
            '--tw-prose-code': theme('colors.black'),
            '--tw-prose-counters': theme('colors.black'),
          },
        },
        dark: {
          css: {
            '--tw-prose-body': theme('colors.white'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-code': theme('colors.white'),
            '--tw-prose-counters': theme('colors.white'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
