import { Box } from "@mui/material";
import React from "react";

function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "justify",
        minHeight: "80vh",
        px: 3,
      }}
    ></Box>
  );
}

export default Projects;
