/** @type {import('tailwindcss').Config} */
module.exports = 

{
  darkMode:'class',

  content: [
     "./src/**/*.{html,ts}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
      container:{
      center:true
    } ,
    keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translatex(190px)' },
          '100%': { opacity: '1', transform: 'translatex(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1.5s ease-out forwards',
        fadeInRight: 'fadeInRight 3s ease-in forwards',
        fadeInup:'fadeInUp 3s ease-in forwards',

      },
  },
   plugins: [require('flowbite/plugin')],
}

