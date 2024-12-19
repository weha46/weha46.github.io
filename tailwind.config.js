/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Menyertakan semua file HTML dan JS dalam folder src
    "./*.html", // Menyertakan semua file HTML di root
    "./*.js", // Menyertakan semua file JS di root jika ada
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
  darkMode: "class", // I
};
