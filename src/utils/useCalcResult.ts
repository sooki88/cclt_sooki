import { CALC_OPERATORS, OPERATOR_MAP } from "./CALCULATOR";
import { ERROR_MESSAGES } from "./ERROR_MESSAGES";

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
    console.error(ERROR_MESSAGES.USECALCRESULT);
    return null;
  }
}
