/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.{html,js}'
  ],
  theme: {
    extend: {
      colors:{
        primary: '#FF6347',
        secondary: '#6B7280'
      },
      fontFamily: {
        sans: ['Roboto','Arial','sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0,0,0,0.1)'
      }
     
    }
  }
 
}

