import React from 'react';
import './NavBar.css'
import logo from "../../Assets/emojilogo.png";

function NavBar() {
  // links to gallery, create

  return (
    <nav>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Navbar</h1>
    </nav>

  )
}

export default NavBar;
