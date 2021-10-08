module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'navbar': "url('./assets/nav_bar.png')",
        'backbutton': "url('./assets/Back.png')",
        'searchbutton': "url('./assets/search.png')",
      }
    },
    FontFace: 'TitilliumWeb'
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
