/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    container: {
      screens: {
          'sm': '100%',
          'md': '100%',
          'lg': '1024px',
          'xl': '1080px',
          '2xl': '1300px',
      }
    },
    extend: {},
  },
  plugins: [],
}

