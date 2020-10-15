import React from 'react';
import { Link } from 'react-router-dom';
import Location from './location/Location';
import '../App.css';

const BeachCard = ({ beachInfo, locationInfo }) => {
  return (
    <>
      <br />
      <div className="beach-card">
        <h2>{beachInfo.name}</h2>
        
        {locationInfo &&
          <p><Location {...locationInfo} /></p>
        }
        
        <p>{beachInfo.description}</p>
        <Link to={`/beaches/${beachInfo.id}`}><button>View Beach</button></Link>
      </div>
      <br />
    </>
  )
};

export default BeachCard;