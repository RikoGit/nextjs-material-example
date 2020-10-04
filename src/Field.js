import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import PhoneIcon from "@material-ui/icons/Phone";
import TextField from "@material-ui/core/TextField";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.secondary.light,
  },
  item: {
    [theme.breakpoints.only("xs")]: {
      margin: "0 0 39px 0",
      flexGrow: "1",
    },
  },
  textfield: {
    height: "57px",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  divider: {
    backgroundColor: "#CAE7FE",
  },
}));

const Field = ({
  field,
  value,
  onBlur,
  onChange,
  isLast,
  error,
  helperText,
}) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={3}>
        <Grid container alignItems="center" spacing={3} wrap="nowrap">
          <Hidden only="xs">
            <Grid item>{IconField(field.name, "large", classes.icon)}</Grid>
          </Hidden>
          <Grid item className={classes.item}>
            <TextField
              className={classes.textfield}
              name={field.name}
              label={field.label}
              placeholder={field.placeholder}
              variant="outlined"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={error}
              helperText={helperText}
            />
          </Grid>
        </Grid>
      </Grid>
      {!isLast && (
        <Hidden only="xs">
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
        </Hidden>
      )}
    </>
  );
};

const IconField = (fieldName, size, classname) => {
  switch (fieldName) {
    case "name": {
      return <AssignmentIndIcon fontSize={size} className={classname} />;
      break;
    }
    case "email": {
      return <AlternateEmailIcon fontSize={size} className={classname} />;
      break;
    }
    case "phone": {
      return <PhoneIcon fontSize={size} className={classname} />;
      break;
    }
    default:
      "";
  }
};

export default withWidth()(Field);
