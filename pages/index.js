import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Header from "../src/Header.js";
import Main from "../src/Main.js";

export default function Index() {
  return (
    <Container>
      <Grid container direction="row" justify="center" alignItems="center">
        <Header />
        <Main />
      </Grid>
    </Container>
  );
}
