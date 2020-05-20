import React, { useState, useEffect } from "react";
import axios from "axios";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [iduser, setIduser] = useState("");

  useEffect(() => {
    setIduser(localStorage.getItem("iduser"));
    async function getUsers() {
      const response = await axios.get(
        `http://localhost:7000/api/users/${iduser}`
      );
      setTasks(response.data);
    }
    getUsers();
  }, [tasks]);

  return (
    <div>
      <h1>To-Do App!</h1>
      <h3>Add New To-Do</h3>
      <input type="text" placeholder="Enter new task" className="new-task" />
      <button onClick={() => console.log("her we add a new post")}>Add</button>
      {tasks.map((elt, index) => (
        <div key={index} style={{ display: "flex" }}>
          <p>{elt.text}</p>
          <button onClick={() => console.log("her we add a delete a post")}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ToDo;