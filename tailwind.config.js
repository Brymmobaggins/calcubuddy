/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/*.{html,js}',
    './dist/**/*.js'],

  theme: {
    // keyframes: {
    //   bling: {


    //   },

    screens: {
      "mobile": "320px",
      "tablet": "690px",
      "laptop": "1024px",
    },
    fontFamily: {
      cabin: ['Cabin'],
      roboto: ['Roboto'],

    },
    fontSize: {
      'sm': '0.8rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      bondiblue: {
        '50': '#ecfbff',
        '100': '#cff5fe',
        '200': '#a5ebfc',
        '300': '#67ddf9',
        '400': '#22c6ee',
        '500': '#06acd4',
        '600': '#0891b2',
        '700': '#0e7790',
        '800': '#156275',
        '900': '#165463',
        '950': '#083844',
      },
      slate: {
        '50': '#f8fafc',
        '100': '#f1f5f9',
        '200': '#e2e8f0',
        '300': '#cbd5e1',
        '400': '#94a3b8',
        '500': '#64748b',
        '600': '#475569',
        '700': '#334155',
        '800': '#1e293b',
        '900': '#0f172a',
        '950': '#020617',
      },
      yellow: "#f2ce83",
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

