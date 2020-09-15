import React from 'react';
import Beach from './Beach';

const BeachesPage = props => (
  <>
    <header className="App-header">
      <h1>Your Saved Beaches:</h1>
    </header>

    {
      props.beaches.map(
        beach => <Beach key={beach.id} {...beach.attributes} />
      )
    }
  </>
);

export default BeachesPage;