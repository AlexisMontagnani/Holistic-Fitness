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
      "blackContrast": "#0c0700",
      "whiteContrast": "#FFFFFF",
    },
    backgroundImage: {
      'profile': "url('/images/Alexis.jpg')",
      },
      boxShadow: {
        'inner-2xl': 'inset 0 0 25px 15px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
