import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#359FF4",
    },
    secondary: {
      light: "#00BFA5",
      main: "#01BDA7",
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
  typography: {
    fontFamily: "Open Sans",
    button: {
      color: "#fff",
      textTransform: "none",
      fontSize: "14px",
      lineHeight: "19px",
      fontWeight: "600",
    },
  },
});

theme.typography.h2 = {
  fontSize: "30px",
  fontWeight: "600",
  lineHeight: "41px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "14px",
    lineHeight: "19px",
  },
};

theme.typography.h3,
  (theme.typography.caption = {
    fontSize: "24px",
    lineHeight: "33px",
    fontWeight: "600",
    color: "rgba(49, 49, 49, 0.7)",
    [theme.breakpoints.only("xs")]: {
      fontSize: "18px",
      lineHeight: "25px",
    },
  });
theme.typography.h4 = {
  fontSize: "18px",
  lineHeight: "25px",
  fontWeight: "600",
  [theme.breakpoints.only("xs")]: {
    fontSize: "14px",
    lineHeight: "19px",
  },
};

export default theme;
