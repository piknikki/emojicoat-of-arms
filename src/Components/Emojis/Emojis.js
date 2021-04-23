import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import EmojiCard from "../EmojiCard/EmojiCard";
import './Emojis.css'

const Emojis = ({ emojis, selectEmoji, clickable, removable, removeEmojiFromCurrentCoat }) => {

  const emojiCards = emojis.map(emoji => {
    const emojiKey = uuidv4()
    return (
      <EmojiCard
        key={emojiKey}
        id={emojiKey}
        slug={emoji.slug}
        name={emoji.unicodeName}
        character={emoji.character}
        group={emoji.group}
        subGroup={emoji.subGroup}
        selectEmoji={selectEmoji}
        clickable={clickable}
        removable={removable}
        removeEmojiFromCurrentCoat={removeEmojiFromCurrentCoat}
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
