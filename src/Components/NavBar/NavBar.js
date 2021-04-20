import React from 'react';
import './NavBar.css';

function NavBar({ logo }) {
  // links to gallery, create

  return (
    <nav>
      <span>{logo.character}</span>
      <h1 className="logo-name">Emoji Coat of Arms</h1>
    </nav>

  )
}

export default NavBar;
