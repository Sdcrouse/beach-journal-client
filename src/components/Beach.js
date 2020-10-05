import React from 'react';
import Location from './Location';
import Attractions from './Attractions';
import JournalEntriesContainer from '../containers/JournalEntriesContainer';

const Beach = props => {
  const {
    id,
    name,
    description,
    items_to_bring,
    popular_activities,
    locationInfo,
    attractions
  } = props;

  return (
    <>
      <h1>{name}</h1>
      <Location {...locationInfo} />
      <p><strong className="tertiary-labels">Description: </strong>{description}</p>

      {items_to_bring &&
        <p>
          <strong className="tertiary-labels">Items to Bring: </strong>{items_to_bring}
        </p>
      }

      {popular_activities &&
        <p>
          <strong className="tertiary-labels">Popular Activities: </strong>{popular_activities}
        </p>
      }
      
      {attractions.length > 0 && 
        <Attractions attractions={attractions} />
      }

      <JournalEntriesContainer beachId={id} />
    </>
  )
};

export default Beach;