/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      "primary": "#fabc5b",
      "blackContrast": "#020203",
      "WhiteContrast": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
