/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(emerald|blue|violet|amber|rose|indigo)-(50|100|200|500)/,
    },
    {
      pattern: /text-(emerald|blue|violet|amber|rose|indigo)-(700)/,
    },
    {
      pattern: /border-(emerald|blue|violet|amber|rose|indigo)-(200)/,
    },
    {
      pattern: /ring-(emerald|blue|violet|amber|rose|indigo)-(500)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
