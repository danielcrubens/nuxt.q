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
    },
  },
  plugins: [],
}