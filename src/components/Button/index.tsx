import React, { ReactNode } from "react";

interface ButtonProps {
  fontStyle: "font-small" | "font-base" | "font-large";
  bgColor: "main" | "gray" | "navy";
  hasImage?: boolean;
  className?: string;
  onClick: () => void;
  children: ReactNode;
}
export default function Button({ fontStyle, bgColor, hasImage = false, className, onClick, children }: ButtonProps) {
  const getBgColor = bgColor === "main" ? "bg-main" : bgColor === "gray" ? "bg-neutral-200" : "bg-sub-medium";

  return (
    <button
      className={`flex items-center justify-center h-[45px] rounded-full drop-shadow-default grow ${fontStyle} ${getBgColor} ${!hasImage && "pt-1"} ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
}
