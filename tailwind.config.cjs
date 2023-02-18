/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hankengrotesk': ['Hanken Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
