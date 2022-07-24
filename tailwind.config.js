/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      "white-100": "#F8F8F8",
      black: "#000000",
      "bronze-0": "#f2e8e5",
      "bronze-100": "#eaddd7",
      "bronze-200": "#e0cfc7",
      "bronze-300": "#d2bab0",
      "bronze-400": "#bfa094",
      "bronze-500": "#a18072",
      "bronze-600": "#977669",
      "bronze-700": "#846358",
      "gray-0": "#F3F3F3",
      "gray-100": "#E2E2E2",
      "gray-200": "#DBDBDB",
      "gray-300": "#C7C7C7",
      "gray-400": "#8F8F8F",
      "gray-500": "#6F6F6F",
      "gray-600": "#181818",
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
