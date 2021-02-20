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
              <AppRouter/>
            </Route>
        </Switch>
    </BrowserRouter>
</React.StrictMode>,
  document.getElementById("root")
);

function Index() {
    return <h2>Home</h2>;
}

function Product() {
    return <h2>This is a page for product with ID: </h2>;
}

function AppRouter() {
      return (
         <Router>
           <div>
             <nav>
               <ul>
                 <li>
                   <Link to="/">Home</Link>
                 </li>
                 <li>
                   <Link to="/products/1">First Product</Link>
                 </li>
                 <li>
                   <Link to="/products/2">Second Product</Link>
                 </li>
               </ul>
             </nav>
     
             <Route path="/" exact component={Index} />
             <Route path="/products/:id" component={Product} />
           </div>
         </Router>
       );
     }