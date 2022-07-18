/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#37190F",
          secondary: "#5A2918",
          accent: "#EDC2AF",
          neutral: "#3F2D29",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
