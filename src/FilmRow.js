import React, { Component } from 'react';
import FilmPoster from './FilmPoster';

class FilmRow extends Component {
  render() {

    const {title, date, poster_url, key} = this.props

    let posterUrl = "https://image.tmdb.org/t/p/w780/" + poster_url;

    let year = new Date(date).getFullYear();

    return (
      <div className="film-row">
        <FilmPoster url={posterUrl} title={title}/>
        <div className="film-summary">
          <h1>{title}</h1>
          <p>{year}</p>
        </div>
      </div>
    )
  }
}
export default FilmRow
