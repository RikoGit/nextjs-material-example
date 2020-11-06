import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    margin: "0 0 40px 0",
    [theme.breakpoints.only("xs")]: {
      margin: "0 0 10px 0",
    },
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    width: "100%",
  },
  container: {
    margin: "0 0 24px 0",
    padding: "16px 16px 16px 18px",
    flexWrap: "nowrap",
    width: "100%",
    height: "128px",
    background: theme.palette.background.main,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
    color: "#fff",
    [theme.breakpoints.only("xs")]: {
      margin: "0 0 10px 0",
      padding: 0,
      height: "71px",
    },
  },
  itemtitle: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  account: {
    overflow: "hidden",
    [theme.breakpoints.only("xs")]: {
      padding: "16px 0 15px 10px",
    },
  },
  account__container: {
    padding: "12px",
    [theme.breakpoints.only("xs")]: {
      padding: 0,
    },
  },
  title: {
    paddingLeft: "42px",
    [theme.breakpoints.only("xs")]: {
      paddingLeft: "11px",
    },
    textOverflow: "ellipses",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    [theme.breakpoints.only("xs")]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  },
}));
