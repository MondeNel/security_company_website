/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2BA8D8',
          dark: '#050C14',
          navy: '#0A1828',
          mid:  '#0D2035',
        }
      },
      fontFamily: {
        oswald:     ['Oswald', 'sans-serif'],
        barlow:     ['Barlow', 'sans-serif'],
        condensed:  ['"Barlow Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}