import React from "react";
import Button from "../Button";
import { CALC_OPERATORS } from "@/src/utils/CALCULATOR";
import { useCalcContext } from "@/src/context/CalcContext";
import { ERROR_MESSAGES } from "@/src/utils/ERROR_MESSAGES";
import { useCalcResult } from "@/src/utils/useCalcResult";

export default function OpButtons() {
  const { clicked, setClicked, setErrMessage } = useCalcContext();

  const handleOperClick = (oper: string) => {
    setClicked((prev) => {
      if (prev.length === 0) setErrMessage(ERROR_MESSAGES.START_NUMBER);

      const lastClicked = String(prev[prev.length - 1]);
      const secondLastClicked = prev.length > 1 ? prev[prev.length - 2] : null;

      if (CALC_OPERATORS.includes(lastClicked)) {
        return [...prev.slice(0, -1), oper];
      }

      if (secondLastClicked === "=") {
        return [...prev.slice(0, -2), oper];
      }

      return [...prev, oper];
    });
  };

  const handleResultClick = (value: string) => {
    const result = useCalcResult([...clicked, value]);
    setClicked((prev) => [...prev, value, result]);
  };

  return (
    <div className='grid grid-cols-2 grid-rows-4 gap-3 w-[102px]'>
      {CALC_OPERATORS.map((oper, index) => {
        const size = index > 3 ? "font-small" : "font-large";
        return (
          <Button key={oper} fontStyle={size} bgColor='main' onClick={() => handleOperClick(oper)}>
            {oper}
          </Button>
        );
      })}
      <Button
        fontStyle='font-base'
        bgColor='gray'
        className='col-span-2 row-start-4 text-neutral-300'
        onClick={() => handleResultClick("=")}>
        <span className='font-stretch'>＝</span>
      </Button>
    </div>
  );
}
