/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#2D2D2D",
        grayc: "#414141",
        primary: "#7996FC",
        graywhite: "#C9C9C9",
      },
    },
  },
  plugins: [],
};
