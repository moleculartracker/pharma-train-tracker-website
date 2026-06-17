/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef6ff",
          100: "#dcecff",
          700: "#0f4a7c",
          800: "#0f3b66",
          900: "#0b2744",
        },
        clinical: {
          50: "#f6f9fb",
          100: "#e8eef3",
          200: "#d8e2ea",
        },
        emerald: {
          600: "#059669",
          700: "#047857",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(11, 39, 68, 0.12)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Tajawal",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
