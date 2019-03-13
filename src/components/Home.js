import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import Search from "./Search";

import "./Home.css";
import Pokemon from "./Pokemon";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchArray: [],
      propsArray: []
    };
  }

  searchHandler = e => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  };

  async componentDidMount() {
    try {
      return await axios
        .get("https://pokepokepokedex.herokuapp.com/api/pokemon/all", {
          headers: {
            "Content-Type": "application/json",
            Authorization: window.localStorage.token
          }
        })
        .then(res => {
          console.log(res);
          this.setState({
            searchArray: res.data
          });
        });
    } catch (error) {
      console.log(error);
    }
  }

  choosePokemon = () => {
    let pokemon = [];
    if (this.state.search !== "") {
      pokemon = this.state.searchArray;
      console.log(pokemon);
      pokemon = pokemon.filter(poke => poke.name.includes(this.state.search));
      return pokemon;
    } else {
      pokemon = this.props.pokemon;
      return pokemon;
    }
  };

  render() {
    const pageChange = this.props.pageChange;
    // const pokemon = this.props.pokemon;
    let pokemon = this.choosePokemon();
    console.log(pokemon);
    return (
      <>
        <div className="home-container">
          <Search
            searchHandler={this.searchHandler}
            search={this.state.search}
          />
          {pokemon &&
            pokemon.map(poke => (
              <div key={poke.id}>
                <NavLink to={`/dashboard/${poke.id}`}>
                  <Pokemon poke={poke} />
                </NavLink>
              </div>
            ))}
        </div>
        <img
          src={require(`../assets/chevrons-left.svg`)}
          alt="prev"
          className={this.props.pageNumber === 1 ? "prev disabled" : "prev"}
          name="prev"
          onClick={pageChange}
        />
        <img
          src={require(`../assets/chevrons-right.svg`)}
          alt="next"
          className="next"
          name="next"
          onClick={pageChange}
        />
      </>
    );
  }
}

export default Home;
