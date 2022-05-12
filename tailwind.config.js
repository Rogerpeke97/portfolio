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
        "button": "#020c1b"
      },
      screens: {
        'xs': {min: '320px', max: '640px'},
        'sm': {min: '640px', max: '768px'},  
        'md': {min: '768px', max: '1024px'}, 
        'mdAndDown': {min: '320px', max: '1200px'},
        'mdAndUp': {min: '1024px', max: '9999px'},
        'lg': {min: '1024px', max: '1280px'},  
        'xl': {min: '1280px', max: '1536px'},  
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}