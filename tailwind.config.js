/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      serif: [
        '"Eksell Display Large", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      ],
      sansSerif: [
        '"Silka", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      ],
    },
    extend: {},
  },
  plugins: [],
};
