import { CALC_OPERATORS, OPERATOR_MAP } from "./CALCULATOR";

export function useCalcResult(arr: (string | number)[]) {
  let expression = "";

  for (let item of arr) {
    if (typeof item === "number" || item === ".") {
      expression += item;
    } else if (CALC_OPERATORS.includes(item as string)) {
      expression += OPERATOR_MAP[item as string];
    }
  }

  try {
    const result = eval(expression);
    return result;
  } catch (error) {
    console.error("useCalcResult에서 계산 중 에러가 발생했어요.");
    return null;
  }
}
