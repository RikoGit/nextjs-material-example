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
    margin: "5px 18px 0 0",
    color: theme.palette.secondary.light,
  },
  item: {
    flexGrow: 1,
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
    margin: "0 32px 0 77px",
    backgroundColor: "#CAE7FE",
  },
  field: {
    padding: "23px 0",
    width: "auto",
    flexGrow: 1,
    flexBasis: "auto",
    [theme.breakpoints.only("xs")]: {
      padding: 0,
    },
  },
  textField: {
    width: "100%",
    "& .MuiFormHelperText-root": {
      position: "absolute",
      bottom: "-24px",
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: "normal",
    },
  },
}));

const Field = ({
  field,
  value,
  onBlur,
  onChange,
  error,
  helperText,
  isLast,
}) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} className={classes.field}>
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
              className={classes.textField}
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
