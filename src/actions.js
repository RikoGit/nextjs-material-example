export const SET_USER = "SET_USER";
export const SET_EDIT_FORM = "SET_EDIT_FORM";
export const ON_SUBMIT = "ON_SUBMIT";
export const ON_CHANGE = "ON_CHANGE";
export const ON_BLUR = "ON_BLUR";
export const SET_CONFIRMATION_DIALOG_RAW_OPEN =
  "SET_CONFIRMATION_DIALOG_RAW_OPEN";
export const SET_CONFIRMATION_DIALOG_RAW_CLOSE =
  "SET_CONFIRMATION_DIALOG_RAW_CLOSE";
//export const SET_SIMPLE_DIALOG_OPEN = "SET_SIMPLE_DIALOG_OPEN";
export const SET_SIMPLE_DIALOG_CLOSE = "SET_SIMPLE_DIALOG_CLOSE";

export const setConfirmationDialogRawOpen = () => ({
  type: SET_CONFIRMATION_DIALOG_RAW_OPEN,
});

export const setConfirmationDialogRawClose = () => ({
  type: SET_CONFIRMATION_DIALOG_RAW_CLOSE,
});

//export const setSimpleDialogOpen = () => ({
//  type: SET_SIMPLE_DIALOG_OPEN,
//});

export const setSimpleDialogClose = () => ({
  type: SET_SIMPLE_DIALOG_CLOSE,
});

export const onChange = (fieldName) => ({
  type: ON_CHANGE,
  payload: fieldName,
});

export const onBlur = () => ({
  type: ON_BLUR,
});

export const onSubmit = () => ({
  type: ON_SUBMIT,
});

export const setEditForm = () => ({
  type: SET_EDIT_FORM,
});

export const setUser = () => ({
  type: SET_USER,
});
