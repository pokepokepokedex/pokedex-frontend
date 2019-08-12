import React from "react";
import { NavLink } from "react-router-dom";

import "./Home.scss";

import frame from "../assets/pokemon_frame.svg";
// import { Image, Transformation } from 'cloudinary-react';

const Pokemon = ({ poke, addDefaultSrc }) => {
  return (
    <div className="single-pokemon">
      <img src={frame} className="poke-frame" alt="frame" />
      <div className="pokemon-info">
        <div>
          <h1 className="pokemon-name">{poke.name}</h1>
          <h6 className="pokemon-type">
            {" "}
            Type: {poke.type1} {poke.type2}
          </h6>
        </div>
        <img
          src={`http://res.cloudinary.com/kingmuze/image/upload/fl_lossy/v1/Pokemon_Gifs/${
            poke.name
          }.gif`}
          alt="pokemon"
          className="home-pokemon"
          onError={addDefaultSrc}
        />
      </div>
    </div>
  );
};

export default Pokemon;
