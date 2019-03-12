import React, { Component, useEffect, useState } from "react";
import Register from "./Register";
import Login from "./Login";
import { Route, withRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import Home from "./components/Home";
import axios from "axios";
import "./App.css";

const App = props => {
  const [state, setState] = useState({
    pokemon: [],
    pageNumber: 1
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .get(
          `https://pokepokepokedex.herokuapp.com/api/pokemon?page=${
            state.pageNumber
          }`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: window.localStorage.token
            }
          }
        )
        .then(res => setState({ pokemon: res.data.data }))
        .catch(err => console.log(err));
    } else {
      props.history.push("/login");
    }
  }, [localStorage.token.length]);

  const pageChange = event => {
    // debugger;
    if (event.target.name === "prev" && state.pageNumber === 1) {
      return;
    }

    if (event.target.name === "next") {
      setState({ pageNumber: state.pageNumber + 1 });
    } else {
      setState({ pageNumber: state.pageNumber - 1 });
    }
  };

  return (
    <>
      <Route component={Nav} />
      <Route
        exact
        path="/home"
        render={props => (
          <Home
            {...props}
            pokemon={state.pokemon}
            pageChange={pageChange}
            pageNumber={state.pageNumber}
          />
        )}
      />
      <Route
        path="/dashboard/:id"
        render={props => <Dashboard {...props} pokemon={state.pokemon} />}
      />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <div className="bg-elements">
        <span className="sidebar-left" />
        <span className="sidebar-right" />
        <span className="bar-bottom" />
        <span className="dotted-grid" />
        <span className="bg-image" />
        <span className="blur" />
      </div>
      <Login />
    </>
  );
};

export default withRouter(App);
