import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AppBar from "@material-ui/core/AppBar";
import IconLabelButtons from "./IconLabelButtons";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.control}>
      <Grid container className={classes.root} spacing={4}>
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item>
          <Typography className={classes.title} variant="h6" noWrap>
            Иванова Анна Михайловна
          </Typography>
        </Grid>
        <Grid item>
          <IconLabelButtons />
        </Grid>
      </Grid>
    </AppBar>
  );
}
