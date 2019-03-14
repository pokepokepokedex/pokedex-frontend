import React from 'react';
// import { Image, Transformation } from 'cloudinary-react';

const Pokemon = ({ poke, addDefaultSrc }) => {
  return (
    <div className='pokemon'>
      <img
        src={require(`../assets/pokemon_frame.svg`)}
        className='poke-frame'
      />
      {/* <h1 className='pokemon-name'>{poke.name}</h1>
      <h6 className='pokemon-type'>
        {' '}
        Type: {poke.type1} {poke.type2}{' '}
      </h6> */}
      {/* <Image
        cloudName='kingmuze'
        publicId={'/Pokemon_Gifs/' + `${poke.name}.gif`}
        className='home-pokemon'
        onError={addDefaultSrc}
      >
        <Transformation flags='lossy' />
      </Image> */}
      <img
        src={`http://res.cloudinary.com/kingmuze/image/upload/fl_lossy/v1/Pokemon_Gifs/${
          poke.name
        }.gif`}
        alt='pokemon'
        className='home-pokemon'
        onError={addDefaultSrc}
      />
    </div>
  );
};

export default Pokemon;
