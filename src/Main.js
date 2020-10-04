import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconLabelButtons from "./IconLabelButtons";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Info from "./Info";
import Form from "./Form";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 0 40px 0",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    width: "100%",
  },
  container: {
    margin: "0 0 24px 0",
    flexWrap: "nowrap",
    width: "100%",
    padding: "23px 0 23px 16px",
    background: theme.palette.background.main,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
    color: "#fff",
  },
  itemtitle: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  title: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "30px",
    lineHeight: "41px",
    [theme.breakpoints.only("xs")]: {
      fontSize: "14px",
    },
  },
}));

const Main = () => {
  const classes = useStyles();

  const [isEdit, setIsEdit] = useState(false);

  const handleClick = (value) => {
    setIsEdit(value);
  };

  return (
    <main className={classes.root}>
      <Grid
        container
        className={classes.container}
        spacing={4}
        justify="space-between"
      >
        <Grid item>
          <Grid container alignItems="center" spacing={3} wrap="nowrap">
            <Grid item>
              <AccountCircle fontSize="large" />
            </Grid>
            <Grid item className={classes.itemtitle}>
              <Typography className={classes.title} variant="h6" noWrap>
                Иванова Анна Михайловна
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <IconLabelButtons isEdit={isEdit} onClick={handleClick} />
        </Grid>
      </Grid>
      {!isEdit && <Info />}
      {isEdit && <Form />}
    </main>
  );
};

export default Main;
