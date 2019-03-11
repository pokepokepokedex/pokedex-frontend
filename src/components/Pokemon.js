import React from 'react';

const Pokemon = ({ poke }) => {
  return (
    <div className='pokemon'>
      <h1 className='pokemon-name'>{poke.name}</h1>
      <span className='poke-frame' />
      <img
        src='https://i.ibb.co/k53vsg2/Pikachu.gif'
        alt='pokemon'
        className='home-pokemon'
      />
    </div>
  );
};

export default Pokemon;
