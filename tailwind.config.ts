import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000", // الأسود الملكي
        foreground: "#D4AF37", // الذهبي الفاخر
        gold: {
          light: "#F1D592",
          DEFAULT: "#D4AF37",
          dark: "#AA8A2E",
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
      },
    },
  },
  plugins: [],
};
export default config;
