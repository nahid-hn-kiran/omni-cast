/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "omni-yellow": "#FE8A60",
      "omni-pink": "#FF2D64",
      "omni-gray": "#2B0051",
      "omni-dark": "#000000",
      "omni-gray-dark": "#18002D",
      "omni-white": "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        "gradient-pink": "linear-gradient(to right, #FE8A60, #FF2D64)",
      },
    },
  },
  plugins: [],
};
