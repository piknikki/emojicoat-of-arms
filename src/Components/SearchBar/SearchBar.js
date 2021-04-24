import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      feedback: ''
    }
  }

  changeHandler = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.getEmojisWithSearchTerm(this.state.searchTerm)
    this.setState({ searchTerm: '' })
  }

  render() {

    return (
      <div className="searchbar-container">
        <p className="search-subtitle">Search to find your favorite emojis.</p>
        <form className="search-form">
          <label>
            <input
              type="text"
              placeholder="ex: grin "
              name="searchTerm"
              onChange={this.changeHandler}
            />
          </label>

          {this.state.feedback && <p>{this.state.feedback}</p>}

          <button
            className="searchBtn"
            onClick={this.submitHandler}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}
