import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmList from './FilmList';
import TMDB from './TMDB';

const films = TMDB.films

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
  }

  handleFaveToggle(film) {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film)
    if (filmIndex !== -1) {
      //film is already saved
      faves.splice(filmIndex, 1)
      console.log('REVOMING A FAVORITE', film.title)
    } else {
      //the film needs to be added
      faves.push(film)
      console.log('ADDING A FAVORITE', film.title)
    }
    this.setState({faves})
  }

  handleDetailsClick = (film) => {
    console.log('Fetching details for ' + film.title)
    this.setState({
      current:film
    })
  }


  render() {
    return (
      <div className="film-library">
        <FilmList faves={this.state.faves} films={this.state.films} onDetailsClick={this.handleDetailsClick} onFaveToggle={this.handleFaveToggle} />
        <FilmDetails film={this.state.current} />
      </div>
    );
  }
}

export default App;
