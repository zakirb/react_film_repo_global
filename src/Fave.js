import React, { Component } from 'react';

class Fave extends Component {
  constructor(props) {
    super()
  }

  handleClick = (e) => {
    e.stopPropagation()
    console.log('HANDLING FAVE CLICK')
    this.props.onFaveToggle();

  }

  render() {
    
    const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'

    const {title, date, poster_url, key} = this.props



    return (
      <div className={'film-row-fave ' + isFave} onClick={this.handleClick}>
        <p className="material-icons">{isFave}</p>
      </div>
    )
  }
}
export default Fave
