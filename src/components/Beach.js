import React from 'react';

const Beach = props => {
  const { name, description, items_to_bring, popular_activities } = props;

  return (
    <>
      <h3>{name}</h3>
      <p><strong>Description: </strong>{description}</p>
      <p><strong>Items to Bring: </strong>{items_to_bring}</p>
      <p><strong>Popular Activities: </strong>{popular_activities}</p>
    </>
  )
};

export default Beach;