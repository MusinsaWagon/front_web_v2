/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customBg: '#F1F4F6',
      },
      screens: {
        'max-h-840': { raw: '(max-height : 840px)' },
        'max-h-720': { raw: '(max-height : 720px)' },
      },
    },
  },
  plugins: [],
};
