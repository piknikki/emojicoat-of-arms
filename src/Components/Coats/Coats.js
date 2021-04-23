import React from 'react'
import CoatEmojis from '../CoatEmojis/CoatEmojis'
import './Coats.css'
import shield from "../../Assets/shield1.png";

const Coats = ({ coats }) => {

  const mappedCoats = coats.map((coat, index) => {
    return (
      <div className="coat-wrapper" key={index}>
        <div className="gallery-img-wrapper" style={{backgroundImage: `url(${shield})`}}>
          <CoatEmojis emojis={coat} />
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
