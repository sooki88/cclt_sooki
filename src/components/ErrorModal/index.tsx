import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Button from "../Button";

interface ErrorModalProps {
  errMessage: string | null;
  onClose: () => void;
}

export default function ErrorModal({ errMessage, onClose }: ErrorModalProps) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  return (
    portalRoot &&
    createPortal(
      <div
        onClick={handleClose}
        className='fixed inset-0 flex justify-center items-center size-full bg-overlay z-modal'>
        <section className='relative flex flex-col items-center justify-center gap-9 pt-10 px-8 w-[320px] h-[200px] z-modal bg-sub-medium shadow-2xl rounded-[20px]'>
          <span className='font-tiny text-center'>{errMessage}</span>
          <Button fontStyle='font-tiny' bgColor='gray' className='w-[88px] grow-0 text-neutral-300' onClick={onClose}>
            확인
          </Button>
        </section>
      </div>,
      document.body,
    )
  );
}
