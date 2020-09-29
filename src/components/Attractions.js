import React from 'react';

const Attractions = ({ attractions }) => {
  const attrsByCategory = sortedByCategory(attractions);

  return (
    <>
      <h2>Attractions:</h2>
      <ul>
        {Object.keys(attrsByCategory).map(category =>
          <li key={category}>
            <h3>{category}</h3>
            <ul>
              {attrsByCategory[category].map (attraction =>
                <li key={attraction.id}>
                  <strong>{attraction.name}: </strong>{attraction.description}
                </li>
              )}
            </ul>
          </li>
        )}
      </ul>
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