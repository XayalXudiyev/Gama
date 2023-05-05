/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: {
    content: ["./src/**/*.tsx"],
  },
  darkMode: false, // or 'media' or 'class'

  content: [],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },

    extend: {

      colors: {
        navColor: "#7C7C7C",
        main: "#5DCC15",
        mainHover: "#3A4949",
        titleText: '#555252',
        newsBackground: 'rgb(249,240,250)',
        footerColor: '#F3F3F3',
      },
    },
  },
  plugins: [],
};
