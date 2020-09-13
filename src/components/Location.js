import React from 'react';

const Location = ({ city, state, country }) => {
  return (
    <p>
      <strong>Location: </strong>{city}, {state}, {country}
    </p>
  );
};

export default Location;