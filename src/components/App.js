import React, { Component } from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import {Route} from "react-router-dom";
import {getBooksRequest} from "../actions/books";
import {connect} from "react-redux";
class App extends Component {
  componentDidMount() {
    this.props.getBooksRequest();
  }
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

export default connect(null,{getBooksRequest})(App)
