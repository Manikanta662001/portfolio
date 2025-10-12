import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";

const details = [
  { icon: <EmailIcon />, value: "gundlurimanikanta142@gmail.com" },
  { icon: <CallIcon />, value: "+91 7396638214" },
  { icon: <PlaceIcon />, value: "Hyderabad, India" },
];
function Contactme() {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery("(max-width: 600px)");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showError, setShowError] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    const isFieldsNotFilled =
      !formData.name || !formData.email || !formData.message;
    if (isFieldsNotFilled) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 4000);
    }
  };
  return (
    <Box
      id="contact me"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "justify",
        minHeight: "100vh",
        maxWidth: "80%",
        margin: "auto",
        px: 3,
      }}
    >
      <Typography
        variant="h2"
        fontWeight={"bold"}
        color="primary.main"
        sx={{ textShadow: `0px 4px 20px ${theme.palette.neutral.mediumMain}` }}
        gutterBottom
      >
        Contact me
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobileScreen ? "column" : "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ width: isMobileScreen ? "100%" : "50%", px: 2 }}>
          <Typography
            variant="h3"
            fontWeight={"bold"}
            color="primary.main"
            sx={{}}
            gutterBottom
          >
            Let's talk
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.secondary, lineHeight: 1.7, mb: 3 }}
          >
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. you
            can contact any time.
          </Typography>
          {details.map((detail) => (
            <Box
              display={"flex"}
              gap={"1rem"}
              mb={1}
              color={theme.palette.text.secondary}
            >
              {detail.icon}
              <Typography variant="p">{detail.value}</Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            width: isMobileScreen ? "100%" : "50%",
            px: 2,
            textAlign: "center",
          }}
        >
          <TextField
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{
              backgroundColor: theme.palette.background.alt,
              mb: 2,
              borderRadius: "10px",
            }}
            InputProps={{
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              },
            }}
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{
              backgroundColor: theme.palette.background.alt,
              mb: 2,
              borderRadius: "10px",
            }}
            InputProps={{
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              },
            }}
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            sx={{
              backgroundColor: theme.palette.background.alt,
              mb: 2,
              borderRadius: "10px",
            }}
            InputProps={{
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              },
            }}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
          />
          {showError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              Please Fill All Fields
            </Alert>
          )}
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contactme;
