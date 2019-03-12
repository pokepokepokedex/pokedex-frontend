import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Search from './Search';

import './Home.css';
import Pokemon from './Pokemon';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const pokemon = this.props.pokemon;
    const pageChange = this.props.pageChange;
    return (
      <>
        <Search />
        <div className='home-container'>
          {pokemon.map(poke => (
            <div key={poke.id}>
              <NavLink to={`/dashboard/${poke.id}`}>
                <Pokemon poke={poke} />
              </NavLink>
            </div>
          ))}
          <div className='button-flex'>
            <button
              onClick={pageChange}
              className='page-btn'
              alt='previous'
              name='prev'
            >
              Prev
            </button>
            <button
              onClick={pageChange}
              className='page-btn'
              name='next'
              alt='next'
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
