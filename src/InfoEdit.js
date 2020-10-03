import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PhoneIcon from "@material-ui/icons/Phone";
import TextField from "@material-ui/core/TextField";

import Popup from "./Popup";

const useStyles = makeStyles((theme) => ({
  root: {},
  icon: {
    color: theme.palette.primary.light,
  },
  paper: {
    margin: "0",
    padding: "0 0 44px 0",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.palette.boxShadow,
    borderRadius: theme.palette.borderRadius,
  },
  container: {
    padding: "26px 34px 29px 34px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textfield: {
    width: "254px",
    height: "57px",
  },
  divider: {
    backgroundColor: "#CAE7FE",
  },
}));

const InfoEdit = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Paper className={classes.paper}>
        <Grid container spacing={1} className={classes.container}>
          <Grid item>
            <AssignmentIndIcon fontSize="large" className={classes.icon} />
          </Grid>
          <Grid item>
            <TextField
              className={classes.textfield}
              error
              id="input-with-icon-grid"
              label="Фамилия и имя"
              defaultValue="Укажите ваши фамилию и имя"
              variant="outlined"
              helperText="Вы неверно указали имя"
            />
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
          <Grid item>
            <AlternateEmailIcon fontSize="large" className={classes.icon} />
          </Grid>
          <Grid item>
            <TextField
              className={classes.textfield}
              id="input-with-icon-grid"
              label="E-mail"
              defaultValue="Ivanova@mail.ru"
              variant="outlined"
            />
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
          <Grid item>
            <PhoneIcon fontSize="large" className={classes.icon} />
          </Grid>
          <Grid item>
            <TextField
              className={classes.textfield}
              id="input-with-icon-grid"
              label="Номер телефона"
              defaultValue="Укажите номер телефона"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Popup />
      </Paper>
    </form>
  );
};

export default InfoEdit;
