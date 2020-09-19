import React from 'react';
import Beach from '../components/Beach';

const BeachCard = ({locationInfo, attractions, beachInfo}) => {
  return (
    <>
      {/* <h2>{beachInfo.name}</h2>
      <p>{beachInfo.description}</p> */}
      <Beach locationInfo={locationInfo} attractions={attractions} {...beachInfo} />
    </>
  )
};

export default BeachCard;