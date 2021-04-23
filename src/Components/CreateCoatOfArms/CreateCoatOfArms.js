import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './CreateCoatOfArms.css'
import SearchBar from "../SearchBar/SearchBar";
import Emojis from "../Emojis/Emojis";
import shield from '../../Assets/shield1.png'
import {Link} from "react-router-dom";

class CreateCoatOfArms extends Component {
  // may also need the ability to select a shield
  // propTypes
  // todo ==> a complete coat of arms includes motto, crest, shield elements (emojis),
  //  and supporters
  constructor(props) {
    super(props);

    this.state = {
      currentCoatEmojis: [],
      foundEmojis: [],
      clickable: true,
      removable: false,
      error: ''
    }
  }

  getEmojisWithSearchTerm = (searchTerm) => {
    fetch(`https://emoji-api.com/emojis?search=${searchTerm}&access_key=ccd4ba88d6d80505f138b2e3e97bd3da9fe0dbf5`)
      .then(response => response.json())
      .then(foundEmojis => this.setState({ foundEmojis }))
      .catch(error => this.setState({ error: error.message }))
  }

  selectEmoji = (emoji) => {
    this.setState({ currentCoatEmojis: [...this.state.currentCoatEmojis, emoji] })
    console.log(emoji)
  }

  clickHandler = () => {
    if (this.state.currentCoatEmojis.length > 0) {
      return this.props.saveToGallery(this.state.currentCoatEmojis)
    } else {
      // todo ==> fix this error handling so it won't redirect to gallery
      return this.setState({ error: 'Please enter 5 emojis for your coat of arms.'})
    }
  }

  removeEmojiFromCurrentCoat = (id) => {
    console.log(id)
    this.setState({ currentCoatEmojis: this.state.currentCoatEmojis.filter(emoji => emoji.id !== id)})
    console.log(this.state.currentCoatEmojis)
  }

  clearCurrentCoat = () => {
    this.setState({  currentCoatEmojis: [] })
  }

  render() {
    return (
      <div>
        <SearchBar getEmojisWithSearchTerm={this.getEmojisWithSearchTerm}/>
        <div className="header">
          <h3 className="left">Search results <span className="instructions">(Single click to add an emoji)</span></h3>
          <h3 className="right">Your Emoji Coat of Arms <span className="instructions">(Double click to remove an emoji)</span></h3>
        </div>

        <div className="emojibox">
          <section className="box-left">
            {this.state.currentCoatEmojis.length === 5 &&
              <h3 className="feedback">
                <span>🎉</span>
                Great selections! Click save to see your Emoji Coat of Arms in the gallery.
              </h3>
            }

            {this.state.foundEmojis && this.state.currentCoatEmojis.length < 5 &&
              <Emojis
                emojis={this.state.foundEmojis}
                selectEmoji={this.selectEmoji}
                clickable={this.state.clickable}
                removable={this.state.removable}
              />
            }

          </section>

          <section className="box-right">
            <div className="img-wrapper" style={{backgroundImage: `url(${shield})`}}>
              <div className="emoji-wrapper">
                {this.state.currentCoatEmojis &&
                <Emojis
                  emojis={this.state.currentCoatEmojis}
                  clickable={!this.state.clickable}
                  removable={!this.state.removable}
                  removeEmojiFromCurrentCoat={this.removeEmojiFromCurrentCoat}
                />
                }
              </div>
            </div>

            <div className="button-container">
                {this.state.error &&
                  <h2>{this.state.error}</h2>
                }
              <button className="reset-btn" onClick={this.clearCurrentCoat}>Reset</button>

              <Link to='/gallery' onClick={this.clickHandler}>
                <button className="save-btn">SAVE</button>
              </Link>
            </div>
          </section>
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
