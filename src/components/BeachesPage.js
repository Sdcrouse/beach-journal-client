import React from 'react';
import BeachesContainer from '../containers/BeachesContainer';

const BeachesPage = () => {    
  return (
    <>
      <header className="App-header">
        <h1>Your Saved Beaches:</h1>
      </header>

      <BeachesContainer />
    </>
  );
}

export default BeachesPage;