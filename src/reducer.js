import { HANDLE_OK } from "./actions.js";

const handleOk = (state, { type, payload }) => {
  switch (type) {
    case HANDLE_OK: {
      localStorage.accountData = JSON.stringify(payload);
      console.log({ test: 5, ...payload });

      return {
        ...state,
        ...payload,
      };
    }

    default:
      return state;
  }
};

export default handleOk;
