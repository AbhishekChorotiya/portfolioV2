import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        livvic: ["Livvic", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
      },
      colors:{
        background:'#F7F7FC',
        tabBg:'#EDECF2',
        textPrimary:'#231F20',
        textSecondary:'#838D99'
      },
      boxShadow: {
        profile: "0px 8px 24px 0px #1C192733",
        cardTop:'0px -2px 33px -7px #1C192733'
      }
    },
  },
  plugins: [],
};
export default config;
