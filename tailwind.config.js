module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#636ff2',
        secondary: '#2fa749',
        'accent-1': '#333'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
