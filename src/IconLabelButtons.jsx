import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import CreateIcon from "@material-ui/icons/Create";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    fontFamily: "Open Sans",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "19px",
    margin: theme.spacing(1),
    color: "#fff",
  },
}));

const IconLabelButtons = ({ isEdit, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="text"
        className={classes.button}
        endIcon={isEdit ? <CloseIcon /> : <CreateIcon />}
        onClick={() => onClick(!isEdit)}
      >
        <Hidden only="xs">{isEdit ? "ЗАКРЫТЬ" : "РЕДАКТИРОВАТЬ"}</Hidden>
      </Button>
    </div>
  );
};

export default withWidth()(IconLabelButtons);
