import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import Home from "./components/Home";
import axios from "axios";
import "./App.css";
import Backpack from "./components/Backpack";

class App extends Component {
  state = {
    pokemon: [],
    pageNumber: 1,
    pokemonIDS: [],
    backpackPokemon: [],
    userInfo: []
  };

  componentDidMount = () => {
    if (localStorage.getItem("token")) {
      axios
        .get(
          `https://pokepokepokedex.herokuapp.com/api/pokemon?page=${
            this.state.pageNumber
          }`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: window.localStorage.token
            }
          }
        )
        .then(res => {
          this.setState({ pokemon: res.data.data });
          this.forceUpdate();
        })
        .catch(err => console.log(err));
    } else {
      this.props.history.push("/");
    }
  };

  pageChange = event => {
    if (event.target.name === "prev" && this.state.pageNumber === 1) {
      return;
    }

    if (event.target.name === "next") {
      if (localStorage.getItem("token")) {
        axios
          .get(
            `https://pokepokepokedex.herokuapp.com/api/pokemon?page=${this.state
              .pageNumber + 1}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: window.localStorage.token
              }
            }
          )
          .then(res => this.setState({ pokemon: res.data.data }))
          .catch(err => console.log(err));
      } else {
        this.props.history.push("/login");
      }
      this.setState({ pageNumber: this.state.pageNumber + 1 });
    } else {
      if (localStorage.getItem("token")) {
        axios
          .get(
            `https://pokepokepokedex.herokuapp.com/api/pokemon?page=${this.state
              .pageNumber - 1}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: window.localStorage.token
              }
            }
          )
          .then(res => this.setState({ pokemon: res.data.data }))
          .catch(err => console.log(err));
      } else {
        this.props.history.push("/login");
      }
      this.setState({ pageNumber: this.state.pageNumber - 1 });
    }
  };

  addDefaultSrc(ev) {
    ev.target.src =
      "https://res.cloudinary.com/kingmuze/image/upload/v1552582092/PokeBall.gif";
  }

  addToBackpack = pokemon => {
    axios
      .post(`https://pokepokepokedex.herokuapp.com/api/backpack`, pokemon, {
        headers: {
          "Content-Type": "application/json",
          Authorization: window.localStorage.token
        }
      })
      .then(res => {
        this.setState({ backpackPokemon: res.data });
        this.forceUpdate();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <Route component={Nav} />
        <Route
          exact
          path="/home"
          render={props => (
            <Home
              {...props}
              pokemon={this.state.pokemon}
              pageChange={this.pageChange}
              pageNumber={this.state.pageNumber}
            />
          )}
        />
        <Route
          path="/dashboard/:id"
          render={props => (
            <Dashboard
              {...props}
              pokemon={this.state.pokemon}
              addToBackpack={this.addToBackpack}
              addDefaultSrc={this.addDefaultSrc}
              removeFromBackpack={this.removeFromBackpack}
            />
          )}
        />
        <Route
          exact
          path="/dashboard"
          render={props => (
            <Dashboard {...props} randomPokemon={this.state.pokemon} />
          )}
        />

        <Route
          path="/backpack"
          render={props => (
            <Backpack {...props} backpackPokemon={this.state.backpackPokemon} />
          )}
        />
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
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
