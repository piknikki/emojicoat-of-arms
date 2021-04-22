import React from 'react'
import CoatEmojis from '../CoatEmojis/CoatEmojis'
import './Coats.css'
import shield from "../../Assets/shield1.png";

const Coats = ({ coats }) => {

  const mappedCoats = coats.map(coat => {
    return (
      <div className="img-wrapper-home">
        <div className="gallery-img-wrapper" style={{backgroundImage: `url(${shield})`}}>
          <CoatEmojis emojis={coat} />
        </div>
      </div>
    )
    // return (
    //     <div className="gallery-cards-container">
    //       <div className="gallery-img-wrapper" style={{backgroundImage: `url(${shield})`}}>
    //         <div className="emoji-wrapper">
    //           <CoatEmojis emojis={coat} />
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
