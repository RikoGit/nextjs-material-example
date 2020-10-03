import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#00BFA5",
      main: "#01BDA7",
    },
    secondary: {
      main: "#359FF4",
    },
    textPrimary: {
      main: "#fff",
    },
    textSecondary: {
      main: "#313131",
    },
    error: {
      main: "#EB5757",
    },
    background: {
      paper: "#fff",
      main: "linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)",
    },
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
    },
  },
});

export default theme;
