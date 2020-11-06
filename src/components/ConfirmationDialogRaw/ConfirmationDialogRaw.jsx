import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import SimpleDialog from "../SimpleDialog/SimpleDialog.jsx";
import useStyles from "./styles.js";

function ConfirmationDialogRaw(props) {
  const classes = useStyles();
  const {
    onClose,
    value: valueProp,
    open,
    isSimpleDialogOpen,
    onSimpleDialogClose,
    data,
    dispatchHandleOk,
    ...other
  } = props;

  // const [value, setValue] = useState(valueProp);

  /*useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);
  */
  /*  async function handleOk() {
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
  */

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title" className={classes.title}>
        <Typography variant="caption" noWrap>
          Сохранить изменения?
        </Typography>
      </DialogTitle>
      <DialogActions>
        <Grid container direction="column">
          <Grid item className={classes.item}>
            <Button
              autoFocus
              className={classes.buttonOk}
              onClick={dispatchHandleOk}
              variant="contained"
              disableElevation
            >
              Сохранить
            </Button>
            <SimpleDialog
              open={isSimpleDialogOpen}
              onClose={onSimpleDialogClose}
              classes={{
                paper: classes.paper,
              }}
            />
          </Grid>
          <Grid item className={classes.item}>
            <Button
              onClick={onClose}
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
          onClick={onClose}
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
  // value: PropTypes.string.isRequired,
};

export default ConfirmationDialogRaw;
