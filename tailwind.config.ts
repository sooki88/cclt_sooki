import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        background: "#1E1E1E",
        main: "#F49D1A",
        sub: {
          bright: "#3A3F77",
          medium: "#FD68B3",
          dark: "#242530",
        },
        neutral: {
          100: "#FFF",
          200: "#B2B2B2",
          300: "#000",
        },
      },
      dropShadow: {
        default: "0px 4px 4px 0px rgba(0, 0, 0, 0.4)",
      },
    },
  },
};

export default config;
