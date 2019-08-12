import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import Search from "./Search";

import "./Home.scss";
import Pokemon from "./Pokemon";
import next from "../assets/chevrons-right.svg";
import prev from "../assets/chevrons-left.svg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchArray: [],
      type: "",
      typeArray: []
    };
  }

  searchHandler = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandler = event => {
    event.preventDefault();
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://pokepokepokedex.herokuapp.com/api/pokemon/all", {
          headers: {
            "Content-Type": "application/json",
            Authorization: window.localStorage.token
          }
        })
        .then(res => {
          this.setState({
            searchArray: res.data,
            typeArray: res.data
          });
        })
        .catch(err => err);
    } else {
      this.props.history.push("/");
    }
  }

  choosePokemon = () => {
    let pokemon = [];
    if (this.state.search !== "") {
      pokemon = this.state.searchArray;
      pokemon = pokemon.filter(poke =>
        poke.name.toUpperCase().includes(this.state.search.toUpperCase())
      );
      return pokemon;
    } else {
      pokemon = this.props.pokemon;
      return pokemon;
    }
  };
  chooseType = () => {
    let pokemon = [];
    if (this.state.type !== "") {
      pokemon = this.state.typeArray;
      pokemon = pokemon.filter(poke =>
        poke.type1.toUpperCase().includes(this.state.type.toUpperCase())
      );
      return pokemon;
    } else {
      pokemon = this.props.pokemon;
      return pokemon;
    }
  };

  addDefaultSrc(ev) {
    ev.target.src =
      "https://res.cloudinary.com/kingmuze/image/upload/v1552582092/PokeBall.gif";
  }
  render() {
    const pageChange = this.props.pageChange;
    let pokemon = this.choosePokemon();
    let type = this.chooseType();
    pokemon = pokemon.filter(poke =>
      this.state.type === ""
        ? poke
        : poke.type1.toUpperCase().includes(this.state.type.toUpperCase())
    );
    type = type.filter(poke =>
      this.state.search === ""
        ? poke
        : poke.name.toUpperCase().includes(this.state.search.toUpperCase())
    );

    return (
      <>
        <div className="page-btns-flex">
          <img
            src={prev}
            alt="prev"
            className={this.props.pageNumber === 1 ? "prev disabled" : "prev"}
            name="prev"
            onClick={pageChange}
          />
          <img
            src={next}
            alt="next"
            className="next"
            name="next"
            onClick={pageChange}
          />
        </div>
        <div className="home-container">
          <Search
            submitSearch={this.submitSearch}
            searchHandler={this.searchHandler}
            search={this.state.search}
            type={this.state.type}
            submitHandler={this.submitHandler}
          />
          {this.state.search === ""
            ? type.map(poke => (
                <div key={poke.id}>
                  <NavLink to={`/dashboard/${poke.id}`}>
                    <Pokemon poke={poke} addDefaultSrc={this.addDefaultSrc} />
                  </NavLink>
                </div>
              ))
            : pokemon.map(poke => (
                <div key={poke.id}>
                  <NavLink to={`/dashboard/${poke.id}`}>
                    <Pokemon poke={poke} addDefaultSrc={this.addDefaultSrc} />
                  </NavLink>
                </div>
              ))}
        </div>
      </>
    );
  }
}

export default Home;
