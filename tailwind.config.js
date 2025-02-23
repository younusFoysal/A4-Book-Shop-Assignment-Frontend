/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bgmove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 100%" }
        },
      },
      animation: {
        bgmove: 'bgmove 40s infinite',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
