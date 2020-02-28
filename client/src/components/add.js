import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

function Add(props) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exist, setExist] = useState("");

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const addUser = () => {
    axios
      .post("http://localhost:7000/api/users/", {
        email: email,
        password: password
      })
      .then(response => {
        console.log("the status is:", response.status);
        if (response.status === 200) props.history.push("/login");
      })
      .catch(
        err => {
          setExist("User Already exist");
          setPassword("");
        }
      );
  };

  return (
    <div style={{ margin: "10px" }}>
      <h3>Add User</h3>
      <input
        type="text"
        placeholder="Please type your email"
        onChange={e => handleChangeEmail(e)}
      />
      <input
        type="text"
        placeholder="Please type your password"
        onChange={e => handleChangePassword(e)}
      />
      <button onClick={() => addUser()}>Add</button>
      <p>{exist}</p>
    </div>
  );
}

export default withRouter(Add);
