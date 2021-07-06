module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      playFair: ['Playfair Display', 'serif'],
    },
    extend: {
      colors: {
        brown: {
          footer: '#361A05',
          dark: '#5A371C',
          semiDark: '#A77C5C',
          base: '#9A7C65',
          light: '#EBD0BC'
        },
        offBrown: '#665141',
        offGray: '#877A70',
        textGray: '#707070',
        textBlack: '#303030',
        offWhite: '#E5E5E5'
      },
    },
  },
  variants: {
    extend: {
      brightness: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
