import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  const bye = () => {
    localStorage.clear();
    window.reload();
  };

  return (
    <div className="Nav">
      <h1 className="title">Pokestat</h1>
      <img
        src={require(`../assets/Logo.svg`)}
        alt="icon"
        className="pokemon-logo"
      />
      <NavLink
        exact={true}
        to="/home"
        className="links"
        activeClassName="is-active"
      >
        Home
      </NavLink>
      <NavLink to="/dashboard" className="links" activeClassName="is-active">
        Dashboard
      </NavLink>
      <NavLink to="/backpack" className="links" activeClassName="is-active">
        Backpack
      </NavLink>
      <Link onClick={bye} to="/" className="links" activeClassName="is-active">
        Sign Out
      </Link>
    </div>
  );
};

export default Nav;
