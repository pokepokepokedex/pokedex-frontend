import React from "react";
import "./Backpack.css";

const BackpackPokemon = ({ poke, addDefaultSrc }) => {
  return (
    <>
      <div className="pokemon">
        <div className="pokeball-backpack">
          <img
            src={require(`../assets/pokedex_top.png`)}
            className="pokedex-top"
            alt="pokedex"
          />
          <img
            src={require(`../assets/pokedex_bottom.png`)}
            className="pokedex-bottom"
            alt="pokedex"
          />
          <span className="hologram-bg" />
          <img
            src={`http://res.cloudinary.com/kingmuze/image/upload/fl_lossy/v1/Pokemon_Gifs/${
              poke.name
            }.gif`}
            alt="pokemon"
            className="backpack-pokemon"
            onError={addDefaultSrc}
          />
        </div>
      </div>
    </>
  );
};

export default BackpackPokemon;
