import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import CreateIcon from "@material-ui/icons/Create";

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

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="text"
        color="secondary"
        className={classes.button}
        endIcon={<CreateIcon />}
      >
        РЕДАКТИРОВАТЬ
      </Button>
      <Button
        variant="text"
        color="default"
        className={classes.button}
        endIcon={<CloseIcon />}
      >
        ЗАКРЫТЬ
      </Button>
    </div>
  );
}
