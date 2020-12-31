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

  let pageContent = null;

  if (attractionsByBeach.length > 0) {
    const attrsByCategory = sortedByCategory(attractionsByBeach);

    pageContent = <>
      <h2 className="secondary-labels">Attractions:</h2>
      {Object.keys(attrsByCategory).map(category =>
        <React.Fragment key={category}>
          <br />
          <Container className="attraction-info">
            <h3>{category}</h3>
            {attrsByCategory[category].map (attraction =>
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

const sortedByCategory = attractions => {
  // Stretch goal: Sort these alphabetically. And is there a more efficient way to do all this?
  // Right now, this takes O(n) time for each beach.

  let sorted = {};

  Object.values(attractions).forEach(attraction => {
    if (sorted[attraction.category]) {
      sorted[attraction.category].push(attraction);
    } else {
      sorted[attraction.category] = [attraction];
    }
  });

  return sorted;
};

export default Attractions;