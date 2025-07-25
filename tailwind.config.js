/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //fontFamily: { jacquard: "Jacquard 12 Charted", montserrat: "Montserrat" },
      fontFamily: { matemasie: "Matemasie", gabarito: "Gabarito" },
      scrollBehavior: ["smooth"],
      colors: {
        jjgreen: "#b0f2b6",
      },
    },
  },
  plugins: [],
};
