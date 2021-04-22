import React from 'react'
import Emojis from "../Emojis/Emojis";
import '../CreateCoatOfArms/CreateCoatOfArms.css'
// import './Coats.css'
import shield from "../../Assets/shield1.png";

const Coats = ({ coats }) => {

  const mappedCoats = coats.map(coat => {
    console.log("ONE COAT ", coat)
    return (
        <div className="gallery-cards-container">
          <div className="gallery-img-wrapper" style={{backgroundImage: `url(${shield})`}}>
            <div className="emoji-wrapper">
              <Emojis emojis={coat} />
            </div>
          </div>
        </div>
    )
  })

  return (
    <div className="coat-container">
      {mappedCoats}
    </div>
  )
}

export default Coats
