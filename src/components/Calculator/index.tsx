import React from "react";
import Button from "../Button";
import { CALCULRATOR_NUMBER, CALCULRATOR_OPERATORS } from "@/src/utils/constants";

export default function Calculator() {
  return (
    <section className='flex flex-col gap-[22px] w-[400px] h-[367px] bg-sub-dark p-[25px]'>
      <div className='flex justify-end w-full h-[70px] rounded-[20px] bg-sub-bright pt-[18px] px-[30px] font-large text-neutral-100'>
        0
      </div>
      <div className='flex gap-[23px]'>
        <div className='grid grid-cols-3 w-[225px] gap-[15px] flex-wrap'>
          {CALCULRATOR_NUMBER.map((number) => (
            <Button key={number} fontStyle='font-small' bgColor='navy'>
              {number}
            </Button>
          ))}
          <Button fontStyle='font-small' bgColor='navy' hasImage={true}>
            <img src='/images/delete.svg' alt='삭제 버튼' className='w-[33px] h-[24px] mr-0.5' />
          </Button>
        </div>
        <div className='grid grid-cols-2 grid-rows-4 gap-3 w-[102px]'>
          {CALCULRATOR_OPERATORS.map((operator, index) => {
            const size = index > 3 ? "font-small" : "font-large";
            return (
              <Button key={operator} fontStyle={size} bgColor='main'>
                {operator}
              </Button>
            );
          })}
          <Button fontStyle='font-base' bgColor='gray' className='col-span-2 row-start-4 text-neutral-300'>
            <span className='font-stretch'>＝</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
