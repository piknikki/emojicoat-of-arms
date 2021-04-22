import React from 'react';
import '../CreateCoatOfArms/CreateCoatOfArms.css'
// import './Gallery.css'
import Coats from "../Coats/Coats";

const Gallery = ({ savedCoats, clickable }) => {

  return (
    <Coats coats={savedCoats}/>
  )
}

export default Gallery;
