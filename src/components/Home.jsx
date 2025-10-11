import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import ManiImg from "../assets/mani.jpeg";

function Home() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          p: { xs: 3, sm: 5 },
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <Box mb={3}>
          <img
            src={ManiImg}
            width={"200px"}
            height={"200px"}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
            }}
          />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 1,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Hi, I'm Manikanta Gundluri
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "primary.main",
              mb: 2,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            React JS Developer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.6,
            }}
          >
            I am a React Js Developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
