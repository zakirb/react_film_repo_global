import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmList extends Component {
  constructor(props) {
    super()
    this.state = {
      filter: 'all'
    }
  }

  handleFilterClick = (filter) => {
    console.log('Setting filter to ' + filter)
    this.setState({
      filter: filter
    })
  }


  render() {

    const {faves, films } = this.props

    let allFilms = []
      if (this.state.filter === 'all') {
        allFilms = films.map( (film, index) => {
          return (
            <FilmRow
            onFaveToggle={() => this.props.onFaveToggle(film)}
            title={film.title}
            date={film.release_date}
            poster_url={film.poster_path}
            key={film.id}
            isFave={ faves.includes(film)}
            onDetailsClick={() => this.props.onDetailsClick(film)}
            />
          )
        })
      } else {
        allFilms = faves.map( (film, index) => {
          return (
            <FilmRow
            onFaveToggle={() => this.props.onFaveToggle(film)}
            title={film.title}
            date={film.release_date}
            poster_url={film.poster_path}
            key={film.id}
            isFave={ faves.includes(film)}
            onDetailsClick={() => this.props.onDetailsClick(film)}
            />
          )
        })
      }

      var isAll = (this.state.filter === 'all' ? 'is-active' : '')
      var isFave = (this.state.filter === 'faves' ? 'is-active' : '')

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={"film-list-filter " + isAll} onClick={(e) => this.handleFilterClick('all')}>
          ALL<span className="section-count">{this.props.films.length}</span>
          </div>
        <div className={"film-list-filter " + isFave}  onClick={(e) => this.handleFilterClick('faves')}>
        FAVES<span className="section-count">{faves.length}</span>
        </div>
      </div>
      {allFilms}
      </div>
    )
  }
}

export default FilmList
