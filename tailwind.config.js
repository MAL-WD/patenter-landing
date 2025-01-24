/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        
        white:"#f0f0f0",
        black:"#0f0f0f",
        'primary':"#3B55E6",
        'dark-blue':"#0D1321",
        'beige':"#A69174",
      },
      backgroundColor:{
        'beige':"#A69174",
        'main':"#F0F0F0"
      },
      borderColor:{
        'primary':"#3B55E6",

      }
    },
  },
  plugins: [],
}

