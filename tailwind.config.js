/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: {
    content: ["./src/**/*.tsx"],
  },
  darkMode: false, // or 'media' or 'class'

  content: [],
  theme: {
    colors: {
      navColor: "#7C7C7C",
      main: "#5DCC15",
      white:'#fff'
    },

    extend: {},
  },
  plugins: [],
};
