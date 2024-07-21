import React, { useEffect } from "react";
import Button from "../Button";
import { CALC_OPERATORS, OPERATOR_KEYBOARD_MAP } from "@/src/utils/CALCULATOR";
import { useCalcContext } from "@/src/context/CalcContext";
import { ERROR_MESSAGES } from "@/src/utils/ERROR_MESSAGES";
import { useCalcResult } from "@/src/utils/useCalcResult";

export default function OpButtons() {
  const { clicked, setClicked, setErrMessage } = useCalcContext();

  const lastClicked = String(clicked[clicked.length - 1]);
  const secondLastClicked = clicked.length > 1 ? clicked[clicked.length - 2] : null;

  const handleOpClick = (op: string) => {
    setClicked((prev) => {
      if (prev.length === 0) {
        setErrMessage(ERROR_MESSAGES.START_NUMBER);
        return prev;
      }

      if (CALC_OPERATORS.includes(lastClicked)) {
        return [...prev.slice(0, -1), op];
      }

      if (secondLastClicked === "=") {
        return [...prev.slice(0, -2), op];
      }

      return [...prev, op];
    });
  };

  const handleResultClick = (value: string) => {
    const result = useCalcResult([...clicked, value]);
    setClicked((prev) => [...prev, value, result]);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    const key = e.key;

    if (OPERATOR_KEYBOARD_MAP[key]) {
      handleOpClick(OPERATOR_KEYBOARD_MAP[key]);
    } else if (key === "Enter") {
      handleResultClick("=");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [clicked]);

  return (
    <div className='grid grid-cols-2 grid-rows-4 gap-3 w-[102px]'>
      {CALC_OPERATORS.map((op, index) => {
        const size = index > 3 ? "font-small" : "font-large";
        return (
          <Button
            key={op}
            fontStyle={size}
            bgColor='main'
            clicked={lastClicked === op}
            onClick={() => handleOpClick(op)}>
            {op}
          </Button>
        );
      })}
      <Button
        fontStyle='font-base'
        bgColor='gray'
        className='col-span-2 row-start-4 text-neutral-300'
        clicked={clicked[clicked.length - 2] === "="}
        onClick={() => handleResultClick("=")}>
        <span className='font-stretch'>＝</span>
      </Button>
    </div>
  );
}
