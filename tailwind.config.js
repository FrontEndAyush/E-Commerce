/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        bg: "#1E2832",
        "primary-bg": "#F4F4F5",
      },
    },
  },
  plugins: [],
};
