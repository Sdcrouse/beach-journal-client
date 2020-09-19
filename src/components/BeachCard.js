import React from 'react';

const BeachCard = ({ beachInfo }) => {
  return (
    <>
      <h2>{beachInfo.name}</h2>
      <p>{beachInfo.description}</p>   
    </>
  )
};

export default BeachCard;