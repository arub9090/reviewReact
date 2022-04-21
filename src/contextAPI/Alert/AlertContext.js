import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";
const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = {
    alert: null,
  };
  const [state, dispatch] = useReducer(AlertReducer, initialState);
  const createAlert = async (msg, typemsg) => {
    console.log(typemsg);
    dispatch({
      type: "SET_ALERT",
      payload: { msg, typemsg },
    });

    setTimeout(() => {
      dispatch({
        type: "REMOVE_ALERT",
        payload: initialState,
      });
    }, 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        createAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
