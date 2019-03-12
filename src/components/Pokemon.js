import React from 'react';

const Pokemon = ({ poke }) => {
  return (
    <div className='pokemon'>
      <span className='poke-frame' />
      <h1 className='pokemon-name'>{poke.name}</h1>
      <img
        src={`https://res.cloudinary.com/kingmuze/image/upload/v1/Pokemon_Gifs/${
          poke.name
        }.gif`}
        alt='pokemon'
        className='home-pokemon'
      />
    </div>
  );
};

export default Pokemon;
