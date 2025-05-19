import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#021E3D",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#4A5E7B",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#163352",
      secondary: "#4A5E7B",
    },
    success: {
      main: "#87D0AC",
    },
    divider: "#E0E0E0",
  },
  fontFamily: ["Poppins", "Roboto", "Helvetica", "Arial", "sans-serif"],
});

export default theme;
