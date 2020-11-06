import React from "react";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import CreateIcon from "@material-ui/icons/Create";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";

import useStyles from "./styles.js";

const IconLabelButtons = ({ isEdit, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="text"
        className={classes.button}
        endIcon={isEdit ? <CloseIcon /> : <CreateIcon />}
        onClick={onClick}
      >
        <Hidden only="xs">{isEdit ? "ЗАКРЫТЬ" : "РЕДАКТИРОВАТЬ"}</Hidden>
      </Button>
    </div>
  );
};

export default withWidth()(IconLabelButtons);
