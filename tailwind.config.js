/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      media: {
        "2xs": "275px",
        xs: "375px",
        sm: "576px",
        md: "768px",
        lg: "992px",
      },
      colors: {
        "dark-purple-2": "#2D1441",
        purple: "#8C30F5",
      },
    },
  },
  plugins: [],
};
