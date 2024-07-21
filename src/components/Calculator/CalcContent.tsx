import React from "react";
import Display from "./Display";
import NumButtons from "./NumButtons";
import OpButtons from "./OpButtons";
import { useCalcContext } from "@/src/context/CalcContext";
import ErrorModal from "../ErrorModal";

export default function CalcContent() {
  const { errMessage, setErrMessage } = useCalcContext();

  return (
    <>
      <section className='flex flex-col gap-[22px] w-[400px] h-[367px] bg-sub-dark p-[25px]'>
        <Display />
        <div className='flex gap-[23px]'>
          <NumButtons />
          <OpButtons />
        </div>
      </section>
      {errMessage && <ErrorModal onClose={() => setErrMessage(null)} errMessage={errMessage} />}
    </>
  );
}
