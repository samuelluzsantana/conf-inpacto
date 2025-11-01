/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      colors: {
        inpacto: {
          orange: "#FF8F44",
          pink: "#FA1462",
          magenta: "#E23973",
          purple: "#35126A",
          sky: "#4DC1E7",
          white: "#FFFFFF",
          dark: "#2D2D2D",
          // gradiente base
          gradientStart: "#FF8F44",
          gradientMid1: "#FA1462",
          gradientMid2: "#E23973",
          gradientMid3: "#35126A",
          gradientEnd: "#4DC1E7",
        },
      },
      backgroundImage: {
        "inpacto-gradient":
          "linear-gradient(90deg, #FF8F44 0%, #FA1462 20%, #E23973 40%, #35126A 60%, #4DC1E7 100%)",
      },
    },
  },
  plugins: [],
};
