import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  const token = localStorage.getItem("token");
  const bye = () => {
    localStorage.clear();
  };
  return (
    <div className="Nav">
      <h1 className="title">Pokéstats</h1>
      <img
        src={require(`../assets/Logo.svg`)}
        alt="icon"
        className="pokemon-logo"
      />
      <NavLink
        exact={true}
        to="/home"
        className="links"
        activeclassname="is-active"
      >
        Home
      </NavLink>
      {token ? (
        <>
          <NavLink
            to="/dashboard"
            className="links"
            activeclassname="is-active"
          >
            Dashboard
          </NavLink>
          <NavLink to="/backpack" className="links" activeclassname="is-active">
            Backpack
          </NavLink>
        </>
      ) : null}
      <Link to="/" onClick={bye} className="links" activeclassname="is-active">
        {token ? "Sign Out" : "Sign In"}
      </Link>
    </div>
  );
};

export default Nav;
