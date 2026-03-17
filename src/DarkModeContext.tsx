import { useEffect } from "react";
import type { ReactNode } from "react";
import { DarkModeContext } from "./DarkModeContextContext";

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const darkMode = true;

  useEffect(() => {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
