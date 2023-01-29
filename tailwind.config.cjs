/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Primary */
        brightBlue: "hsl(220, 98%, 61%)",

        "gradient-start": "hsl(192, 100%, 67%)",
        "gradient-end": "hsl(280, 87%, 65%)",

        /* Dark Theme */
        dtDarkBlue: "hsl(235, 21%, 11%)",
        dtDesaturatedBlue: "hsl(235, 24%, 19%)",
        dTGrayishBlue: "hsl(234, 39%, 85%)",
        lightHover: "hsl(236, 33%, 92%)",
        dTdarkGrayshBlue: "hsl(234, 11%, 52%)",
        "dTGrayishBlue-1": "hsl(233, 14%, 35%)",
        "dTGrayishBlue-2": "hsl(237, 14%, 26%)",

        /* Light Theme */

        lTLightGray: "hsl(0, 0%, 98%)",
        lTLightGrayishBlue: "hsl(236, 33%, 92%)",
        lTGrayishBlue: "hsl(233, 11%, 84%)",
        "lTGrayishBlue-1": "hsl(236, 9%, 61%)",
        "lTGrayishBlue-2": "hsl(235, 19%, 35%)",
      },

      backgroundImage: {
        checkBackground:
          "linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        lightTheme: "url(./assets/images/bg-desktop-light.jpg)",
        darkTheme: "url(./assets/images/bg-desktop-dark.jpg)",
        mbLightTheme: "url(./assets/images/bg-mobile-light.jpg)",
        mbDarkTheme: "url(./assets/images/bg-mobile-dark.jpg)",
        checkboxHover:
          "linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
      },

      fontFamily: {
        josefin: "'Josefin Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
