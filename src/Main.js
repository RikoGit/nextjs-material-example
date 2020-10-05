import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
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
    padding: theme.spacing(1),
    background: theme.palette.background.main,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
    color: "#fff",
    [theme.breakpoints.only("xs")]: {
      margin: "0 0 10px 0",
    },
  },
  itemtitle: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  account: {
    overflow: "hidden",
  },
  title: {
    fontWeight: "600",
    fontSize: "30px",
    lineHeight: "41px",
    [theme.breakpoints.only("xs")]: {
      fontSize: "14px",
    },
    textOverflow: "ellipses",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    [theme.breakpoints.only("xs")]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
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
        alignItems="center"
      >
        <Grid item className={classes.account}>
          <Grid container alignItems="center" spacing={3} wrap="nowrap">
            <Grid item>
              <Avatar
                alt="avatar-icon"
                src="/static/images/icon.png"
                className={classes.large}
              />
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
