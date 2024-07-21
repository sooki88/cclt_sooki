import React from "react";
import { CalcProvider } from "@/src/context/CalcContext";
import CalcContent from "./CalcContent";

export default function Calculator() {
  return (
    <CalcProvider>
      <CalcContent />
    </CalcProvider>
  );
}
