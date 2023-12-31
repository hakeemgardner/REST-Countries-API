/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        DarkBlue: "hsl(209, 23%, 22%)",
        VeryDarkerBlue: "hsl(207, 26%, 17%)",
        VeryDarkBlue: "hsl(200, 15%, 8%)",
        DarkGray: "hsl(0, 0%, 52%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        Nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
