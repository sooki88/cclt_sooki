import plugin from "tailwindcss/plugin";

export const fonts = plugin(({ addUtilities }) => {
  addUtilities({
    ".font-large": {
      fontSize: "32px",
      lineHeight: "38.73px",
      fontWeight: "400",
    },
    ".font-base": {
      fontSize: "28px",
      lineHeight: "33.89px",
      fontWeight: "400",
    },
    ".font-small": {
      fontSize: "24px",
      lineHeight: "29.05px",
      fontWeight: "400",
    },
    ".font-tiny": {
      fontSize: "16px",
      lineHeight: "19.2px",
      fontWeight: "400",
    },
  });
});
