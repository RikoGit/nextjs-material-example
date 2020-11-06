import React from "react";
import Avatar from "@material-ui/core/Avatar";
import IconLabelButtons from "../IconLabelButtons/IconLabelButtons";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Info from "../Info/Info.jsx";
import Form from "../Form/Form.jsx";

import useStyles from "./styles.js";

const Main = ({
  user,
  form,
  handleOk,
  onClick,
  isEdit,
  onChange,
  onBlur,
  isConfirmationDialogRawOpen,
  onConfirmationDialogRawOpen,
  onConfirmationDialogRawClose,
  isSimpleDialogOpen,
  onSimpleDialogClose,
}) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Grid
        container
        className={classes.container}
        justify="space-between"
        alignItems="center"
      >
        <Grid item className={classes.account}>
          <Grid
            container
            alignItems="center"
            className={classes.account__container}
            wrap="nowrap"
          >
            <Grid item>
              <Avatar
                alt="avatar-icon"
                src="/static/images/icon.png"
                className={classes.large}
              />
            </Grid>
            <Grid item className={classes.itemtitle}>
              <Typography className={classes.title} variant="h2" noWrap>
                {user.name}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <IconLabelButtons isEdit={isEdit} onClick={onClick} />
        </Grid>
      </Grid>
      {!isEdit && <Info email={user.email} phone={user.phone} />}
      {isEdit && (
        <Form
          dispatchHandleOk={handleOk}
          form={form}
          onChange={onChange}
          onBlur={onBlur}
          isConfirmationDialogRawOpen={isConfirmationDialogRawOpen}
          onConfirmationDialogRawOpen={onConfirmationDialogRawOpen}
          onConfirmationDialogRawClose={onConfirmationDialogRawClose}
          isSimpleDialogOpen={isSimpleDialogOpen}
          onSimpleDialogClose={onSimpleDialogClose}
        />
      )}
    </main>
  );
};

export default Main;
