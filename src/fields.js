export default [
  {
    name: "profileName",
    placeholder: "Укажите ваши фамилию и имя",
    label: "Фамилия и имя",
    helperText: "Вы неверно указали имя",
    validateOptions: {
      type: "name",
      validatePattern: "/^[а-яёА-ЯЁa-zA-Z]*$/",
    },
  },
  {
    name: "profileEmail",
    placeholder: "Ivanova@mail.ru",
    label: "E-mail",
    helperText: "Вы неверно указали e-mail",
    validateOptions: { type: "mail", validatePattern: "^\\+7\\d{10}$" },
  },
  {
    name: "profilePhone",
    placeholder: "Укажите номер телефона",
    label: "Номер телефона",
    helperText: "В формате +71234567890",
    validateOptions: { type: "phone", validatePattern: "^\\+7\\d{10}$" },
  },
];
