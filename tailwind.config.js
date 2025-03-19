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
        black: '#28313B',
        white: '#fff',
        grey: '#8B8B8B',
        lightgrey: '#eee',
        danger: '#c80000',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
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
