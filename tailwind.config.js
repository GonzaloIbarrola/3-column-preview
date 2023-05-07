/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'White' : '#FFFFFF',
      'SedansBG' : '#E28625',
      'SuvsBG' : '#006971',
      'LuxuryBG' : '#004140',
    },
    fontFamily: {
      'body' : 'Lexend Deca'
    },
    extend: {
      fontFamily: {
        'heading' : 'Big Shoulders Display'
      },
    },
  },
  plugins: [],
}

