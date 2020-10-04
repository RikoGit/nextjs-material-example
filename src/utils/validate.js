const validate = (value, { type, validatePattern }) => {
  if (type === "name") {
  }

  if (type === "mail") {
  }

  if (type === "phone") {
    if (new RegExp(validatePattern).test(value)) {
      return true;
    }
    return false;
  }

  return true;
};

export default validate;
