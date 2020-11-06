import React from "react";
import Button from "@material-ui/core/Button";

import ConfirmationDialogRaw from "../ConfirmationDialogRaw/ConfirmationDialogRaw.jsx";
import useStyles from "./styles.js";

const ConfirmationDialog = ({
  isDisabled,
  data,
  dispatchHandleOk,
  isOpen,
  onClick,
  onClose,
  isSimpleDialogOpen,
  onSimpleDialogClose,
}) => {
  const classes = useStyles();

  // const [value, setValue] = useState("test");

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        variant="contained"
        disableElevation
        aria-haspopup="true"
        aria-controls="save"
        aria-label="save button"
        onClick={onClick}
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
        open={isOpen}
        onClose={onClose}
        isSimpleDialogOpen={isSimpleDialogOpen}
        onSimpleDialogClose={onSimpleDialogClose}
        // value={value}
        data={data}
        dispatchHandleOk={dispatchHandleOk}
      />
    </div>
  );
};

export default ConfirmationDialog;
