import React from 'react'
import GalleryCard from "../GalleryCard/GalleryCard";
import './CoatEmojis.css'

const CoatEmojis = ({ emojis, selectEmoji, clickable }) => {

  const emojiCards = emojis.map(emoji => {
    return (
      <GalleryCard
        key={emoji.slug}
        slug={emoji.slug}
        name={emoji.unicodeName}
        character={emoji.character}
        group={emoji.group}
        subGroup={emoji.subGroup}
        selectEmoji={selectEmoji}
        clickable={clickable}
      />
    )
  })

  return (
    <div className="gallery-cards-container">
      {emojiCards}
    </div>
  )
}

export default CoatEmojis
