import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { attractionsByBeachSelector } from '../../selectors';
import "../../App.css";
import Container from 'react-bootstrap/Container';

const Attractions = ({ beachId }) => {
  const selectAttractionsByBeach = useMemo(
    attractionsByBeachSelector,
    []
  );

  const attractionsByBeach = useSelector(state => 
    selectAttractionsByBeach(state, beachId)
  );

  const attractionCategories = Object.keys(attractionsByBeach);
  let pageContent = null;

  if (attractionCategories.length > 0) {
    pageContent = <>
      <h2 className="secondary-labels">Attractions:</h2>
      {attractionCategories.map(category =>
        <React.Fragment key={category}>
          <br />
          <Container className="attraction-info">
            <h3>{category}</h3>
            {attractionsByBeach[category].map(attraction =>
              <p key={attraction.id}>
                <strong className="tertiary-labels">{attraction.name}: </strong>{attraction.description}
              </p>
            )}
          </Container>
        </React.Fragment>
      )}
      <br />
    </>
  }

  return pageContent;
}

export default Attractions;