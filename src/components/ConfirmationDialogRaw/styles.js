import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
      height: "83px",
      top: "auto",
      width: "100%",
      borderRadius: "20px 20px 0 0",
      "& .MuiDialogTitle-root": { padding: 0 },
    },
  },
  title: {
    "& > * ": {
      padding: "60px 20px 20px 20px",
      color: "rgba(49, 49, 49, 0.7)",
    },
  },
  buttonOk: {
    height: "50px",
    borderRadius: "41px",
    color: "#fff",
    backgroundColor: theme.palette.secondary.main,
    width: "202px",
    boxSizing: "border-box",
  },
  buttonCancel: {
    fontWeight: "600",
    width: "202px",
    height: "50px",
    borderRadius: "41px",
    border: "1px solid #00BFA5",
    boxSizing: "border-box",
    color: "#00BFA5",
  },
  item: {
    margin: "0 0 28px",
  },
  close: {
    position: "absolute",
    right: "17px",
    top: "17px",
  },
}));
