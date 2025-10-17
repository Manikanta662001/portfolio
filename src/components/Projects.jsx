import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

function Projects() {
  const theme = useTheme();
  return (
    <Box
      id="projects"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "justify",
        minHeight: "90vh",
        px: 3,
        marginTop: "2rem",
        scrollMarginTop: "85px",
      }}
    >
      <Typography
        variant="h3"
        fontWeight={"bold"}
        color="primary.main"
        gutterBottom
        sx={{
          textShadow: `0px 4px 20px ${theme.palette.neutral.mediumMain}`,
          py: 2,
        }}
      >
        Projects
      </Typography>
      <Box
        maxWidth={"900px"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <Card
          sx={{
            maxWidth: 270,
            boxShadow: `0px 4px 20px ${theme.palette.neutral.light}`,
          }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image="/social-media-image.PNG"
            title="social-media"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Social Media Application
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", pb: 1 }}>
              This is the project which looks similar like Social Media
              Applications. In this you can create your own account and if you
              need you can post something and also update and like the other
              users posts also comments that posts and also chat with friends.
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", wordBreak: "break-all" }}
            >
              Live-URL:{" "}
              <Typography
                component="a"
                sx={{
                  color: "primary.main",
                  textDecoration: "underline",
                  "&:hover": {
                    color: "primary.dark",
                    cursor: "pointer",
                  },
                }}
                href="https://manikanta662001.github.io/social-media-client/"
                target="_blank"
              >
                https://manikanta662001.github.io/social-media-client/
              </Typography>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Projects;
