/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      primary: "#00040f",
      secondary: "#00f6ff",
      dimWhite: "rgba(255, 255, 255, 0.7)",
      dimBlue: "rgba(9, 151, 124, 0.1)",
      blk: '#1a1a1a',
      blu: '#6798C0',
      plat: '#E3E3E3'
    },},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },},
  plugins: [],
}
