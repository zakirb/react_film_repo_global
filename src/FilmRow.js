import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

const FilmRow = props => {

    const {title, date, poster_url, onDetailsClick, onFaveToggle, isFave} = props

    let posterUrl = "https://image.tmdb.org/t/p/w780/" + poster_url;

    let year = new Date(date).getFullYear();

    return (
      <div className="film-row" onClick={onDetailsClick}>
        <FilmPoster url={posterUrl} title={title}/>
        <div className="film-summary">
          <h1>{title}</h1>
          <p>{year}</p>
        </div>
        <Fave isFave={isFave} onFaveToggle={onFaveToggle} />
      </div>
    )
}
export default FilmRow
