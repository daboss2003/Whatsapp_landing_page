/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '500px',
      'md': '700px',
      'lg': '1200px',
      'xs': '200px'
    },
    extend: {
      colors: {
        'color-green-dark': '#43CD66',
        'color-green-light': '#25D366',
        'color-primary': '#FCF5EB',
        'color-secondary': '#111B21',
        'color-secondary-light': '#33463F',
        'color-gray': '#5E5E5E',
        'color-white': '#fff',
        'color-light': '#fcf5ebc7',
      },
      backgroundImage: {
        'hero-pattern': "url('../img/motherChild.png')",
      },
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}

