import React from "react";
import axios from "axios";
import { useAuthContext } from "./../context/AuthContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const { username, password } = useAuthContext();

  const URL_API = `https://courierdemo.azurewebsites.net/api/membership/login`;

  const authLogin = async () => {
    const _username = username.value;
    const _password = password.value;

    console.log(_username);
    console.log(_password);

    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    var data = JSON.stringify({
      username: "jsanchez",
      password: "123456",
    });
    var config = {
      method: "post",
      url: "https://courierdemo.azurewebsites.net/api/membership/login",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const response = authLogin();

    console.log(response);

    console.log(username.value);

    // here you will be routed to the next page.
    // if (response.autenticaed) {
    history.push("/packages");
    // }
  };

  return (
    <div className="form-user">
      <div className="form-container dark-shadow">
        <h2>LogIn</h2>
        <form>
          {/* {error ? (
            <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" />
          ) : null} */}
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
