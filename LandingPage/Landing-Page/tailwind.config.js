/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customGreenDark': '#194F20',
        'customGreenLight': '#39B54A',
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      fontFamily:{
        'texto': ['Montserrat', 'sans-serif'],
        'titulo': ["Poppins", 'sans-serif']
      }
    },
  },
  plugins: [],
}