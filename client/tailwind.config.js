/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#5dc7c2",
        primary: "#191d28",
        secondary: "#2e3241",
        dark:"#77777e"
      }
    },
  },
  plugins: [],
}