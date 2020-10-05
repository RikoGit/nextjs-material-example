import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  title: {
    "& > * ": {
      padding: "60px 20px 20px 20px",
      fontWeight: "600",
      fontSize: "24px",
      lineHeight: "33px",
      color: "rgba(49, 49, 49, 0.7)",
      [theme.breakpoints.only("xs")]: {
        padding: 0,
      },
    },
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    fontWeight: "600",
    width: "202px",
    height: "49px",
    fontSize: "12px",
    borderRadius: "41px",
    boxSizing: "border-box",
    color: "#FFFFFF",
  },
}));

const SimpleDialog = (props) => {
  const classes = useStyles();

  const { onClose, value: valueProp, open, ...other } = props;

  const handleOk = () => {
    onClose(true);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="simple-dialog-title" className={classes.title}>
        Данные успешно сохранены
      </DialogTitle>
      <Hidden only="xs">
        <Grid container justify="center">
          <Button
            autoFocus
            className={classes.button}
            onClick={handleOk}
            variant="contained"
            disableElevation
          >
            Хорошо
          </Button>
        </Grid>
      </Hidden>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default SimpleDialog;
