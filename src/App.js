import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmList from './FilmList';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmList films={TMDB.films}/>
        <FilmDetails films={TMDB.films}/>
      </div>
    );
  }
}

export default App;
