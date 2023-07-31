/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [ 'Manrope', 'sans-serif' ]
    },
    extend: {
      height: {
        '2-screen': 'calc(2 * 100vh)'
      },
      maxWidth: {
        '8/5': 'calc(8/5 * 100vh)'
      },
      backgroundColor: {
        'midnight': '#122133'
      }
    },
  },
  plugins: [],
};
