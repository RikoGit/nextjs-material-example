import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import ConfirmationDialogRaw from "./ConfirmationDialogRaw";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    textAlign: "center",
  },
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
      height: "426px",
      top: "auto",
      width: "100%",
      borderRadius: "20px 20px 0 0",
    },
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    width: "212px",
    height: "49px",
    borderRadius: "36px",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "19px",
    color: "#FFFFFF",
  },
}));

const ConfirmationDialog = ({ isDisabled, data }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("test");

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        variant="contained"
        disableElevation
        aria-haspopup="true"
        aria-controls="save"
        aria-label="save button"
        onClick={handleClickListItem}
        type="submit"
        disabled={isDisabled}
      >
        Сохранить изменения
      </Button>
      <ConfirmationDialogRaw
        classes={{
          paper: classes.paper,
        }}
        id="save"
        keepMounted
        open={open}
        onClose={handleClose}
        value={value}
        data={data}
      />
    </div>
  );
};

export default ConfirmationDialog;
