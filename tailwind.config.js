module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'HTP-bg': '#CADFDF',
        'HTP-text': '#6C857C'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
