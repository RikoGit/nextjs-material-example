import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: "none",
    background: "none",
  },
  toolbar: {
    margin: "0 0 29px 0",
    padding: "0",
    [theme.breakpoints.only("xs")]: {
      margin: "0 0 5px 0",
    },
  },
  title: {
    color: "#fff",
    padding: "77px 20px 8px 0",
    [theme.breakpoints.only("xs")]: {
      padding: "60px 20px 5px 0",
    },
  },
  breadcrumb: {
    color: "#fff",
    "& .MuiTypography-root": {
      color: "#fff",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "19px",
    },
    [theme.breakpoints.only("xs")]: {
      "& .MuiTypography-root": {
        fontSize: "12px",
        lineHeight: "16px",
      },
    },
  },
  icon: {
    color: "#fff",
    margin: theme.spacing(0, 1),
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(0),
      "& svg": {
        fontSize: "24px",
      },
    },
  },
  accountIconButton: {
    margin: theme.spacing(0, 1),
    marginLeft: "14px",
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(0),
      minWidth: "auto",
      "& .MuiButton-iconSizeMedium": {
        margin: 0,
      },
    },
  },
  divider: {
    background: "#fff",
  },
  buttongroup: {
    color: "#fff",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
    width: "261px",
    height: "39px",
    [theme.breakpoints.only("xs")]: {
      marginTop: "17px",
      marginRight: "-6px",
      width: "auto",
      height: "24px",
    },
  },
  buttontext: {
    paddingLeft: "12px",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "19px",
    color: "#fff",
    textTransform: "none",
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    [theme.breakpoints.only("xs")]: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  },
}));
