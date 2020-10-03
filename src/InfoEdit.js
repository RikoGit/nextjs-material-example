import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PhoneIcon from "@material-ui/icons/Phone";
import TextField from "@material-ui/core/TextField";

import ButtonSave from "./ButtonSave";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  icon: {
    color: theme.palette.primary.light,
  },
  paper: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

const InfoEdit = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Paper className={classes.paper}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AssignmentIndIcon className={classes.icon} />
          </Grid>
          <Grid item>
            <TextField
              error
              id="input-with-icon-grid"
              label="Фамилия и имя"
              defaultValue="Укажите ваши фамилию и имя"
              variant="outlined"
              helperText="Вы неверно указали имя"
            />
          </Grid>
          <Grid item>
            <AlternateEmailIcon className={classes.icon} />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="E-mail"
              defaultValue="Ivanova@mail.ru"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <PhoneIcon className={classes.icon} />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="Номер телефона"
              defaultValue="Укажите номер телефона"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <ButtonSave />
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default InfoEdit;
