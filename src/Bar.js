import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AppBar from "@material-ui/core/AppBar";
import IconLabelButtons from "./IconLabelButtons";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(2),
    background: theme.palette.background.main,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
    color: "#fff",
    marginBottom: "24px",
  },
  container: {
    flexGrow: 1,
  },
  title: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "30px",
    lineHeight: "41px",
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Grid container className={classes.container} spacing={4}>
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
