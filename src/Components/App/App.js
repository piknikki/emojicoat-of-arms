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
      currentEmoji: '',
      error: ''
    }
  }

  async componentDidMount() {
    const response = await fetch(`https://emoji-api.com/emojis?search=grin&access_key=ccd4ba88d6d80505f138b2e3e97bd3da9fe0dbf5`)
    const json = await response.json()

    this.setState({ logoEmojis: json })
    const logoIndex = Math.floor(Math.random() * 14)
    this.setState({ currentEmoji: this.state.logoEmojis[logoIndex] })
  }

  saveToGallery = async (emojis) => {
    try {
      await this.setState({ savedCoats: [...this.state.savedCoats, emojis] })
      localStorage.setItem('savedCoats', JSON.stringify(this.state.savedCoats))
    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  render() {
    return (
      <div className="app">
        <NavBar logo={this.state.currentEmoji ? this.state.currentEmoji : "😆"}/>
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
                foundEmojis={this.state.logoEmojis}
                saveToGallery={this.saveToGallery}
              />}
            />

            <Route
              exact
              path="/Gallery"
              render={() => <Gallery savedCoats={this.state.savedCoats.length > 0 ?  this.state.savedCoats : JSON.parse(localStorage.getItem('savedCoats')) }/>}
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
