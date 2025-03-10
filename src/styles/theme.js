import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Enables dark mode
    primary: {
      main: "#90caf9", // Light blue
    },
    secondary: {
      main: "#f48fb1", // Pink
    },
    background: {
      default: "#121212", // Dark background
      paper: "#1e1e1e", // Darker card background
    },
    text: {
      primary: "#33beff", // 
      secondary: "#338aff", // 
    },
  },
});

export default theme;
