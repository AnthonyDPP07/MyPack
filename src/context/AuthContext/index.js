import React, { createContext, useContext } from "react";
import useInputValue from "../../hooks/useInputValue";
// import axiosClient from "./../../config/axios";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const username = useInputValue("", "text", "Username");
  const password = useInputValue("", "password", "Password");

  // const values = { users, setUsers };
  //
  const values = React.useMemo(
    () => ({
      username,
      password,
    }),
    [username, password]
  );

  // Finally, return the interface that we want to expose to our other components
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

//
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

export default AuthContextProvider;
