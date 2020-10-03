import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Bar from "./Bar";
import Info from "./Info";
import InfoEdit from "./InfoEdit";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Bar />
      <Info />
      <InfoEdit />
    </main>
  );
};

export default Main;
