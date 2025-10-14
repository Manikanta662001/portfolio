import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  Box,
  Button,
  IconButton,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Close, DarkMode, LightMode, Menu } from "@mui/icons-material";
import { useModeContext } from "../context/ModeContext";
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const tabs = [
  { label: "Home", id: "home" },
  { label: "About Me", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact me", id: "contact me" },
];
const Navbar = () => {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  const { mode, setMode } = useModeContext();

  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  console.log("THEME:::", theme, mode);
  return (
    <FlexBetween
      p="1rem 6%"
      sx={{
        backgroundColor: theme.palette.background.alt,
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color={theme.palette.primary.main}
        >
          Manikanta Gundluri
        </Typography>
      </FlexBetween>
      {isNonMobileScreen ? (
        <FlexBetween gap="2rem">
          {tabs.map((tab) => (
            <Typography
              key={tab.id}
              onClick={() => {
                const section = document.getElementById(tab.id);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              sx={{
                fontSize: "1rem",
                "&:hover": {
                  color: theme.palette.primary.main,
                  cursor: "pointer",
                },
              }}
            >
              {tab.label}
            </Typography>
          ))}
          <IconButton
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode
                sx={{ color: theme.palette.neutral.dark, fontSize: "25px" }}
              />
            )}
          </IconButton>
        </FlexBetween>
      ) : (
        <IconButton onClick={() => setIsMobileMenuToggled(true)}>
          <Menu />
        </IconButton>
      )}

      <Slide
        direction="left"
        in={isMobileMenuToggled}
        mountOnEnter
        unmountOnExit
      >
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={theme.palette.background.alt}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "1rem",
            }}
          >
            <IconButton onClick={() => setIsMobileMenuToggled(false)}>
              <Close />
            </IconButton>
          </Box>
          <FlexBetween
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"2rem"}
          >
            {tabs.map((tab) => (
              <Typography
                key={tab.id}
                onClick={() => {
                  const section = document.getElementById(tab.id);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuToggled(false);
                  }
                }}
                sx={{
                  fontSize: "1rem",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    cursor: "pointer",
                  },
                }}
              >
                {tab.label}
              </Typography>
            ))}
          </FlexBetween>
        </Box>
      </Slide>
    </FlexBetween>
  );
};

export default Navbar;
