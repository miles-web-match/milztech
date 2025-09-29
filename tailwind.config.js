/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Noto Sans JP', 'sans-serif'],
        serif: ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
