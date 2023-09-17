/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#37306B',
        'secondary-light': '#C53F9D',
        'secondary-dark': '#66347F',
        'orange': '#FF9FAF',
        'primary-dark': '#100E20'
      }
    },
  },
  plugins: [],
}