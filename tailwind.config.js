module.exports = {
  content: [
    './*.html',
     "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
   
  ],
  theme: {
   
    screens: {
      sm: '480px',
      md: '768px',  
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      height: {
        'section': '750px',
      },
      colors: {
        brightGreen: 'hsla(171, 62%, 47%, 1)',
        brightGreenLight: 'hsl(171, 62%, 57%)',
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        secondColor:'616161'
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}
