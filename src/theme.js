import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#00BFA5",
      main: "#01BDA7",
    },
    secondary: {
      main: "#1A78C2",
    },
    error: {
      main: "#EB5757",
    },
    background: {
      peper: "#000",
      main: "linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)",
    },
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    boxRadius: "10px",
  },
});

export default theme;
