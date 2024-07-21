import { CALC_OPERATORS } from "./CALCULATOR";

export function useLastNum(arr: (string | number)[]) {
  const numsArray: string[] = [];
  let curNum: string = "";

  arr.forEach((item) => {
    if (typeof item === "number" || item === ".") {
      curNum += item.toString();
    } else if (CALC_OPERATORS.includes(item as string) || item === "=") {
      if (curNum) {
        numsArray.push(curNum);
        curNum = "";
      }
    }
  });

  if (curNum) {
    numsArray.push(curNum);
  }

  return numsArray[numsArray.length - 1];
}
