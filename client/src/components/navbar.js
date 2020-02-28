import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div  style={{ display: "flex", justifyContent: "flex-end", margin: "10px" }}>
      {localStorage.getItem("token") !== null ? (
        <Link to="/login">
          <button onClick={() => localStorage.removeItem("token")}>
            Logout
          </button>
        </Link>
      ) : (
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/add">
            <button>Register</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
