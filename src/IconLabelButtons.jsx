import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
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
