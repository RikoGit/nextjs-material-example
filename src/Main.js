import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Bar from "./Bar";
import Info from "./Info";
import InfoEdit from "./InfoEdit";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1),
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
