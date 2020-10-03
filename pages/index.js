import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Header from "../src/Header.js";
import Main from "../src/Main.js";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: "1481px",
    height: "470px",
    left: "-41px",
    top: "0px",
    background: "linear-gradient(270deg, #2196F3 0%, #1EC3AF 101.06%)",
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Header />
        <Main />
      </Grid>
    </Container>
  );
}
