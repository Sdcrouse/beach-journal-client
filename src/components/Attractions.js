import React from 'react';

const Attractions = ({ attractions }) => (
  <>
    <h3>Attractions:</h3>
    {attractions.map(attraction => 
      <p key={attraction.id}>
        <strong>{attraction.name}: </strong>{attraction.description}
      </p>
    )}
  </>
);

export default Attractions;