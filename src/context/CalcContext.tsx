import React, { createContext, useContext, useState, ReactNode } from "react";

interface CalcContextProps {
  clicked: (string | number)[];
  setClicked: React.Dispatch<React.SetStateAction<(string | number)[]>>;
  errMessage: string | null;
  setErrMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

interface CalcProviderProps {
  children: ReactNode;
}

const CalcContext = createContext<CalcContextProps>({
  clicked: [],
  setClicked: () => [],
  errMessage: null,
  setErrMessage: () => null,
});

export const useCalcContext = () => useContext(CalcContext);

export const CalcProvider: React.FC<CalcProviderProps> = ({ children }) => {
  const [clicked, setClicked] = useState<(string | number)[]>([]);
  const [errMessage, setErrMessage] = useState<string | null>(null);

  return (
    <CalcContext.Provider value={{ clicked, setClicked, errMessage, setErrMessage }}>{children}</CalcContext.Provider>
  );
};

export default CalcContext;
