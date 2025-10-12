import { Box, Link, Typography, useTheme } from "@mui/material";
import React from "react";

function Aboutme() {
  const theme = useTheme();
  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "justify",
        minHeight: "100vh",
        px: 3,
      }}
    >
      <Typography
        variant="h3"
        fontWeight={"bold"}
        color="primary.main"
        sx={{ textShadow: `0px 4px 20px ${theme.palette.neutral.mediumMain}` }}
        gutterBottom
      >
        About me
      </Typography>
      <Box maxWidth={"650px"}>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.7,
            mb: 3,
          }}
        >
          I'm <strong>Manikanta Gundluri</strong>, a dedicated{" "}
          <strong>React.js Developer</strong> with a passion for creating
          responsive and high-performance web applications. I have 2.7 Years of
          Experience in building responsive, user-friendly web applications. I
          enjoy building clean, modern UIs and solving real-world problems with
          efficient, scalable code.I’ve worked extensively in the banking and
          financial domain, contributing to a credit card service platform that
          includes real-time customer-agent chat and personalized offer
          management.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.text.secondary, lineHeight: 1.7, mb: 3 }}
        >
          My core technologies include <strong>React.js</strong>,{" "}
          <strong>JavaScript (ES6+)</strong>, <strong>Node.js</strong>,{" "}
          <strong>Express</strong>, and <strong>MongoDB</strong>. I’m also
          comfortable working with modern design frameworks like{" "}
          <strong>Material UI</strong> and <strong>Tailwind CSS</strong>.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.text.secondary, lineHeight: 1.7, mb: 3 }}
        >
          When I’m not coding, I love exploring new technologies, improving my
          design sense, and contributing to open-source projects that make the
          web better.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}
        >
          Feel free to reach out to me on{" "}
          <Link
            href="https://www.linkedin.com/in/manikanta66/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>{" "}
          or via email at{" "}
          <Link href="mailto:gundlurimanikanta142@gmail.com">
            gundlurimanikanta142@gmail.com
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Aboutme;
