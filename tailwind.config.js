/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
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
    colors: {
      sweeting: "#f2ce83",
      blue: "#446ad5",
      white: "#ffffff",

    },
    spacing: {
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

