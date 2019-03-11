import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
  return (
    <div className='Nav'>
      <NavLink to='/home' className='links'>
        Home
      </NavLink>
      <NavLink to='dashboard' className='links'>
        Dashboard
      </NavLink>
      <NavLink to='backpack' className='links'>
        Backpack
      </NavLink>
      <NavLink to='about' className='links'>
        About
      </NavLink>
    </div>
  );
};

export default Nav;
