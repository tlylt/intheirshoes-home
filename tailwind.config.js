module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'HTP-bg': '#CADFDF',
        'HTP-text': '#6C857C',
        'r-button': '#69C6C2',
        'r-bg': '#F6E2DA',
        'r-play-inner-bg': '#FEF3E6',
        'r-play-border': '#F1CEA5',
        'r-edu-inner-bg': '#E9EBEA'
      },
      boxShadow: {
        button: '3px 3px #888888'
      },
      borderWidth: {
        '10': '12px'
      },
      borderRadius: {
        'xl': '2rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
