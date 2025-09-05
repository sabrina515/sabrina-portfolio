/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-purple": "#E0BBE4",
        "medium-purple": "#957DAD",
        "dark-purple": "#624F82",
        "pink-accent": "#FFC7DC",
        "white-bg": "#F9F7F7",
        "text-dark": "#333333",
      },
    },
  },
  plugins: [],
};
