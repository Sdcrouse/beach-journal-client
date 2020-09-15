import React from 'react';
import Beach from './Beach';

const BeachesPage = props => (
  <>
    <header className="App-header">
      <h2>Your Saved Beaches:</h2>
    </header>
    
    {
      props.beaches.map(
        beach => <Beach key={beach.id} {...beach.attributes} />
      )
    }
  </>
);

export default BeachesPage;