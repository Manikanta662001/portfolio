import React, { useMemo } from "react";
import Navbar from "@/components/Navbar";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { themeSettings } from "./theme";
import { useModeContext } from "@/context/ModeContext";
import Home from "./components/Home";
function App() {
  const { mode, setMode } = useModeContext();
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
