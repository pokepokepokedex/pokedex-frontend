import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

const Pokemon = ({ poke, addDefaultSrc }) => {
  return (
    <div className='pokemon'>
      <span className='poke-frame' />
      <h1 className='pokemon-name'>{poke.name}</h1>
      <h6 className='pokemon-type'>
        {' '}
        Type: {poke.type1} {poke.type2}{' '}
      </h6>
      <Image
        cloudName='kingmuze'
        publicId={'fl_lossy/Pokemon_Gifs/' + `${poke.name}.gif`}
        className='home-pokemon'
        onError={addDefaultSrc}
      />
      {/* <img
        src={`https://res.cloudinary.com/kingmuze/image/upload/v1552282722/Pokemon_Gifs/${
          poke.name
        }.gif`}
        alt='pokemon'
        className='home-pokemon'
        onError={addDefaultSrc}
      /> */}
    </div>
  );
};

export default Pokemon;
