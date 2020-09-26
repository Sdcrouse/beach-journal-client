import React from 'react';
import { Link } from 'react-router-dom';

const BeachCard = ({ beachInfo, locationInfo }) => {
  return (
    <>
      <h2>{beachInfo.name}</h2>
      
      {locationInfo &&
        <p>{locationInfo.city}, {locationInfo.state}, {locationInfo.country}</p>
      }
      
      <p>{beachInfo.description}</p>
      <Link to={`/beaches/${beachInfo.id}`}><button>View Beach</button></Link>
    </>
  )
};

export default BeachCard;