/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xs": "320px", // Extra Small
        "2xs": "360px", // Extra Extra Small
        "xs": "480px", // Small
        "sm": "640px", // Small Medium
        "md": "768px", // Medium
        "lg": "1024px", // Large
        "xl": "1280px", // Extra Large
      },
    },
  },
  plugins: [],
}

