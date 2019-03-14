import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Search from './Search';

import './Home.css';
import Pokemon from './Pokemon';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchArray: [],
      type: '',
      typeArray: []
    };
  }

  searchHandler = event => {
    console.log(event.target.value);
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandler = event => {
    event.preventDefault();
  };

  async componentDidMount() {
    try {
      return await axios
        .get('https://pokepokepokedex.herokuapp.com/api/pokemon/all', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: window.localStorage.token
          }
        })
        .then(res => {
          console.log(res);
          this.setState({
            searchArray: res.data,
            typeArray: res.data
          });
        });
    } catch (error) {
      console.log(error);
    }
  }

  choosePokemon = () => {
    let pokemon = [];
    if (this.state.search !== '') {
      pokemon = this.state.searchArray;
      pokemon = pokemon.filter(poke =>
        poke.name.toUpperCase().includes(this.state.search.toUpperCase())
      );
      console.log(pokemon, 'poke');
      return pokemon;
    } else {
      pokemon = this.props.pokemon;
      return pokemon;
    }
  };

  addDefaultSrc(ev) {
    ev.target.src =
      'https://img.rankedboost.com/wp-content/uploads/2017/05/Pokeball-Pokemon-Go.png';
  }

  render() {
    const pageChange = this.props.pageChange;
    let pokemon = this.choosePokemon();
    pokemon = pokemon.filter(poke =>
      this.state.type === '' ? poke : poke.type1.includes(this.state.type)
    );

    return (
      <>
        <div className='home-container'>
          <Search
            submitSearch={this.submitSearch}
            searchHandler={this.searchHandler}
            search={this.state.search}
            type={this.state.type}
            submitHandler={this.submitHandler}
          />
          {pokemon.map(poke => (
            <div key={poke.id}>
              <NavLink to={`/dashboard/${poke.id}`}>
                <Pokemon poke={poke} addDefaultSrc={this.addDefaultSrc} />
              </NavLink>
            </div>
          ))}
        </div>
        <img
          src={require(`../assets/chevrons-left.svg`)}
          alt='prev'
          className={this.props.pageNumber === 1 ? 'prev disabled' : 'prev'}
          name='prev'
          onClick={pageChange}
        />
        <img
          src={require(`../assets/chevrons-right.svg`)}
          alt='next'
          className='next'
          name='next'
          onClick={pageChange}
        />
      </>
    );
  }
}

export default Home;
