import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import withWidth from "@material-ui/core/withWidth";

import ConfirmationDialog from "./ConfirmationDialog";
import Field from "./Field";
import fields from "./fields";
import validate from "./utils/validate";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    margin: "0",
    padding: "0 0 44px 0",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.palette.boxShadow,
    borderRadius: theme.palette.borderRadius,
  },
  container: {
    padding: "26px 70px 24px 30px",
    [theme.breakpoints.only("xs")]: {
      padding: "26px 23px 0",
    },
  },
}));

const Form = ({ store, dispatchHandleOk }) => {
  const classes = useStyles();

  const [form, setForm] = useState(store);

  const [validation, setValidation] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: true }), {})
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isBlured, setIsBlured] = useState(false);

  let isValid = false;

  if (isSubmitted || isBlured) {
    if (!Object.values(form).every((field) => field === "")) {
      //not required field
      isValid = Object.values(validation).every(Boolean);
    }
  }

  const validateForm = () => {
    const newValidation = {};
    fields.forEach((field) => {
      newValidation[field.name] = validate(
        form[field.name],
        field.validateOptions
      );
    });
    setValidation(newValidation);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    validateForm();
  };

  const onBlur = () => {
    setIsBlured(true);
    validateForm();
  };

  return (
    <form action="#" className={classes.root} onSubmit={onSubmit}>
      <Paper className={classes.paper}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
          className={classes.container}
        >
          {fields.map((field, index, array) => {
            const isLast = Boolean(index === array.length - 1);
            return (
              <Field
                field={field}
                key={field.name}
                value={form[field.name]}
                onBlur={onBlur}
                onChange={(event) => {
                  setForm({ ...form, [field.name]: event.target.value });
                }}
                isLast={isLast}
                error={!validation[field.name]}
                helperText={!validation[field.name] && field.helperText}
              />
            );
          })}
        </Grid>
        <ConfirmationDialog
          isDisabled={!isValid}
          data={form}
          dispatchHandleOk={dispatchHandleOk}
        />
      </Paper>
    </form>
  );
};

export default withWidth()(Form);
