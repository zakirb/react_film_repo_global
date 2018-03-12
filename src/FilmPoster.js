import React from 'react';

const FilmPoster = props => {
    return (
      <img src={props.url} alt={props.title}/>
    )
}

export default FilmPoster
