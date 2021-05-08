module.exports = {
  purge: ['./*.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#e95385',
        secondary: '#54c9f1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
