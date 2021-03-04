import axios from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";
import useInputValue from "../../hooks/useInputValue";
// import axiosClient from "./../../config/axios";

export const AuthContext = createContext(null);

const URL_API = `https://courierdemo.azurewebsites.net/api/membership/login`;

export const AuthContextProvider = ({ children }) => {
  const username = useInputValue("", "text", "Username");
  const password = useInputValue("", "password", "Password");

  const authLogin = async () => {
    try {
      const _username = username.value;
      const _password = password.value;

      console.log(_username);
      console.log(_password);
      const result = await axios.post(URL_API, {
        payload: {
          username: _username,
          password: _password,
        },
      });

      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  // const values = { users, setUsers };
  //
  const values = React.useMemo(
    () => ({
      username,
      password,
      authLogin,
    }),
    [username, password, authLogin]
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
