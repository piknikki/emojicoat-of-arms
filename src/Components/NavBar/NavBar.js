import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './NavBar.css';

const NavBar = ({ logo }) => {
  // links to gallery, create

  return (
    <nav className="navbar">
      <div id="logo-container">
        <Link to="/" className="nav logo-links">
          <span className="logo-character" aria-details="Logo Emoji">{logo.character}</span>
          <h1 className="logo-name">Emoji Coat of Arms</h1>
        </Link>
      </div>
      <div className="navlinks-container">
        <ul>
          <li><NavLink to="/Create">Create</NavLink></li>
          <li><NavLink to="/Gallery">Gallery</NavLink></li>
        </ul>

      </div>



    </nav>

  )
}

export default NavBar;
