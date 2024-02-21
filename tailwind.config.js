/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-clr)",
        card: "var(--card-clr)",
        success: "var(--success-clr)",
        failure: "var(--failure-clr)",
        foreground: "var(--fg-clr)"
      }
    },
  },
  plugins: [],
}