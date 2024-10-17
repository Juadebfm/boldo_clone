/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        boldo_blue: "#0A2640",
        boldo_green: "#65E4A3",
        boldo_gray: "#777777",
      },
    },
  },
  plugins: [],
};
