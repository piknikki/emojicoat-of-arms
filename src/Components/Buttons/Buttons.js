import React from 'react'
import { Link } from "react-router-dom";
import './Buttons.css'

const Buttons = ({ saveToGallery }) => {
  return (
    <div className="button-container">
      {/*  todo ==> Need a button to reset, and one to delete (but not sure it should be here */}
      {/*  todo ==> If there are 5 emojis in the current array, enable SAVE button */}

      <Link to='/gallery' onClick={() => saveToGallery()}>
        <button className="save-btn" disabled>SAVE</button>
      </Link>
    </div>
  )
}

export default Buttons
