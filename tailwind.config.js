import defaultTheme from 'tailwindcss/defaultTheme'
const colors =require('tailwindcss/colors')

module.exports = {
  mode: 'jit',

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans]
       },
       backgroundSize: {
        '37': '37rem',
      },
      colors:{
        'blue':{
          DEFAULT:'#0d114f',
          100:'#3485FF'
        },
        'light-blue':{
          DEFAULT:'#e0ecff',
        },
        'gray-blue':{
          DEFAULT:'#a1b2cd'
        }
      }
    },
  },
  plugins: [],
}