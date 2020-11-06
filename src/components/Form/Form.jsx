import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import withWidth from "@material-ui/core/withWidth";

import ConfirmationDialog from "../ConfirmationDialog/ConfirmationDialog.jsx";
import Field from "../Field/Field.jsx";
import fields from "../../fields.js";

import useStyles from "./styles.js";

const Form = ({
  form,
  dispatchHandleOk,
  onChange,
  onBlur,
  isConfirmationDialogRawOpen,
  onConfirmationDialogRawOpen,
  onConfirmationDialogRawClose,
  isSimpleDialogOpen,
  onSimpleDialogClose,
}) => {
  const classes = useStyles();

  /*
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
  */

  const onSubmit = (event) => {
    event.preventDefault();
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
                value={form[field.name].value}
                onBlur={onBlur}
                onChange={() => onChange(field.name)}
                isLast={isLast}
                error={!form[field.name].isValid}
                helperText={!form[field.name].isValid && field.helperText}
              />
            );
          })}
        </Grid>
        <ConfirmationDialog
          //isDisabled={!isValid}
          data={form}
          dispatchHandleOk={dispatchHandleOk}
          isOpen={isConfirmationDialogRawOpen}
          onClick={onConfirmationDialogRawOpen}
          onClose={onConfirmationDialogRawClose}
          isSimpleDialogOpen={isSimpleDialogOpen}
          onSimpleDialogClose={onSimpleDialogClose}
        />
      </Paper>
    </form>
  );
};

export default withWidth()(Form);
