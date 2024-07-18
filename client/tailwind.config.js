/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      lg: "1140px",
      xl: "1140px",
      "2xl": "1140px",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },

      colors: {
        "mblue-50": "#f2f8fd",
        "mblue-100": "#e5f0f9",
        "mblue-200": "#c5e1f2",
        "mblue-300": "#91c7e8",
        "mblue-400": "#56aada",
        "mblue-500": "#3090c7",
        "mblue-600": "#2173a8",
        "mblue-700": "#1c5c88",
        "mblue-800": "#1b4f72", //main
        "mblue-900": "#1b425f",
        "mblue-950": "#122b3f",
        beige: "#EDECEA",
        gainsboro: "#DADADA",
        vampire: "#090909",
      },
    },
  },
  plugins: [],
};
