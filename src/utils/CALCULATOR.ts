export const CALC_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0];

export const CALC_OPERATORS = ["×", "÷", "+", "-", "%", "^"];

export const OPERATOR_MAP: { [key: string]: string } = {
  "×": "*",
  "÷": "/",
  "+": "+",
  "-": "-",
  "%": "%",
  "^": "**",
};

export const OPERATOR_KEYBOARD_MAP = Object.fromEntries(
  Object.entries(OPERATOR_MAP).map(([key, value]) => {
    if (value === "**") {
      return [key, key];
    }
    return [value, key];
  }),
);
