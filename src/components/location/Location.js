import React from 'react';
import { useSelector } from 'react-redux';
import { locationSelector } from '../../selectors';

const Location = ({ id }) => {
  const { city, state, country } = useSelector(state => 
    locationSelector(state, id)
  );

  let locationInfo;

  if (state === "N/A" || state === "n/a" || state === "N/a") {
    locationInfo = <>{city}, {country}</>;
  } else {
    locationInfo = <>{city}, {state}, {country}</>;
  }

  return <>{locationInfo}</>;
};

export default Location;