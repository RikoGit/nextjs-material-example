const validate = (value, { type, validatePattern }) => {
  if (!value) return true;

  if (type === "name") {
    if (/^[а-яёА-ЯЁa-zA-Z\s]*$/.test(value)) {
      return true;
    }
    return false;
  }

  if (type === "mail") {
    if (
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    ) {
      return true;
    }
    return false;
  }

  if (type === "phone") {
    if (new RegExp(validatePattern).test(value)) {
      return true;
    }
    return false;
  }

  return true;
};

export default (value, options) => {
  if (value) {
    // если поле заполнено
    return validate(value, options); // запускаем валидацию
  }
  if (options.isRequired) {
    // если не заполнено и обязательное
    return false;
  }
  return true;
};
