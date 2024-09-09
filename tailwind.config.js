/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "omni-yellow": "#FE8A60",
      "omni-pink": "#FF2D64",
      "omni-gray": "#2B0051",
      "omni-dark": "#13ce66",
      "gray-dark": "#18002D",
    },
    extend: {
      backgroundImage: {
        "gradient-pink": "linear-gradient(to right, #FE8A60, #FF2D64)",
      },
    },
  },
  plugins: [],
};
