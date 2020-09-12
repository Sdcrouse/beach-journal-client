import React from 'react';

const BeachesPage = props => {
  return (
    <>
      <h2>Your Saved Beaches:</h2>
      {
        props.beaches.map(
          beach => <p key={beach.id}>{beach.attributes.name}</p>
        )
      }
    </>
  )
};

export default BeachesPage;