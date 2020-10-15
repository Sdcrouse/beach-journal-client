import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Location from '../location/Location';
import '../../App.css';

class BeachCard extends Component {
  state = {
    likes: 0
  }

  handleClick = event => {
    event.preventDefault();

    this.setState(currentState => {
      return ({
        likes: currentState.likes + 1
      })
    })
  }

  render () {
    const { beachInfo, locationInfo } = this.props;
    return (
      <>
        <br />
        <div className="beach-card">
          <h2>{beachInfo.name}</h2>
          
          {locationInfo &&
            <p><Location {...locationInfo} /></p>
          }
          
          <p>{beachInfo.description}</p>
          <Link to={`/beaches/${beachInfo.id}`}><button>View Beach</button></Link>
          <button onClick={this.handleClick}>Add a "like" to this Beach</button>
          <p>{this.state.likes}</p>
        </div>
        <br />
      </>
    )
  }
};

export default BeachCard;