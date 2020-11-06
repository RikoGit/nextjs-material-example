import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: "-11px",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    textAlign: "center",
  },
  paper: {
    position: "absolute",
    top: "220px",
    width: "600px",
    maxWidth: "600px",
    height: "318px",
    maxHeight: 435,
    borderRadius: theme.palette.borderRadius,
    textAlign: "center",
    border: "none",
    boxShadow: "none",
    [theme.breakpoints.only("xs")]: {
      margin: "0",
      bottom: "0",
      height: "426px",
      top: "auto",
      width: "100%",
      borderRadius: "20px 20px 0 0",
    },
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    width: "212px",
    height: "49px",
    borderRadius: "36px",
    color: "#FFFFFF",
  },
}));
