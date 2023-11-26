/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        purple: "#8B5CF6",
        purpleLight: "#4B3D6B",
        dark: "#171717",
        grayCustom: "#212121",
        light: "#F8F8F8",
        main: "#FF304D",
      },
    },
  },
  plugins: [],
};

