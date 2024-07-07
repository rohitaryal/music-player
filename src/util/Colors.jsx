import { createContext, useContext, useState } from "react";

const colors = {
  primary: "#cfdbd5",
  secondary: "#e8eddf",
  accent: "#f5cb5c",
  background: "#242423",
  text: "#333533",
};

const ColorContext = createContext(null);

export const Colors = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  return (
    <ColorContext.Provider value={{colors}}>{children}</ColorContext.Provider>
  );
};
