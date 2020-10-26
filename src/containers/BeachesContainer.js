import React from 'react';
import { useSelector } from 'react-redux';
import BeachCard from '../components/beach/BeachCard';
import Beach from '../components/beach/Beach';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
import Container from 'react-bootstrap/Container';

const BeachesContainer = props => {
  const beaches = useSelector(state => state.beachData.beaches);
  const locations = useSelector(state => state.locations);
  const attractions = useSelector(state => state.attractions);

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