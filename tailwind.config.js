/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   // GRADIENT 1
      //   turquoisesurf: "#0AB5D3",
      //   goldcrayola: "#E8BA86",

      //   // GRADIENT 2
      //   brightnavyblue: "#1F80DF",
      //   aquamarine: "#6FF0DC",

      //   // GRADIENT 3
      //   ultramarineblue: "#4368F4",
      //   amaranthpink: "#F09EBF",

      //   // GRADIENT 4
      //   fuchsiarose: "#BE4071",
      //   mellowappricot: "#FABD75",

      //   // GRADIENT 5
      //   spacecadet: "#19295D",
      //   lavenderpurple: "#A37FBD",

      //   // GRADIENT 6
      //   celadongreen: "#2A838D",
      //   richblack: "#010E1D"
      // }
      backgroundImage: {
        'rainy': "url('/img/rainy.png')"
      }
    }
  },
  plugins: [],
}