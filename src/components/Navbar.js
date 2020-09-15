import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <NavLink exact to="/">Home</NavLink>
    <NavLink exact to="/beaches">Your Saved Beaches</NavLink>
  </nav>
);

export default Navbar;