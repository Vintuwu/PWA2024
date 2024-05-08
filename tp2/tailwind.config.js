/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        footer: "#7581f4",
      },
    },
  },
  plugins: [],
}

