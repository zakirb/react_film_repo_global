import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmList extends Component {

  handleFilterClick = (filter) => {
    console.log('Setting filter to ' + filter)
  }


  render() {

    const {films} = this.props

    let allFilms = films.map(function(film, index) {
      return (
        <FilmRow
        title={film.title}
        date={film.release_date}
        poster_url={film.poster_path}
        key={film.id}
        />
      )
    })


    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className="film-list-filter" onClick={(e) => this.handleFilterClick('all')}>
          ALL<span className="section-count">{this.props.films.length}</span>
          </div>
        <div className="film-list-filter" onClick={(e) => this.handleFilterClick('faves')}>
        FAVES<span className="section-count">0</span>
        </div>
      </div>
      {allFilms}
      </div>
    )
  }
}

export default FilmList
