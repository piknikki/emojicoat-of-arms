import React, {Component} from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Home from "../Home/Home";
import CreateCoatOfArms from "../CreateCoatOfArms/CreateCoatOfArms";

class App extends Component {
  constructor() {
    super();

    this.state = {
      savedCoats: [],
      currentCoat: {},
      logoEmojis: [],
      foundEmojis: [],
      currentEmoji: '',
      error: ''
    }
  }

  // api calls -- search with searchTerm
  componentDidMount() {
    fetch(`https://emoji-api.com/emojis?search=grin&access_key=ccd4ba88d6d80505f138b2e3e97bd3da9fe0dbf5`)
      .then(response => response.json())
      .then(logoEmojis => {
        this.setState({ logoEmojis })
        const logoIndex = Math.floor(Math.random() * this.state.logoEmojis.length)
        this.setState({ currentEmoji: this.state.logoEmojis[logoIndex] })
      })
      .catch(error => this.setState({ error: error.message }))
  }

  getEmojisWithSearchTerm = (searchTerm) => {
    fetch(`https://emoji-api.com/emojis?search=${searchTerm}&access_key=ccd4ba88d6d80505f138b2e3e97bd3da9fe0dbf5`)
      .then(response => response.json())
      .then(foundEmojis => this.setState({ foundEmojis }))
      .catch(error => this.setState({ error: error.message }))
  }

  // router

  render() {
    return (
      <div className="app">
        <NavBar logo={this.state.currentEmoji}/>
        <Home />
        <CreateCoatOfArms getEmojisWithSearchTerm={this.getEmojisWithSearchTerm} />

      </div>
    )
  }
}

export default App;
