import React from 'react';
import { NavLink } from 'react-router-dom';

import Search from './Search';

import './Home.css';
import Pokemon from './Pokemon';

const Home = ({ pokemon }) => {
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
      </div>
    </>
  );
};

export default Home;
