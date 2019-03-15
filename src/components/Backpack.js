import React, { Component } from "react";
import "./Backpack.css";
import { NavLink } from "react-router-dom";

import axios from "axios";
import BackpackPokemon from "./BackpackPokemon";

class Backpack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }

  componentDidMount = () => {
    axios
      .get(
        `https://pokepokepokedex.herokuapp.com/api/backpack/${
          window.localStorage.id
        }`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: window.localStorage.token
          }
        }
      )
      .then(res => {
        this.setState({ pokemon: res.data }, () =>
          console.log(this.state.pokemon)
        );
        console.log(res);
        this.forceUpdate();
      })
      .catch(err => console.log(err));
  };

  getDeleteId = (e, id) => {
    localStorage.setItem("deleteId", id);
  };

  render() {
    console.log(this.props.backpackPokemon);
    let pokemon = this.state.pokemon;
    console.log(pokemon);
    return (
      <div className="backpack-container">
        {pokemon &&
          pokemon.map(poke => (
            <div key={poke.id}>
              <NavLink
                onClick={e => this.getDeleteId(e, poke.id)}
                to={`/dashboard/${poke.pokedex_number}`}
              >
                <BackpackPokemon poke={poke} />
              </NavLink>
            </div>
          ))}
      </div>
    );
  }
}

export default Backpack;
