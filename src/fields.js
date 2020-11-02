export default [
  {
    name: "name",
    placeholder: "Укажите ваши фамилию и имя",
    label: "Фамилия и имя",
    helperText: "Вы неверно указали имя",
    validateOptions: {
      type: "name",
      isRequired: true,
    },
  },
  {
    name: "email",
    placeholder: "Укажите ваш email",
    label: "E-mail",
    helperText: "Вы неверно указали e-mail",
    validateOptions: {
      type: "mail",
    },
  },
  {
    name: "phone",
    placeholder: "Укажите номер телефона",
    label: "Номер телефона",
    helperText: "В формате +71234567890",
    validateOptions: { type: "phone", validatePattern: "^\\+7\\d{10}$" },
  },
];
