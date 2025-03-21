/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './data/**/*.{js,jsx,ts,tsx,md}'],
  theme: {
    fontFamily: {
      futura: ['FuturaNew', 'sans-serif'],
      playfair: ['Playfair Display', 'FuturaNew', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#6a61c7',
        accent: '#CC26E8',
        darkgrey: '#28313B',
        grey: '#8B8B8B',
        lightgrey: '#eee',
      },
    },
    screens: {
      md: '768px',
      lg: '1200px',
      xl: '1600px',
    },
  },
  plugins: [],
};
