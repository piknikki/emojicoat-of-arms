import React from 'react'
import './GalleryCard.css'

const GalleryCard = (props) => {
  const {
    slug,
    character
  } = props

  return (
    <div className="gallery-card">
      <figure id={slug}>
        <div className="character" >{character}</div>
      </figure>
    </div>
  )

}

export default GalleryCard
