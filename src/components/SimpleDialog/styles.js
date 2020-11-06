import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    "& > * ": {
      padding: "60px 20px 20px 20px",
      [theme.breakpoints.only("xs")]: {
        padding: "26px 0 0 0",
      },
    },
  },
  button: {
    height: "50px",
    borderRadius: "41px",
    color: "#fff",
    backgroundColor: theme.palette.secondary.main,
    width: "202px",
    boxSizing: "border-box",
  },
}));
