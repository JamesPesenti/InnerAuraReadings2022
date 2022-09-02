module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Railway", "sans-serif"],
    }
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require("daisyui")],
}
