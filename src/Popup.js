import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    textAlign: "center",
  },
  dialog: {},
  paper: {
    padding: "0 0 20px 0",
    position: "absolute",
    top: "220px",
    width: "600px",
    maxWidth: "600px",
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
  title: {
    "& > * ": {
      padding: "69px 20px 20px 20px",
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "24px",
      lineHeight: "33px",
      color: "rgba(49, 49, 49, 0.7)",
    },
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    width: "212px",
    height: "49px",
    borderRadius: "36px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "19px",
    color: "#FFFFFF",
  },
  buttonOk: {
    backgroundColor: theme.palette.secondary.main,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    width: "202px",
    height: "49px",
    fontSize: "12px",
    borderRadius: "41px",
    boxSizing: "border-box",
    color: "#FFFFFF",
  },
  buttonCancel: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
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
  const radioGroupRef = useRef(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    for (let key in data) {
      localStorage.setItem(key, data[key]);
    }
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      className={classes.dialog}
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title" className={classes.title}>
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

export default function ConfirmationDialog({ isDisabled, data }) {
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
}
