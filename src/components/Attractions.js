import React from 'react';
import "../App.css";
import Container from 'react-bootstrap/Container';

const Attractions = ({ attractions }) => {
  const attrsByCategory = sortedByCategory(attractions);

  return (
    <>
      <h2 className="secondary-labels">Attractions:</h2>
      {Object.keys(attrsByCategory).map(category =>
        <>
          <br />
          <Container key={category} className="attraction-info">
            <h3>{category}</h3>
            {attrsByCategory[category].map (attraction =>
              <p key={attraction.id}>
                <strong className="tertiary-labels">{attraction.name}: </strong>{attraction.description}
              </p>
            )}
          </Container>
        </>
      )}
      <br />
    </>
  );
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