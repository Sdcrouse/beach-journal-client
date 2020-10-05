import React from 'react';

const Location = ({ city, state, country }) => (
  <p>
    <strong className="tertiary-labels">Location: </strong>{city}, {state}, {country}
  </p>
);

export default Location;