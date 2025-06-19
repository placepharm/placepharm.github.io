// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './**/*.html',
    './**/*.js',
    './**/*.jsx',
    './**/*.ts',
    './**/*.tsx',
  ],
  theme: {
    extend: {
      screens: {
        'hover-hover': { raw: '(hover: hover) and (pointer: fine)' },
      },
      scale: {
        125: '1.25', // group-hover:scale-125 지원
      },
      brightness: {
        110: '1.1',  // group-hover:brightness-110 지원
      },
      contrast: {
        110: '1.1',  // group-hover:contrast-110 지원
      },
    },
  },
  plugins: [],
};
