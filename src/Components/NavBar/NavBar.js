import React from 'react';
import './NavBar.css'
// import logo1 from "../../Assets/emojilogo.png";

function NavBar({ logo }) {
  // links to gallery, create
  console.log(logo)

  return (
    <nav>
      <span>{logo.character}</span>
      <h1 className="logo-name">Emoji Coat of Arms</h1>
    </nav>

  )
}

export default NavBar;
