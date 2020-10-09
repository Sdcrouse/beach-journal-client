import React from 'react';
import Location from './Location';
import Attractions from './Attractions';
import JournalEntriesContainer from '../containers/JournalEntriesContainer';
import Container from 'react-bootstrap/Container';
import '../App.css';

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

      <br />
      <Container className="main-beach-info">
        <p><strong className="beach-info-labels">Location: </strong><Location {...locationInfo} /></p>
        
        <p><strong className="beach-info-labels">Description: </strong>{description}</p>

        {items_to_bring &&
          <p>
            <strong className="beach-info-labels">Items to Bring: </strong>{items_to_bring}
          </p>
        }

        {popular_activities &&
          <p>
            <strong className="beach-info-labels">Popular Activities: </strong>{popular_activities}
          </p>
        }
      </Container>
      <br />
      
      {attractions.length > 0 && 
        <Attractions attractions={attractions} />
      }

      <JournalEntriesContainer beachId={id} />
    </>
  )
};

export default Beach;