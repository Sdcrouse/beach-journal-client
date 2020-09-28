import React from 'react';

const Attractions = ({ attractions }) => (
  <>
    <h2>Attractions:</h2>
    {attractions.map(attraction => 
      <p key={attraction.id}>
        <strong>{attraction.name}: </strong>{attraction.description}
      </p>
    )}
  </>
);

export default Attractions;