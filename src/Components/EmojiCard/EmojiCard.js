import React from 'react'
import './EmojiCard.css'

// how does each emoji get formatted?
const EmojiCard = (props) => {
  const {
    slug,
    // name,
    character,
    // group,
    // subGroup,
    selectEmoji } = props

  return (
    <div className="emoji-card" onClick={() => selectEmoji(character)}>
      <figure id={slug}>
        <div className="character">{character}</div>
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
