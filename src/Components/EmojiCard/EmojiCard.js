import React from 'react'
import './EmojiCard.css'

const EmojiCard = (props) => {

  const {
    slug,
    character,
    selectEmoji,
    clickable,
    removable,
    removeEmojiFromCurrentCoat
  } = props

  return (
    <div
      className="emoji-card"
      onClick={clickable ? () => selectEmoji(props) : undefined}
      onDoubleClick={removable ? () => removeEmojiFromCurrentCoat(slug) : undefined}
    >
      <figure id={slug}>
        <div className="character">{character}</div>
      </figure>
    </div>
  )
}

export default EmojiCard
