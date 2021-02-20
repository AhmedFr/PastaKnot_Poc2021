import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import { Home } from "./components/Home/home";
import Tips from "./components/tips/tips"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
        </Switch>
    </BrowserRouter>
</React.StrictMode>,
  document.getElementById("root")
);