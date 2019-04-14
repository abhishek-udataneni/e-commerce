import React, { Component } from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import {Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div  className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} /> 
      </div>
    );
  }
}
export default App
