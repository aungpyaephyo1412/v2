/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'spin-slow': 'spin 4s linear infinite',
        "bounce-one" : "bounce 1s linear"
      },
      fontFamily:{
        "akaya" :"Akaya",
        "aceme" : "Acme"
      },
      boxShadow:{
        "menu":"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        "hero-card":"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;;"
      }
    },
  },
  plugins: [],
}

