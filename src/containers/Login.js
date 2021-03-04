import React, { useState, useContext } from "react";
import { useAuthContext } from "./../context/AuthContext";
import { useHistory } from "react-router-dom";
import useInputValue from "./../hooks/useInputValue";
import Error from "./Error";

const Login = () => {
  const history = useHistory();

  const { username, password, authLogin } = useAuthContext();

  const { error } = useInputValue();

  console.log(error);

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await authLogin();

    console.log(response);

    console.log(username.value);

    // here you will be routed to the next page.
    // if (response.autenticaed) {
    // history.push("/packages");
    // }
  };

  return (
    <div className="form-user">
      <div className="form-container dark-shadow">
        <h2>LogIn</h2>
        <form>
          {error ? (
            <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" />
          ) : null}
          <div className="field">
            <label>User</label>
            <input id="userName" name="userName" {...username} />
          </div>
          <div className="field">
            <label>Password</label>
            <input id="password" name="password" {...password} />
          </div>
          <button className="button-primary btn-block" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
