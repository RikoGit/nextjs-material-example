import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import Grid from "@material-ui/core/Grid";
import PhoneIcon from "@material-ui/icons/Phone";
import TextField from "@material-ui/core/TextField";

import ButtonSave from "./ButtonSave";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const InfoEdit = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AssignmentIndIcon color="secondary" />
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
            <AlternateEmailIcon color="secondary" />
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
            <PhoneIcon color="secondary" />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="Номер телефона"
              defaultValue="Укажите номер телефона"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </div>
      <ButtonSave />
    </form>
  );
};

export default InfoEdit;
