module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#10C5AF",
        footer: "#009E8B",
      },
      fontFamily: {
        hero: ["Train One", "ui-sans-serif"],
        body: ["Libre Franklin"],
        persian: ["Markazi Text"],
      },
      lineClamp: {
        1: "1",
        3: "3",
      },
      maxWidth: {
        112: "28rem",
      },
      minHeight: {
        cal: 'calc(100vh - 128px)',
      }
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },

  variants: {
    extend: {},
  },

  plugins: [require("@tailwindcss/line-clamp")],
};
