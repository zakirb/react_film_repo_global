import React, { Component } from 'react';

class Fave extends Component {
  constructor(props) {
    super()
    this.state = {
      isFave: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    e.stopPropagation()
    console.log('HANDLING FAVE CLICK')
    this.setState({
      isFave: !this.state.isFave
    })

  }

  render() {

    const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'

    const {title, date, poster_url, key} = this.props



    return (
      <div className="film-row-fave {isFave}" onClick={this.handleClick}>
        <p className="material-icons">{isFave}</p>
      </div>
    )
  }
}
export default Fave
