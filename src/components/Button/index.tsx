import React, { ReactNode } from "react";

interface ButtonProps {
  fontStyle: "font-tiny" | "font-small" | "font-base" | "font-large";
  bgColor: "main" | "gray" | "navy";
  hasImage?: boolean;
  className?: string;
  clicked?: boolean;
  onClick: () => void;
  children: ReactNode;
}
export default function Button({
  fontStyle,
  bgColor,
  hasImage = false,
  className,
  clicked = false,
  onClick,
  children,
}: ButtonProps) {
  const getBgColor = bgColor === "main" ? "bg-main" : bgColor === "gray" ? "bg-neutral-200" : "bg-sub-medium";

  return (
    <button
      className={`flex items-center justify-center h-[45px] rounded-full drop-shadow-default grow hover:bg-opacity-85 ${fontStyle} ${getBgColor} ${!hasImage && "pt-1"} ${clicked && "border border-neutral-100"} ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
}
