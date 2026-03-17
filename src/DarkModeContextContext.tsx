import { createContext } from "react";

interface DarkModeContextProps {
  darkMode: boolean;
}

export const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined,
);
