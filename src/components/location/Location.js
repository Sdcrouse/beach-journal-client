import React from 'react';
import { useSelector } from 'react-redux';

const Location = ({ id }) => {
  const { city, state, country } = useSelector( state => state.locations[id] );

  let locationInfo;

  if (state === "N/A" || state === "n/a" || state === "N/a") {
    locationInfo = <>{city}, {country}</>;
  } else {
    locationInfo = <>{city}, {state}, {country}</>;
  }

  return <>{locationInfo}</>;
};

export default Location;