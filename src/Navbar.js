import React from 'react';
import { NavLink } from 'react-router-dom';

/** Top navigation bar. */

function Navbar() {
  return (
    <nav>
      <NavLink to="/" exact>Spice.ly</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </nav>
  );
}

export default Navbar;