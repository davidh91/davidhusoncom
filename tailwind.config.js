/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        davidgrey: "#EAEAEA",
        davidblack: "#212121",
      },
      fontFamily: {
        Nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
