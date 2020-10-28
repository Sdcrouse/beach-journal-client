import React from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import BeachCard from './BeachCard';
import Beach from './Beach';
import { Switch, Route } from 'react-router-dom';
import '../../App.css';
import Container from 'react-bootstrap/Container';

const beachesSelector = state => state.beachData.beaches;
const locationsSelector = state => state.locations;
const attractionsSelector = state => state.attractions;

const structuredBeachesSelector = createStructuredSelector({
  beaches: beachesSelector,
  locations: locationsSelector,
  attractions: attractionsSelector
});

const BeachesContainer = props => {
  const { beaches, locations, attractions } = useSelector(structuredBeachesSelector);

  let [beachRoutes, beachCards] = [ [], [] ];

  for (const beach of Object.values(beaches)) {
    const location = locations[beach.location_id];
    const beachAttractions = Object.values(attractions).filter(attr => attr.beach_id === beach.id);

    beachRoutes.push(
      <Route path={`/beaches/${beach.id}`} key={beach.id}>
        <Beach locationInfo={location} attractions={beachAttractions} {...beach} />
      </Route>
    );

    beachCards.push(<BeachCard beachInfo={beach} locationInfo={location} key={beach.id} />);
  }

  return (
    <Switch>
      {beachRoutes}
      <Route path={'/beaches'}>

        {props.location.state && 
          <h4 className="success-message">{props.location.state.successMessage}</h4>
        }

        <header className="App-header">
          <h1>Your Saved Beaches:</h1>
        </header>

        <Container>
          {beachCards}
        </Container>
      </Route>
    </Switch>
  );
}

export default BeachesContainer;