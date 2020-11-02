import { createStore } from "redux";

import fields from "./fields.js";
import reducer from "./reducer.js";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const fieldData = (name) => {
  switch (name) {
    case "name": {
      return "Иванова Анна Михайловна";
      break;
    }
    case "email": {
      return "Ivanova@mail.ru";
      break;
    }
    case "phone": {
      return "";
      break;
    }
    default:
      "";
  }
};

let initialState = fields.reduce(
  (acc, field) => ({ ...acc, [field.name]: fieldData(field.name) }),
  {}
);

if (typeof localStorage !== "undefined") {
  if (typeof localStorage.accountData !== "undefined") {
    initialState = { ...initialState, ...JSON.parse(localStorage.accountData) };
    console.log(JSON.parse(localStorage.accountData));
  }
}

/*if (localStorage.accountData) {
  store = { ...store, ...JSON.parse(localStorage.accountData) };
}*/

export default createStore(reducer, initialState);
