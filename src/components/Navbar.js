import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyles = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
};

const activeStyles = { background: 'darkblue' };

const Navbar = () => (
  <nav>
    <NavLink
      exact
      to="/"
      style={linkStyles}
      activeStyle={activeStyles}
    >Home</NavLink>
    
    <NavLink
      exact
      to="/beaches"
      style={linkStyles}
      activeStyle={activeStyles}
    >Your Saved Beaches</NavLink>
  </nav>
);

export default Navbar;