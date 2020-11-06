import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Header from "../src/components/Header/Header.jsx";
import Main from "../src/components/Main/Main.jsx";
import {
  setUser,
  setEditForm,
  onBlur,
  onChange,
  setConfirmationDialogRawOpen,
  setConfirmationDialogRawClose,
  setSimpleDialogClose,
} from "../src/actions.js";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    maxWidth: "1365px",
    minHeight: "100vh",
    overflow: "hidden",
  },
  root__bg: {
    position: "absolute",
    top: 0,
    height: "100%",
    backgroundImage: `url(${"/static/images/Rectangle.png"})`,
    backgroundRepeat: "no-repeat",
    zIndex: -1,
    [theme.breakpoints.only("xs")]: {
      backgroundSize: "100% 199px",
      backgroundRepeat: "no-repeat",
    },
  },
  container: {
    padding: "0 23px 0 34px",
    [theme.breakpoints.only("xs")]: {
      padding: "0 10px 0 10px",
    },
  },
}));

const Index = ({
  user,
  isEdit,
  isConfirmationDialogRawOpen,
  isSimpleDialogOpen,
  form,
  dispatchSetUser,
  dispatchSetEditForm,
  dispatchOnChange,
  dispatchOnBlur,
  dispatchSetConfirmationDialogRawOpen,
  dispatchSetConfirmationDialogRawClose,
  dispatchSetSimpleDialogClose,
}) => {
  const classes = useStyles();

  return (
    <Container className={classes.root} disableGutters>
      <Grid container className={classes.root__bg} />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Header name={user.name} />
        <Main
          user={user}
          isEdit={isEdit}
          form={form}
          handleOk={dispatchSetUser}
          onClick={dispatchSetEditForm}
          onChange={dispatchOnChange}
          onBlur={dispatchOnBlur}
          isConfirmationDialogRawOpen={isConfirmationDialogRawOpen}
          onConfirmationDialogRawOpen={dispatchSetConfirmationDialogRawOpen}
          onConfirmationDialogRawClose={dispatchSetConfirmationDialogRawClose}
          isSimpleDialogOpen={isSimpleDialogOpen}
          onSimpleDialogClose={dispatchSetSimpleDialogClose}
        />
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {
  dispatchSetUser: setUser,
  dispatchSetEditForm: setEditForm,
  dispatchOnChange: onChange,
  dispatchOnBlur: onBlur,
  dispatchSetConfirmationDialogRawOpen: setConfirmationDialogRawOpen,
  dispatchSetConfirmationDialogRawClose: setConfirmationDialogRawClose,
  dispatchSetSimpleDialogClose: setSimpleDialogClose,
})(Index);
