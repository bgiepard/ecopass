module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        primary: '#26309c',
        secondary: '#15892e',
        'accent-1': '#333'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: {
              // Add your h2 styles here
              fontSize: theme('fontSize.2xl'),
              fontWeight: theme('fontWeight.bold'),
              marginBottom: theme('margin.4')
            },
            p: {
              // Add your p styles here
              fontSize: theme('fontSize.base'),
              marginBottom: theme('margin.4')
            },
            img: {
              width: '100%'
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
