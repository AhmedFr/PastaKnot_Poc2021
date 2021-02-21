import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/home";
import Categoryfunc from "./components/category/category";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
              <Categoryfunc/>
            </Route>
        </Switch>
    </BrowserRouter>
</React.StrictMode>,
  document.getElementById("root")
);