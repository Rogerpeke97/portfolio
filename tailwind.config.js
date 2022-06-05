const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'teko': ['Teko']
    },
    extend: {
      colors: {
        "primary": "rgba(43, 22, 55, 1)",
        "secondary": "#84aadb",
        "terciary": "rgb(69, 40, 189)",
        "quaternary": "",
        "background": "#020c1b",
        "button": {
          "dark": "#020A33",
          "light": "#E9ECEF"
        }

      },
      screens: {
        'xs': {min: '320px', max: '640px'},
        'sm': {min: '640px', max: '768px'},  
        'smAndDown': {min: '0px', max: '640px'},
        'smAndUp': {min: '640px', max: '9999px'},
        'md': {min: '768px', max: '1024px'}, 
        'mdAndDown': {min: '0px', max: '1200px'},
        'mdAndUp': {min: '1024px', max: '9999px'},
        'lg': {min: '1024px', max: '1280px'},  
        'xl': {min: '1280px', max: '1536px'},  
        '2xl': '1536px',
      }
    },
  },
  plugins: [
    plugin(function({addUtilities}) {
      addUtilities({
        '.backface-visible': {
          'backface-visibility': 'visible',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.rotate-y-0': {
          'transform': 'rotateY(0deg)'
        },
        '.rotate-y-180': {
          'transform': 'rotateY(180deg)'
        },
      })
    })
  ],
}