import React from 'react';

const Pokemon = ({ poke }) => {
  return (
    <div className='pokemon'>
      <h1 className='pokemon-name'>{poke.name}</h1>
      <span className='poke-frame' />
      <img
        src={`https://res.cloudinary.com/kingmuze/image/upload/v1552280621/Pokemon_Gifs/${
          poke.name
        }.gif`}
        alt='pokemon'
        className='home-pokemon'
      />
    </div>
  );
};

export default Pokemon;
