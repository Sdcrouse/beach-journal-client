import React from 'react';
import Location from './Location';
import Attractions from './Attractions';

const Beach = props => {
  const {
    name,
    description,
    items_to_bring,
    popular_activities,
    location,
    attractions
  } = props;

  return (
    <>
      <h3>{name}</h3>
      <Location {...location} />

      <p><strong>Description: </strong>{description}</p>
      <p><strong>Items to Bring: </strong>{items_to_bring}</p>
      <p><strong>Popular Activities: </strong>{popular_activities}</p>
      
      {attractions.length > 0 && 
        <Attractions attractions={attractions} />
      }
    </>
  )
};

export default Beach;