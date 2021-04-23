import React from 'react'
import './EmojiCard.css'

const EmojiCard = (props) => {
  const {
    id,
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

  console.log("EMOJI CARD ID: ", id)
  return (
    <div
      className="emoji-card"
      onClick={clickable ? () => selectEmoji(props) : undefined}
      onDoubleClick={removable ? () => removeEmojiFromCurrentCoat(id) : undefined}
    >
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

export default EmojiCard
