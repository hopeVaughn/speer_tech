/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#2AC420',
        'light-custom-green': '#B6E8B3',
        'custom-peach': '#FFE5B4',
        'light-custom-pink': '#ffeff7',
      }
    },
  },
  plugins: [],
}

