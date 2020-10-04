import React from 'react';

const LocationInputs = ({ city, state, country, handleChange }) => (
  <p>
    <label htmlFor="location_city" className="required-field">City: </label>
    <input
      name="city"
      id="location_city"
      value={city}
      onChange={handleChange}
      required
    />

    <label htmlFor="location_state" className="required-field">State/Province (if none, then write "N/A"): </label>
    <input
      name="state"
      id="location_state"
      value={state}
      onChange={handleChange}
      required
    />

    <label htmlFor="location_country" className="required-field">Country: </label>
    <input
      name="country"
      id="location_country"
      value={country}
      onChange={handleChange}
      required
    />
  </p>
);

export default LocationInputs;