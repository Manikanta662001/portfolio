import React, { createContext, useContext, useState } from "react";

const ModeContext = createContext();
const ModeContextWrapper = ({ children }) => {
  const [mode, setMode] = useState("light");
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};
export default ModeContextWrapper;
export const useModeContext = () => useContext(ModeContext);
