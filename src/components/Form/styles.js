import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {},
  paper: {
    margin: "0",
    padding: "0 0 44px 0",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.palette.boxShadow,
    borderRadius: theme.palette.borderRadius,
  },
  container: {
    padding: "26px 70px 24px 30px",
    [theme.breakpoints.only("xs")]: {
      padding: "26px 23px 0",
    },
  },
}));
