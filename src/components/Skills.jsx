import {
  Box,
  Card,
  CardContent,
  Chip,
  Slider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
const skillTypes = ["All", "Frontend", "Backend", "Tools"];
const frontendSkills = [
  { id: 1, title: "HTML/CSS", value: 90 },
  { id: 2, title: "JavaScript", value: 90 },
  { id: 3, title: "React", value: 90 },
  { id: 4, title: "Bootstrap", value: 90 },
  { id: 5, title: "Tailwind CSS", value: 90 },
  { id: 6, title: "MUI", value: 90 },
  { id: 7, title: "Sass", value: 90 },
];
const backendSkills = [
  { id: 8, title: "Node.js", value: 90 },
  { id: 9, title: "Express.js", value: 90 },
  { id: 10, title: "MongoDB", value: 90 },
];
const tools = [
  { id: 11, title: "Git/GitHub", value: 90 },
  { id: 12, title: "Postman", value: 90 },
  { id: 13, title: "VS Code", value: 90 },
];
function Skills() {
  const [selectedSkillType, setSelectedSkillType] = useState("All");
  const isMobileScreen = useMediaQuery("(max-width: 500px)");
  const theme = useTheme();
  return (
    <Box
      id="skills"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "justify",
        minHeight: "80vh",
        px: 3,
        scrollMarginTop: "80px",
      }}
    >
      <Typography
        variant="h3"
        fontWeight={"bold"}
        color="primary.main"
        gutterBottom
        sx={{ textShadow: `0px 4px 20px ${theme.palette.neutral.mediumMain}` }}
      >
        Skills
      </Typography>
      <Stack direction="row" spacing={1.5} py={2}>
        {skillTypes.map((type) => (
          <Chip
            key={type}
            label={type}
            color={type === selectedSkillType ? "primary" : "default"}
            clickable
            onClick={() => setSelectedSkillType(type)}
            sx={{
              fontWeight: "bold",
              py: "1rem",
            }}
          />
        ))}
      </Stack>
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
        {(selectedSkillType === "All" || selectedSkillType === "Frontend") &&
          frontendSkills.map((skill) => (
            <Card
              key={skill.id}
              sx={{
                width: isMobileScreen ? "40%" : "250px",
                boxShadow: `0px 4px 20px ${theme.palette.neutral.medium}`,
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {skill.title}
                </Typography>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={skill.value}
                  valueLabelDisplay="auto"
                />
                <Typography textAlign={"end"}>{skill.value}%</Typography>
              </CardContent>
            </Card>
          ))}
        {(selectedSkillType === "All" || selectedSkillType === "Backend") &&
          backendSkills.map((skill) => (
            <Card
              key={skill.id}
              sx={{
                width: isMobileScreen ? "40%" : "250px",
                boxShadow: `0px 4px 20px ${theme.palette.neutral.medium}`,
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {skill.title}
                </Typography>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={skill.value}
                  valueLabelDisplay="auto"
                />
                <Typography textAlign={"end"}>{skill.value}%</Typography>
              </CardContent>
            </Card>
          ))}
        {(selectedSkillType === "All" || selectedSkillType === "Tools") &&
          tools.map((skill) => (
            <Card
              key={skill.id}
              sx={{
                width: isMobileScreen ? "40%" : "250px",
                boxShadow: `0px 4px 20px ${theme.palette.neutral.medium}`,
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {skill.title}
                </Typography>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={skill.value}
                  valueLabelDisplay="auto"
                />
                <Typography textAlign={"end"}>{skill.value}%</Typography>
              </CardContent>
            </Card>
          ))}
      </Box>
    </Box>
  );
}

export default Skills;
