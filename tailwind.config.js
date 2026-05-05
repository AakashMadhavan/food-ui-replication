/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-main': '#7c3aed',
        'gray-light': '#f5f5f5',
      },
    },
  },
  plugins: [],
}