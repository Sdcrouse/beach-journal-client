import React from 'react';
import Beach from '../components/Beach';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

const BeachCard = ({locationInfo, attractions, beachInfo}) => {
  let match = useRouteMatch();

  return (
    <>
      <h2>{beachInfo.name}</h2>
      <Link to={`${match.url}/${beachInfo.id}`}><button>View Beach</button></Link>

      <Switch>
        <Route path={`${match.path}/${beachInfo.id}`}>
          <Beach locationInfo={locationInfo} attractions={attractions} {...beachInfo} />
        </Route>
      </Switch>      
    </>
  )
};

export default BeachCard;