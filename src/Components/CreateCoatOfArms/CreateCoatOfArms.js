import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './CreateCoatOfArms.css'
import SearchBar from "../../SearchBar/SearchBar";

class CreateCoatOfArms extends Component {
  // allows user to create a coat of arms -- probably a controlled form???
  // may also need the ability to select a shield
  // propTypes
  // todo ==> a complete coat of arms includes motto, crest, shield elements (emojis),
  //  and supporters
  constructor(props) {
    super(props);
    console.log(props)

    this.state = {
      currentCoat: {}
    }
  }


  render() {
    return (
      <div>
        <SearchBar getEmojisWithSearchTerm={this.props.getEmojisWithSearchTerm}/>
      </div>
    )
  }
}

export default CreateCoatOfArms;

CreateCoatOfArms.propTypes = {
  searchTerm: PropTypes.string
}
