/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px) scale(1.2)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      colors: {
        blue: {
          primary: "#1c4d84",
          secondary: "#2ea0d7",
        },
      },
    },
  },
  plugins: [],
};
