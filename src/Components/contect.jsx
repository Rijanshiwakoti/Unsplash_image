import React from "react";
import { useState, useEffect } from "react";
import { useContext, createContext } from "react";
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const getModeFromLocalStorage = () => {
  const mode = localStorage.getItem("mode");
  if (mode === "false") return false;
  else return true;
};
const Context = ({ children }) => {
  const [isDark, setIsDark] = useState(getModeFromLocalStorage);
  console.log(isDark);
  const [searchValue, setSearchValue] = useState("spider-man");
  const toggleDarkTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem("mode", newMode);
  };
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
  }, [isDark]);
  const value = {
    toggleDarkTheme,
    isDark,
    searchValue,
    setSearchValue,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default Context;
