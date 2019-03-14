import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
  return (
    <div className='Nav'>
      <h1 className='title'>Pokestat</h1>
      <img
        src={require(`../assets/Logo.svg`)}
        alt='icon'
        className='pokemon-logo'
      />
      <NavLink
        exact={true}
        to='/home'
        className='links'
        activeClassName='is-active'
      >
        Home
      </NavLink>
      <NavLink to='/dashboard' className='links' activeClassName='is-active'>
        Dashboard
      </NavLink>
      <NavLink to='/backpack' className='links' activeClassName='is-active'>
        Backpack
      </NavLink>
      <NavLink to='/login' className='links' activeClassName='is-active'>
        Sign Out
      </NavLink>
    </div>
  );
};

export default Nav;
