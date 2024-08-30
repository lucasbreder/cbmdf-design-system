import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-warning',
    'text-warning',
    'border-warning',
    'bg-attention',
    'text-attention',
    'border-attention',
    'bg-accept',
    'text-accept',
    'border-accept',
    'bg-highlight',
    'text-highlight',
    'border-highlight',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgb(var(--primary))",
        disabled: "rgb(var(--disabled))",
        hover: "rgb(var(--hover))",
        gray: "rgb(var(--gray))",
        highlight: "rgb(var(--highlight))",
        warning: "rgb(var(--warning))",
        attention: "rgb(var(--attention))",
        accept: "rgb(var(--accept))",
      },
      textColor: {
        primary: "rgb(var(--primary))",
        secondary: "#fff",
        highlight: "rgb(var(--highlight))",
        warning: "rgb(var(--warning))",
        attention: "rgb(var(--attention))",
        accept: "rgb(var(--accept))",
      },
      borderColor: {
        highlight: "rgb(var(--highlight))",
        warning: "rgb(var(--warning))",
        attention: "rgb(var(--attention))",
        accept: "rgb(var(--accept))",
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
