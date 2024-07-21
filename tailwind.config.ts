import { fonts } from "./tailwind.plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#1E1E1E",
        main: "#F49D1A",
        sub: {
          bright: "#3A3F77",
          medium: "#404258",
          dark: "#242530",
        },
        neutral: {
          100: "#FFF",
          200: "#B2B2B2",
          300: "#000",
        },
        overlay: "rgba(0, 0, 0, 0.5)",
      },
      zIndex: {
        default: "1",
        modal: "500",
      },
      dropShadow: {
        default: "0px 4px 4px 0px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [fonts],
};

export default config;
