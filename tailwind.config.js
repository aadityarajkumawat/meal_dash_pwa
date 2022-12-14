/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue1': '#005FCE',
        'yellow1': '#FFC31C',
        'red1': '#B80000',
        'green1': '#10771A',
        'base': '#fffbf2'
      },
      borderWidth: {
        'simple': '1px'
      },
      borderRadius: {
        'radbase': '10px'
      },
      width: {
        '50px': '50px !important'
      }
    },
  },
  plugins: [],
}