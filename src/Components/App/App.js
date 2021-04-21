import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Home from "../Home/Home";
import CreateCoatOfArms from "../CreateCoatOfArms/CreateCoatOfArms";
import Gallery from "../Gallery/Gallery";
import NotFound from "../NotFound/NotFound";

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

  componentDidMount() {
    fetch(`https://emoji-api.com/emojis?search=grin&access_key=ccd4ba88d6d80505f138b2e3e97bd3da9fe0dbf5`)
      .then(response => response.json())
      .then(logoEmojis => {
        this.setState({ logoEmojis })
        const logoIndex = Math.floor(Math.random() * 14)
        this.setState({ currentEmoji: this.state.logoEmojis[logoIndex] })
      })
      .catch(error => this.setState({ error: error.message }))
  }

  saveToGallery = (emojis) => {
    console.log(emojis)
    this.setState({ savedCoats: [...this.state.savedCoats, emojis] })
    console.log(this.state.savedCoats)
  }

  render() {
    return (
      <div className="app">
        <NavBar logo={this.state.currentEmoji}/>
        <main>
          {!!this.state.error &&
          <h2 className="error-feedback">{this.state.error}</h2>
          }

          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home />}
            />

            <Route
              exact
              path="/Create"
              render={() => <CreateCoatOfArms
                foundEmojis={this.state.foundEmojis}
                saveToGallery={this.saveToGallery}
              />}
            />

            <Route
              exact
              path="/Gallery"
              render={() => <Gallery savedCoats={this.state.savedCoats}/>}
            />

            <Route
              exact
              path="/*"
              render={() => <NotFound />}
            />

          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
