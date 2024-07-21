import React from "react";
import NumButtons from "./NumButtons";
import OpButtons from "./OpButtons";
import { CalcProvider } from "@/src/context/CalcContext";
import Display from "./Display";

export default function Calculator() {
  return (
    <CalcProvider>
      <section className='flex flex-col gap-[22px] w-[400px] h-[367px] bg-sub-dark p-[25px]'>
        <Display />
        <div className='flex gap-[23px]'>
          <NumButtons />
          <OpButtons />
        </div>
      </section>
    </CalcProvider>
  );
}
