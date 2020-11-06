import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginRight: "-3px",
    [theme.breakpoints.only("xs")]: {
      marginRight: "17px",
    },
  },
  button: {
    fontWeight: "600",
    lineHeight: "19px",
    margin: theme.spacing(1),
    color: "#fff",
    [theme.breakpoints.only("xs")]: {
      padding: 0,
      margin: 0,
      minWidth: 0,
    },
  },
}));
