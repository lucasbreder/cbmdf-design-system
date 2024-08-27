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
    },
  },
  plugins: [],
};
export default config;
