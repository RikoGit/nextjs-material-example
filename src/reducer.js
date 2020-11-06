import {
  SET_USER,
  SET_EDIT_FORM,
  ON_SUBMIT,
  ON_CHANGE,
  ON_BLUR,
  SET_CONFIRMATION_DIALOG_RAW_OPEN,
  SET_CONFIRMATION_DIALOG_RAW_CLOSE,
  SET_SIMPLE_DIALOG_CLOSE,
} from "./actions.js";
import fields from "./fields.js";
import validate from "./utils/validate.js";

export default (state, { type, payload }) => {
  switch (type) {
    case SET_USER: {
      const { name, email, phone } = state.form;

      return {
        ...state,
        user: {
          ...state.user,
          name: name.value,
          email: email.value,
          phone: phone.value,
        },
        isConfirmationDialogRawOpen: false,
        isSimpleDialogOpen: true,
      };
    }

    case SET_CONFIRMATION_DIALOG_RAW_OPEN: {
      return {
        ...state,
        isConfirmationDialogRawOpen: true,
      };
    }

    case SET_CONFIRMATION_DIALOG_RAW_CLOSE: {
      return {
        ...state,
        isConfirmationDialogRawOpen: false,
      };
    }

    case SET_SIMPLE_DIALOG_CLOSE: {
      return {
        ...state,
        isSimpleDialogOpen: false,
      };
    }

    case SET_EDIT_FORM: {
      return {
        ...state,
        isEdit: !state.isEdit,
      };
    }

    case ON_CHANGE: {
      return {
        ...state,
        form: {
          ...state.form,
          [payload]: { ...state.form[payload], value: event.target.value },
        },
      };
    }

    case ON_SUBMIT: {
      return {
        ...state,
        isEdit: !state.isEdit,
      };
    }

    case ON_BLUR: {
      let newForm = {};
      for (let key in state.form) {
        console.log(state.form[key]);
        newForm[key] = {
          value: state.form[key].value,
          isValid: validate(
            state.form[key].value,
            fields.find((field) => field.name === key).validateOptions
          ),
        };
      }
      console.log(newForm);
      return {
        ...state,
        form: newForm,
      };
    }

    /*      const onSubmit = (event) => {
        event.preventDefault();
        //   setIsSubmitted(true);
        //   validateForm();
      };
 const validateForm = () => {
    const newValidation = {};
    fields.forEach((field) => {
      newValidation[field.name] = validate(
        form[field.name],
        field.validateOptions
      );
    });
    setValidation(newValidation);

      const onBlur = () => {
        //    setIsBlured(true);
        //    validateForm();
      };
*/

    default:
      return state;
  }
};
