/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Percorso ai file del progetto
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-arrows": {
          "-moz-appearance": "textfield",
          "&::-webkit-inner-spin-button": {
            appearance: "none",
          },
          "&::-webkit-outer-spin-button": {
            appearance: "none",
          },
        },
      });
    },
  ],
};
