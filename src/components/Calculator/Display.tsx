import { useCalcContext } from "@/src/context/CalcContext";
import { useLastNum } from "@/src/utils/useLastNum";
import React from "react";

export default function Display() {
  const { clicked } = useCalcContext();

  const getDisplayValue = () => {
    if (clicked.length === 0) return "0";

    const newArray = useLastNum(clicked);

    return newArray;
  };

  return (
    <div className='flex justify-end w-full h-[70px] rounded-[20px] bg-sub-bright pt-[18px] px-[30px] font-large text-neutral-100'>
      {getDisplayValue()}
    </div>
  );
}
