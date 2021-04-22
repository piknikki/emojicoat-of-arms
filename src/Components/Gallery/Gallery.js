import React from 'react';
import '../CreateCoatOfArms/CreateCoatOfArms.css'
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
    <div className="cards-container">
      <h3>This is where the coats should be</h3>

      <div className="img-wrapper" style={{backgroundImage: `url(${shield})`}}>
        <div className="emoji-wrapper">
          {savedCoats &&
            mappedCoats
          }
        </div>
      </div>

    </div>
  )
}

export default Gallery;
