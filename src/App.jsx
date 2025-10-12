import React, { useMemo } from "react";
import Navbar from "@/components/Navbar";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { themeSettings } from "./theme";
import { useModeContext } from "@/context/ModeContext";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contactme from "./components/Contactme";
function App() {
  const { mode, setMode } = useModeContext();
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Home />
        <Aboutme />
        <Skills />
        {/* <Projects /> */}
        <Contactme />
      </ThemeProvider>
    </>
  );
}

export default App;
