import React from 'react'
import './EmojiCard.css'

const EmojiCard = (props) => {

  const {
    slug,
    // name,
    character,
    // group,
    // subGroup,
    selectEmoji,
    clickable,
    removable,
    removeEmojiFromCurrentCoat
  } = props

  return (
    <div
      className="emoji-card"
      // className={`emoji-card ${removable ? "remove-padding" : ""}`}
      onClick={clickable ? () => selectEmoji(props) : undefined}
      onDoubleClick={removable ? () => removeEmojiFromCurrentCoat(slug) : undefined}
    >
      <figure id={slug}>
        <div className="character">{character}</div>
        {/*<div className={`character ${removable ? "coat-selected" : ""}`}>{character}</div>*/}
        {/*<figcaption>*/}
        {/*  <h4>Name: {name}</h4>*/}
        {/*  <h5>Group: {group}</h5>*/}
        {/*  <h5>Subgroup: {subGroup}</h5>*/}
        {/*</figcaption>*/}

      </figure>
    </div>
  )
}

export default EmojiCard
