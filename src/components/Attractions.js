import React from 'react';

const Attractions = ({ attractions }) => {
  return (
    <>
      <h4>Attractions:</h4>
      {attractions.map(attraction => 
        <p key={attraction.id}>
          <strong>{attraction.name}: </strong>{attraction.description}
        </p>
      )}    
    </>
  );
};

export default Attractions;