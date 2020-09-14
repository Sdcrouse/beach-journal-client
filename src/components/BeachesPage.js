import React from 'react';
import Beach from './Beach';

const BeachesPage = props => (
  <>
    <h2>Your Saved Beaches:</h2>
    {
      props.beaches.map(
        beach => <Beach key={beach.id} {...beach.attributes} />
      )
    }
  </>
);

export default BeachesPage;