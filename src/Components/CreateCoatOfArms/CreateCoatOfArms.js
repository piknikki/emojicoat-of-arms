import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './CreateCoatOfArms.css'

class CreateCoatOfArms extends Component {
  // allows user to create a coat of arms -- probably a controlled form???
  // may also need the ability to select a shield
  // propTypes
  // todo ==> a complete coat of arms includes motto, crest, shield elements (emojis),
  //  and supporters
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
  }

  changeHandler = (event) => {
    event.preventDefault()
    this.setState({ searchTerm: event.target.value })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.getEmojisWithSearchTerm(this.state.searchTerm)
  }

  render() {
    return (
      <div>
        <p>A complete coat of arms includes motto, crest, shield elements (emojis), and supporters</p>
        <form className="search-form">
          <input
            type="text"
            name="searchTerm"
            onChange={this.changeHandler}
          />
          <button onClick={this.submitHandler}>Search</button>
        </form>
      </div>
    )
  }
}

export default CreateCoatOfArms;

CreateCoatOfArms.propTypes = {
  searchTerm: PropTypes.string
}
