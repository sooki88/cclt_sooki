import plugin from "tailwindcss/plugin";

export const fonts = plugin(({ addUtilities }) => {
  addUtilities({
    ".large": {
      fontSize: "32px",
      lineHeight: "38.73px",
      fontWeight: "400",
    },
    ".base": {
      fontSize: "28px",
      lineHeight: "33.89px",
      fontWeight: "400",
    },
    ".small": {
      fontSize: "24px",
      lineHeight: "29.05px",
      fontWeight: "400",
    },
  });
});
