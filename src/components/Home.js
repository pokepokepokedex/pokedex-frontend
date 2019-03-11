import React, { Component } from 'react';

import Search from './Search';

import './Home.css';

const Home = ({ pokemon }) => {
  return (
    <>
      <Search />
      <div className='home-container'>
        {pokemon.map(poke => (
          <div className='pokemon'>
            <h1 className='pokemon-name'>{poke.name}</h1>
            <span className='poke-frame' />
            <img
              src='https://i.ibb.co/k53vsg2/Pikachu.gif'
              alt='pokemon'
              className='home-pokemon'
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
