import React from 'react';

const Location = ({ city, state, country }) => {
  let locationInfo;

  if (state === "N/A" || state === "n/a" || state === "N/a") {
    locationInfo = <>{city}, {country}</>;
  } else {
    locationInfo = <>{city}, {state}, {country}</>;
  }

  return <p>{locationInfo}</p>;
};

export default Location;