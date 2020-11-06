import { useMemo } from "react";
import { createStore } from "redux";

import fields from "./fields.js";
import reducer from "./reducer.js";

/*
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
*/

let store;

let initialState = {
  user: {
    name: "Иванова Анна Михайловна",
    email: "Ivanova@mail.ru",
    phone: "",
  },
  isEdit: false,
  isConfirmationDialogRawOpen: false,
  isSimpleDialogOpen: false,
  form: fields.reduce(
    (acc, field) => ({
      ...acc,
      [field.name]: { value: "", isValid: true },
    }),
    {}
  ),
};
/*if (typeof localStorage !== "undefined") {
  if (typeof localStorage.accountData !== "undefined") {
    initialState = {
      ...initialState,
      form: JSON.parse(localStorage.accountData),
    };
    // console.log(JSON.parse(localStorage.accountData));
  }
}
*/
const initStore = (preloadedState = initialState) =>
  createStore(reducer, preloadedState);

/*store.subscribe(() => {
  localStorage.accountData = JSON.stringify(store.getState().form);
  console.log(`localStorage.accountData = ${localStorage.accountData}`);
});*/

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  console.log(store.getState());
  return store;
}

/*
const store = createStore(reducer, initialState);

store.subscribe(() => {
  localStorage.accountData = JSON.stringify(store.getState().form);
  console.log(`localStorage.accountData = ${localStorage.accountData}`);
});

export default store;
*/
