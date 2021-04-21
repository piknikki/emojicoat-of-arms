import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './CreateCoatOfArms.css'
import SearchBar from "../SearchBar/SearchBar";
import Emojis from "../Emojis/Emojis";
// import Buttons from "../Buttons/Buttons";
import shield from '../../Assets/shield1.png'
import {Link} from "react-router-dom";

class CreateCoatOfArms extends Component {
  // allows user to create a coat of arms -- probably a controlled form???
  // may also need the ability to select a shield
  // propTypes
  // todo ==> a complete coat of arms includes motto, crest, shield elements (emojis),
  //  and supporters
  constructor(props) {
    super(props);

    this.state = {
      currentCoatEmojis: [],
      foundEmojis: []
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
  }

  clickHandler = () => {
    this.props.saveToGallery(this.state.currentCoatEmojis)
  }

  render() {
    return (
      <div>
        <SearchBar getEmojisWithSearchTerm={this.getEmojisWithSearchTerm}/>
        <div className="emojibox">
          <section className="left">
            {this.state.foundEmojis &&
              <Emojis emojis={this.state.foundEmojis} selectEmoji={this.selectEmoji}/>
            }
          </section>
          <section className="right">
            <div className="img-wrapper" style={{backgroundImage: `url(${shield})`}}>
              <div className="emoji-wrapper">
                {this.state.currentCoatEmojis &&
                <Emojis emojis={this.state.currentCoatEmojis} selectEmoji={this.selectEmoji}/>
                }
              </div>

            </div>
            <div className="button-container">
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
