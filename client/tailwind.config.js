module.exports = {
  mode:"jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'montserrat': ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        braintree: "#6D6B65",
        taupe: "#DBD3C7",
        illusion: "#B3AB9D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
