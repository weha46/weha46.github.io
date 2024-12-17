/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Menyertakan semua file HTML dan JS dalam folder src
    "./*.html", // Menyertakan semua file HTML di root
    "./*.js", // Menyertakan semua file JS di root jika ada
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class", // I
};
