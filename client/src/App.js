import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./components/login";
import Add from "./components/add";
import Home from "./components/home";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar />
          </Route>
          <Route exact path="/login">
            <Navbar />
            <Login />
          </Route>
          <Route exact path="/add">
            <Navbar />
            <Add />
          </Route>
          <Route exact path="/home">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
