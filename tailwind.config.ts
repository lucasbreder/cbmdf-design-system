import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgb(var(--primary))",
        highlight: "rgb(var(--highlight))",
        disabled: "rgb(var(--disabled))",
        hover: "rgb(var(--hover))",
        gray: "rgb(var(--gray))"
      },
      textColor: {
        primary: "rgb(var(--primary))",
        secondary: "#fff",
      },
      keyframes: {
        'fade-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      },
      animation: {
        'fade-left-enter': 'fade-left .5s ease-in-out',
      }
    },
  },
  plugins: [],
};
export default config;
