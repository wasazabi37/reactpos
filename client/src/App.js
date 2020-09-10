import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./container/Home"
import About from "./container/About";
import Order from "./container/Order/Order";
import Products from "./container/product/Product";
import NotFound from "./container/error/Notfound"
import ProductEdit from "./container/product/ProductEdit"

class App extends Component { //class component

  renderRouter() {
    return (
      <Switch>
        {/* map url and component */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/orders" component={Order} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/add" component={ProductEdit} />
        <Route exact path="/products/edit/:id" component={ProductEdit} />
        <Route component={NotFound}></Route>
        
      </Switch>
    );
  }

  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}


export default App;
