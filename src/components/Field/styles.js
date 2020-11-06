import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  icon: {
    margin: "5px 18px 0 0",
    color: theme.palette.secondary.light,
  },
  item: {
    flexGrow: 1,
    [theme.breakpoints.only("xs")]: {
      margin: "0 0 39px 0",
      flexGrow: "1",
    },
  },
  textfield: {
    height: "57px",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  divider: {
    margin: "0 32px 0 77px",
    backgroundColor: "#CAE7FE",
  },
  field: {
    padding: "23px 0",
    width: "auto",
    flexGrow: 1,
    flexBasis: "auto",
    [theme.breakpoints.only("xs")]: {
      padding: 0,
    },
  },
  textField: {
    width: "100%",
    "& .MuiFormHelperText-root": {
      position: "absolute",
      bottom: "-24px",
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: "normal",
    },
  },
}));
