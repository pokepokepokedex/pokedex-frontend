import React from 'react';
import { NavLink } from 'react-router-dom';

import Search from './Search';

import './Home.css';

const Home = ({ pokemon }) => {
  return (
    <>
      <Search />
      <div className='home-container'>
        {pokemon.map(poke => (
          <div key={poke.id}>
            <NavLink to={`/dashboard/${poke.id}`}>
              <div className='pokemon'>
                <h1 className='pokemon-name'>{poke.name}</h1>
                <span className='poke-frame' />
                <img
                  src='https://i.ibb.co/k53vsg2/Pikachu.gif'
                  alt='pokemon'
                  className='home-pokemon'
                />
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
