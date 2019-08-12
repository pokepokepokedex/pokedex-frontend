import React from "react";
import frame from "../assets/pokemon_frame.svg";
// import { Image, Transformation } from 'cloudinary-react';

const Pokemon = ({ poke, addDefaultSrc }) => {
  return (
    <>
      <h1 className="pokemon-name">{poke.name}</h1>
      <h6 className="pokemon-type">
        {" "}
        Type: {poke.type1} {poke.type2}
      </h6>
      <div className="pokemon">
        <img src={frame} className="poke-frame" alt="frame" />
        <img
          src={`http://res.cloudinary.com/kingmuze/image/upload/fl_lossy/v1/Pokemon_Gifs/${
            poke.name
          }.gif`}
          alt="pokemon"
          className="home-pokemon"
          onError={addDefaultSrc}
        />
      </div>
    </>
  );
};

export default Pokemon;
