/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Path to all components
  ],
  theme: {
    extend: {
      maxWidth: {
        content: "1280px",
      },
      colors: {
        primary: "#D87D4A",
        dark: "#101010",
        lightGray: "#F1F1F1",
        veryLightGray: "#979797",
        accent: "#fbaf85",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        h1: [
          "56px",
          { lineHeight: "58px", letterSpacing: "2px", fontWeight: "bold" },
        ],
        h2: [
          "40px",
          { lineHeight: "44px", letterSpacing: "1.5px", fontWeight: "bold" },
        ],
        h3: [
          "32px",
          { lineHeight: "36px", letterSpacing: "1.15px", fontWeight: "bold" },
        ],
        h4: [
          "28px",
          { lineHeight: "38px", letterSpacing: "2px", fontWeight: "bold" },
        ],
        h5: [
          "24px",
          { lineHeight: "33px", letterSpacing: "1.7px", fontWeight: "bold" },
        ],
        h6: [
          "18px",
          { lineHeight: "24px", letterSpacing: "1.3px", fontWeight: "bold" },
        ],
        overline: [
          "14px",
          { lineHeight: "19px", letterSpacing: "10px", fontWeight: "normal" },
        ],
        subtitle: [
          "13px",
          { lineHeight: "25px", letterSpacing: "1px", fontWeight: "bold" },
        ],
        body: ["15px", { lineHeight: "25px", fontWeight: "medium" }],
      },
      // For button styles
      spacing: {
        btnPadding: "12px 24px", // Default button padding
      },
    },
  },
  plugins: [],
};
