module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'HTP-bg': '#CADFDF',
        'HTP-text': '#6C857C',
        'r-button': '#69C6C2',
        'r-bg': '#FFF7F3',
        'r-play-inner-bg': '#FEF3E6',
        'r-play-border': '#F1CEA5',
        'r-edu-inner-bg': '#E9EBEA',
        'footer-blue': '#1B3A5D'
      },
      boxShadow: {
        button: '3px 3px #888888'
      },
      borderWidth: {
        '10': '12px'
      },
      borderRadius: {
        'xl': '2rem'
      },
      fontFamily: {
        'joe': ['Josefin Sans', 'sans-serif'],
        'nun': ['Nunito Sans', 'sans-serif'],
        'openSans': ['Open Sans', 'sans-serif'],
        'staat': ['Staatliches', 'cursive'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
