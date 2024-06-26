/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      figtree: ["'Figtree'", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#111111",
        yellow: "#f4d04e",
        grey: "#7f7f7f",
      },
      fontWeight: {
        medium: "500",
        extrabold: "800",
      },
      boxShadow: {
        card: "8px 8px black",
      }
    },
  },
  plugins: [],
}

