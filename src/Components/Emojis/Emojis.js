import React from 'react'
import EmojiCard from "../EmojiCard/EmojiCard";
import './Emojis.css'

const Emojis = ({ emojis, selectEmoji }) => {

  const emojiCards = emojis.map(emoji => {
    return (
      <EmojiCard
        key={emoji.slug}
        slug={emoji.slug}
        name={emoji.unicodeName}
        character={emoji.character}
        group={emoji.group}
        subGroup={emoji.subGroup}
        selectEmoji={selectEmoji}
      />
    )
  })

  return (
    <div className="cards-container">
      {emojiCards}
    </div>
  )
}

export default Emojis
