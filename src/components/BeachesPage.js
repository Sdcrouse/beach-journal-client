import React, { Component } from 'react';
import BeachesContainer from '../containers/BeachesContainer';

class BeachesPage extends Component {
  render() {
    
    return (
      <>
        <header className="App-header">
          <h1>Your Saved Beaches:</h1>
        </header>

        <BeachesContainer />
      </>
    );
  }
}

export default BeachesPage;