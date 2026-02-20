/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C8102E',
          'red-dark': '#a50d25',
          black: '#111111',
          gray: '#444444',
        }
      }
    },
  },
  plugins: [],
}

