import React from 'react';
import './Backpack.css';

const BackpackPokemon = ({ poke, addDefaultSrc }) => {
  return (
    <>
      <div className='pokemon'>
        <div className='pokeball-backpack'>
          <h4 className='pokedex-name'> {poke.name} </h4>

          <img
            src={require(`../assets/pokedex_top.png`)}
            className='pokedex-top'
          />
          <img
            src={require(`../assets/pokedex_bottom.png`)}
            className='pokedex-bottom'
          />
          <span className='hologram-bg' />
        </div>

        <img
          src={`http://res.cloudinary.com/kingmuze/image/upload/fl_lossy/v1/Pokemon_Gifs/${
            poke.name
          }.gif`}
          alt='pokemon'
          className='home-pokemon'
          onError={addDefaultSrc}
        />
      </div>
    </>
  );
};

export default BackpackPokemon;
