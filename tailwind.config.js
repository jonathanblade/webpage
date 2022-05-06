module.exports = {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {
      colors: {
        index: '#881af1',
        about: '#0d9488',
        blog: '#ff7b72',
        projects: '#18b3d9',
        darknest: '#0d1117',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.darknest'),
            '--tw-prose-headings': theme('colors.blog'),
            '--tw-prose-code': theme('colors.blog'),
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            '--tw-prose-counters': theme('colors.darknest'),
          },
        },
        dark: {
          css: {
            '--tw-prose-body': theme('colors.white'),
            '--tw-prose-headings': theme('colors.blog'),
            '--tw-prose-code': theme('colors.blog'),
            '--tw-prose-counters': theme('colors.white'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
