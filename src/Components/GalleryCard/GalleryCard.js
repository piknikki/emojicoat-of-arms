import React from 'react'
import './GalleryCard.css'

const GalleryCard = (props) => {
  const {
    slug,
    // name,
    character,
    // group,
    // subGroup,
  } = props

  return (
    <div className="gallery-card">
      <figure id={slug}>
        <div className="character" >{character}</div>
        {/*<figcaption>*/}
        {/*  <h4>Name: {name}</h4>*/}
        {/*  <h5>Group: {group}</h5>*/}
        {/*  <h5>Subgroup: {subGroup}</h5>*/}
        {/*</figcaption>*/}

      </figure>
    </div>
  )

}

export default GalleryCard
