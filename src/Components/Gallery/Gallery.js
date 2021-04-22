import React from 'react';
// import '../CreateCoatOfArms/CreateCoatOfArms.css'
import './Gallery.css'
import shield from "../../Assets/shield1.png";
import Emojis from "../Emojis/Emojis";

const Gallery = ({ savedCoats, clickable }) => {
  console.log(savedCoats)

  const mappedCoats = savedCoats.map(coat => {
    return (
      <Emojis
        emojis={savedCoats}
        clickable={!clickable}
      />
    )
  })

  return (
    <div>
      <h1 className="gallery-header">This is where the coats should be</h1>
      <div className="gallery-cards-container">
        <div className="gallery-img-wrapper" style={{backgroundImage: `url(${shield})`}}>
          <div className="gallery-emoji-wrapper">
            {savedCoats &&
            mappedCoats
            }
          </div>
        </div>

      </div>
    </div>

  )
}

export default Gallery;
