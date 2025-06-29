// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,md,mdx}", // ← 여긴 있음
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.{md,mdx}", // ← 마크다운도 OK
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
