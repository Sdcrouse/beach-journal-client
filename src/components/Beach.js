import React from 'react';
import Location from './location/Location';
import BeachInfo from './BeachInfo';
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
        <BeachInfo label="Location: ">
          <Location {...locationInfo} />
        </BeachInfo>

        <BeachInfo label="Description: ">{description}</BeachInfo>

        {items_to_bring && <BeachInfo label="Items to Bring: ">{items_to_bring}</BeachInfo>}

        {popular_activities && <BeachInfo label="Popular Activities: ">{popular_activities}</BeachInfo>}
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