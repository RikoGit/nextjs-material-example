import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Header from "../src/Header.js";
import Main from "../src/Main.js";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minWidth: "365px",
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

export default function Index() {
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
        <Header />
        <Main />
      </Grid>
    </Container>
  );
}
