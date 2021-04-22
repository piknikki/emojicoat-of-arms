import React from 'react'
import Emojis from "../Emojis/Emojis";
import './Coats.css'
import shield from "../../Assets/shield1.png";

const Coats = ({ coats }) => {

  const mappedCoats = coats.map(coat => {
    return (
      <div className="img-wrapper-home">
        <div className="gallery-img-wrapper" style={{backgroundImage: `url(${shield})`}}>
          <Emojis emojis={coat} />
        </div>
      </div>
    )
    // return (
    //     <div className="gallery-cards-container">
    //       <div className="gallery-img-wrapper" style={{backgroundImage: `url(${shield})`}}>
    //         <div className="emoji-wrapper">
    //           <Emojis emojis={coat} />
    //         </div>
    //       </div>
    //     </div>
    // )
  })

  return (
    <div className="coat-container">
      {mappedCoats}
    </div>
  )
}

export default Coats
