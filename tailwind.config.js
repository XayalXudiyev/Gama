/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: {
    content: ["./src/**/*.tsx"],
  },
  darkMode: false, // or 'media' or 'class'

  content: [],
  theme: {


    extend: {
      colors: {
        navColor: "#7C7C7C",
        main: "#5DCC15",
        mainHover: "#3A4949",
        titleText: '#555252',
        newsBackground: 'rgb(249,240,250)',
      },
    },
  },
  plugins: [],
};
