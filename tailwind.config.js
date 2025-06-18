// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      screens: {
        'hover-hover': { raw: '(hover: hover) and (pointer: fine)' },
      },
    },
  },
  content: ['**/*.html'],
};
