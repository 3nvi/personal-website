/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
        gray: {
          50: '#f9f9f9',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#b3b3b3',
          400: '#8B8B8B',
          500: '#6b6b6b',
          600: '#4a4a4a',
          700: '#28313B',
          800: '#1a1f25',
          900: '#0d1013',
        },
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
