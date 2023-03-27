/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gold: "#9a784e",
        dark_gray: "#222222",
        black: "#000",
        light_gray: "#707070",
      },
      fontFamily: {
        wilson: ["Wilson wells", "sans-serif"],
        rift: ["rift", "sans-serif"],
        gin: ["gin", "sans-serif"],
        libre_franklin: ["Libre Franklin", "sans-serif"],
      },
      keyframes: {
        slap: {
          "0%": {
            opacity: 0,
            transform: "translate(0, 100px) scale(0) rotate(0)",
          },
          "50%": {
            opacity: 1,
            transform: "translate(0, 0) scale(1.25) rotate(15deg)",
          },
          "100%": {
            transform: "scale(1) rotate(-6deg)",
          },
        },
        fade_up: {
          "0%": {
            opacity: 0,
            transform: "translate(0,50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0,0)",
          },
        },
      },
      animation: {
        slap: "slap 1.25s ease-in-out",
        fade_up: "fade_up 500ms ease-in-out",
      },
    },
  },
  plugins: [],
};
