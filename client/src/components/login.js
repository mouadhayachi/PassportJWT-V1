import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const login = () => {
    axios
      .post("http://localhost:7000/api/users/login", { email, password })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/home");
      })
      .catch(err => {
        setMsg("** Please verify your login & password !!!");
        setPassword("");
      });
  };

  return (
    <div>
      <div style={{ margin: "10px" }}>
        <h3>Login Page</h3>
        <input
          type="text"
          placeholder="Please type your email"
          name="email"
          onChange={e => handleChangeEmail(e)}
          value={email}
        />
        <input
          type="password"
          placeholder="Please type your password"
          name="password"
          onChange={e => handleChangePassword(e)}
          value={password}
        />
        <button onClick={() => login()}>Login</button>
        <p>{msg}</p>
      </div>
    </div>
  );
}
export default withRouter(Login);
