module.exports = {
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.tsx",
      "./components/**/*.tsx",
    ],
  },
  content: [],
  theme: {
    extend: {
      colors: {
        cream: '#F2EADE',
        darkcream: '#e6ccb2',
        choco: '#C38E70',
      },
      brightness: {
        25: '.25',
        175: '1.75',
      },
      minWidth: {
        '30': '30rem',
      },
      fontSize:{
        'tiny': '.60rem',
      },
      fontFamily: {
        'Inter': ['sans-serif'],
        'Pacifico': ['cursive'],
        'KoHo': ['sans-serif'],
        'Birthstone': ['Birthstone'],
      },
      height: {
        '128': '32rem',
        '150': '55rem',
        '170': '65rem',
      }
    },
  },
  plugins: [],
}
