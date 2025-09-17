/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: "#F99106",
        secondary: "#FFF2F2",
        textPrimary: "#00000080",
        neutral: "#F3F4F6",
        success: "#22C55E",
        warning: "#FACC15",
        danger: "#EF4444",
        info: "#3B82F6",
      },
      fontFamily: {
        heading: ["Yeseva One", "serif"],  
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}