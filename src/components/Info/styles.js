import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    margin: "0 0 24px 0",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.palette.boxShadow,
    borderRadius: theme.palette.borderRadius,
  },
  list: { padding: 0 },
  item: {
    padding: "29px 16px 25px 74px",
    [theme.breakpoints.only("xs")]: {
      padding: "20px 22px 16px 10px",
    },
  },
  icon: {
    color: theme.palette.secondary.light,
    [theme.breakpoints.only("xs")]: {
      fontSize: "20px",
    },
  },
  divider: {
    border: "1px solid #CAE7FE",
  },
  text: {
    "& > span": {
      fontSize: "18px",
      lineHeight: "25px",
      color: "#313131",
      overflow: "hidden",
      textOverflow: "ellipsis",
      [theme.breakpoints.only("xs")]: {
        fontSize: "14px",
        lineHeight: "19px",
      },
    },
  },
  avatar: {
    minWidth: "76px",
    [theme.breakpoints.only("xs")]: {
      minWidth: "31px",
    },
  },
}));
