import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./components/Signin";
import Add from "./components/Signup";
import Home from "./components/Home";
import NavbarM from "./components/Navmenu";
import ToDo from "./components/Todo";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <NavbarM />
          </Route>
          <Route exact path="/signin">
            <NavbarM />
            <Login />
          </Route>
          <Route exact path="/signup">
            <NavbarM />
            <Add />
          </Route>
          <Route exact path="/dashboard">
            <NavbarM />
            <Home />
            <ToDo />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
