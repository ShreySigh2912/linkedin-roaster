/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff5f2',
          100: '#fff1ee',
          200: '#ffd7cc',
          300: '#ffbdaa',
          400: '#ff8866',
          500: '#ff5522',
          600: '#e64d1f',
          700: '#bf401a',
          800: '#993314',
          900: '#7d2a11',
        },
      },
    },
  },
  plugins: [],
}