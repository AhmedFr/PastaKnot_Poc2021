import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import { Home } from "./components/Home/home";
import { Tipsfunc } from "./components/tips";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/plat_du_pauvre">
              <Tipsfunc/>
            </Route>
        </Switch>
    </BrowserRouter>
</React.StrictMode>,
  document.getElementById("root")
);