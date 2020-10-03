import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconLabelButtons from "./IconLabelButtons";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Info from "./Info";
import InfoEdit from "./InfoEdit";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    width: "100%",
  },
  container: {
    margin: "0 0 24px 0",
    width: "100%",
    padding: theme.spacing(2),
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
  },
  button: {
    marginLeft: "auto",
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
      <Grid container className={classes.container} spacing={4}>
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item className={classes.itemtitle}>
          <Typography className={classes.title} variant="h6" noWrap>
            Иванова Анна Михайловна
          </Typography>
        </Grid>
        <Grid item className={classes.button}>
          <IconLabelButtons isEdit={isEdit} onClick={handleClick} />
        </Grid>
      </Grid>
      {!isEdit && <Info />}
      {isEdit && <InfoEdit />}
    </main>
  );
};

export default Main;
