import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './CreateCoatOfArms.css'
import SearchBar from "../SearchBar/SearchBar";
import Emojis from "../Emojis/Emojis";

class CreateCoatOfArms extends Component {
  // allows user to create a coat of arms -- probably a controlled form???
  // may also need the ability to select a shield
  // propTypes
  // todo ==> a complete coat of arms includes motto, crest, shield elements (emojis),
  //  and supporters
  constructor(props) {
    super(props);

    this.state = {
      currentCoatEmojis: {},
      foundEmojis: []
    }
  }

  getEmojisWithSearchTerm = (searchTerm) => {
    fetch(`https://emoji-api.com/emojis?search=${searchTerm}&access_key=ccd4ba88d6d80505f138b2e3e97bd3da9fe0dbf5`)
      .then(response => response.json())
      .then(foundEmojis => this.setState({ foundEmojis }))
      .catch(error => this.setState({ error: error.message }))
  }

  mappedEmojis = () => {
    this.state.foundEmojis.map(emoji => {
      return <span>{emoji.character}</span>
    })
  }

  // selectEmoji = (emoji) => {
  //   // put into an array
  //   this.state.selectedEmojis.push(emoji)
  //   console.log("function works", emoji)
  // }

  render() {
    return (
      <div>
        <SearchBar getEmojisWithSearchTerm={this.getEmojisWithSearchTerm}/>
        <div className="emojibox">
          {this.state.foundEmojis &&
            <Emojis emojis={this.state.foundEmojis}/>
          }
        </div>
      </div>
    )
  }
}

export default CreateCoatOfArms;

CreateCoatOfArms.propTypes = {
  searchTerm: PropTypes.string,
  currentCoatEmojis: PropTypes.object
}
