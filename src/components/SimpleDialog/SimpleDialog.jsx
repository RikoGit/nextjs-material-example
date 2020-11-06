import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles.js";

const SimpleDialog = (props) => {
  const classes = useStyles();

  const { onClose, value: valueProp, open, ...other } = props;

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="simple-dialog-title" className={classes.title}>
        <Typography variant="caption" noWrap>
          Данные успешно сохранены
        </Typography>
      </DialogTitle>
      <Hidden only="xs">
        <Grid container justify="center">
          <Button
            autoFocus
            className={classes.button}
            onClick={onClose}
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
