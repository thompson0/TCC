/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        laranja: "#E76B38",
        cinza: "#5B5B5B"
      },
      fontFamily:{
        montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}