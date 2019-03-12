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
          {pokemon.map((poke, index) => {
            if (index < 8) {
              return (
                <div key={poke.id}>
                  <NavLink to={`/dashboard/${poke.id}`}>
                    <Pokemon poke={poke} />
                  </NavLink>
                </div>
              );
            }
          })}
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

        {/* <div className='button-flex'>
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
            <i class='icon ion-ios-arrow' />
          </button>
        </div> */}
      </>
    );
  }
}

export default Home;
