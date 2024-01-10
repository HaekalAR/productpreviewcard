/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Fraunces: ["Fraunces", "sans-serif"],
      },
      colors: {
        //Primary Colors
        "dark-cyan": "hsl(158, 36%, 37%)",
        "more-dark-cyan": "hsl(158, 36%, 25%)",
        "r-cream": "hsl(30, 38%, 92%)",

        //Neutral Colors
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
        "r-white": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
