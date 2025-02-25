/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#E20613",
        "typography" : "#010101",
        
      },
      screens: {
        "low-768": { max: "767px" },
      }
    },
  },
  plugins: [],
}