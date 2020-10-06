import React from 'react';

const Location = ({ city, state, country }) => (
  <p>
    <strong className="beach-info-labels">Location: </strong>{city}, {state}, {country}
  </p>
);

export default Location;