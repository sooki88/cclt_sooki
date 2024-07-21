export const CALC_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0];

export const CALC_OPERATORS = ["×", "÷", "+", "-", "%", "^"];

export const PRECEDENCE = [["^"], ["×", "÷", "%"], ["+", "-"]];

export const OPERATOR_MAP: { [key: string]: string } = {
  "×": "*",
  "÷": "/",
  "+": "+",
  "-": "-",
  "%": "%",
  "^": "**",
};
