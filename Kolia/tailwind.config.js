/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        laranja: "#E76B38"
      },
      fontFamily:{
        montserrat: ["Montserrat", "sans-serif"],
        Kolia: ["Post No Bills Jaffna"]
      },
      fontSize:{
        
      }
    },
  },
  plugins: [],
}