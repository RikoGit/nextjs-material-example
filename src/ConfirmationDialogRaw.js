import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import SimpleDialog from "./SimpleDialog";

const useStyles = makeStyles((theme) => ({
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
    },
  },
  title: {
    "& > * ": {
      padding: "60px 20px 20px 20px",
      color: "rgba(49, 49, 49, 0.7)",
    },
  },
  buttonOk: {
    backgroundColor: theme.palette.secondary.main,
    fontWeight: "600",
    width: "202px",
    height: "49px",
    fontSize: "12px",
    borderRadius: "41px",
    boxSizing: "border-box",
    color: "#FFFFFF",
  },
  buttonCancel: {
    fontWeight: "600",
    width: "202px",
    height: "49px",
    borderRadius: "41px",
    fontSize: "12px",
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

function ConfirmationDialogRaw(props) {
  const classes = useStyles();
  const { onClose, value: valueProp, open, data, ...other } = props;
  const [value, setValue] = useState(valueProp);
  const [openTest, setOpenTest] = useState(false);

  useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleCancel = () => {
    onClose();
  };
  const handleClose = () => {
    setOpenTest(false);
  };

  async function handleOk() {
    const accountData = JSON.stringify(data);
    localStorage.accountData = accountData;
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: accountData,
          headers: {
            "Content-Type": "application/json",
            "x-token-access": "random",
          },
        }
      );
      const result = await response.json();
    } catch (error) {
      console.error("Ошибка:", error);
    }
    onClose(value);
    setOpenTest(true);
  }

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle
        id="confirmation-dialog-title"
        variant="h3"
        className={classes.title}
      >
        Сохранить изменения?
      </DialogTitle>
      <DialogActions>
        <Grid container direction="column">
          <Grid item className={classes.item}>
            <Button
              autoFocus
              className={classes.buttonOk}
              onClick={handleOk}
              variant="contained"
              disableElevation
            >
              Сохранить
            </Button>
            <SimpleDialog
              open={openTest}
              onClose={handleClose}
              classes={{
                paper: classes.paper,
              }}
            />
          </Grid>
          <Grid item className={classes.item}>
            <Button
              onClick={handleCancel}
              variant="outlined"
              className={classes.buttonCancel}
            >
              Не сохранять
            </Button>
          </Grid>
        </Grid>
        <IconButton
          className={classes.close}
          aria-label="close"
          onClick={handleCancel}
        >
          <CloseIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default ConfirmationDialogRaw;
