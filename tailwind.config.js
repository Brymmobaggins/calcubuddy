/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}",'./dist/**/*.js'],
  theme: {
    screens: {
      "mobile": "320px",
      "tablet": "690px",
      "laptop": "1024px",
    },
    fontFamily: {
      cabin: ['Cabin', "sans - serif"],
      roboto: ['Roboto', "sans - serif"],

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
    colors: {
      sweeting: "#f2ce83",
      blue: "#446ad5",
      white: "#ffffff",

    },
    spacing: {
      '0.5': '3px',
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    extend: {},
  },
  plugins: [],
}

