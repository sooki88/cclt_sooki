import React, { useEffect } from "react";
import Button from "../Button";
import { CALC_NUMBERS, CALC_OPERATORS } from "@/src/utils/CALCULATOR";
import { useCalcContext } from "@/src/context/CalcContext";
import { ERROR_MESSAGES } from "@/src/utils/ERROR_MESSAGES";

export default function NumButtons() {
  const { setClicked, setErrMessage } = useCalcContext();

  const handleNumClick = (num: number | string) => {
    setClicked((prev) => {
      const lastClicked = prev[prev.length - 1];

      if (lastClicked === "." && typeof num !== "number") return prev;
      if (lastClicked === "." && num === ".") return prev;
      if (CALC_OPERATORS.includes(String(lastClicked)) && num === ".") return prev;
      if (lastClicked === "%" && num === 0) {
        setErrMessage(ERROR_MESSAGES.ZERO_AFTER_MODULUS);
        return prev;
      }

      return [...prev, num];
    });
  };

  const handleDeleteClick = () => {
    setClicked((prev) => prev.slice(0, -1));
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    const key = e.key;

    if (key === "Backspace") {
      handleDeleteClick();
    } else if (!isNaN(Number(key))) {
      handleNumClick(Number(key));
    } else if (key === ".") {
      handleNumClick(key);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className='grid grid-cols-3 w-[225px] gap-[15px] flex-wrap'>
      {CALC_NUMBERS.map((num) => (
        <Button key={num} fontStyle='font-small' bgColor='navy' onClick={() => handleNumClick(num)}>
          {num}
        </Button>
      ))}
      <Button fontStyle='font-small' bgColor='navy' hasImage={true} onClick={handleDeleteClick}>
        <img src='/images/delete.svg' alt='삭제 버튼' className='w-[33px] h-[24px] mr-0.5' />
      </Button>
    </div>
  );
}
