import { createContext, useReducer } from "react";
import authReducer from "./authReducer";

const INITIAL_STATE = {
  currentUser: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ current: state.current, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
