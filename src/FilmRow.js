import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {


  render() {

    const {title, date, poster_url} = this.props

    let posterUrl = "https://image.tmdb.org/t/p/w780/" + poster_url;

    let year = new Date(date).getFullYear();

    return (
      <div className="film-row" onClick={this.props.onDetailsClick}>
        <FilmPoster url={posterUrl} title={title}/>
        <div className="film-summary">
          <h1>{title}</h1>
          <p>{year}</p>
        </div>
        <Fave isFave={this.props.isFave} onFaveToggle={this.props.onFaveToggle} />
      </div>
    )
  }
}
export default FilmRow
