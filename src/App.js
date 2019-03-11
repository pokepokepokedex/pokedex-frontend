import React, { Component } from "react";

import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <>
        <Route component={Nav} />
        <Route exact path="/home" component={Home} />
        <Route component={Dashboard} path="/dashboard" />
        <div className="bg-elements">
          <span className="sidebar-left" />
          <span className="sidebar-right" />
          <span className="bar-bottom" />
          <span className="dotted-grid" />
          <span className="bg-image" />
          <span className="blur" />
        </div>
      </>
    );
  }
}

export default App;
