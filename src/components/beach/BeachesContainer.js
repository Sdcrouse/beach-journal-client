import React from 'react';
import { useSelector } from 'react-redux';
import { structuredBeachesSelector } from '../../selectors';
import BeachCard from './BeachCard';
import Beach from './Beach';
import { Switch, Route, useLocation } from 'react-router-dom';
import '../../App.css';
import Container from 'react-bootstrap/Container';

const BeachesContainer = () => {
  const { beaches } = useSelector(structuredBeachesSelector);
  const { state: routerState } = useLocation();

  let [beachRoutes, beachCards] = [ [], [] ]; // Stretch goal: Refactor these nested routes with hooks.

  for (const beach of Object.values(beaches)) {
    beachRoutes.push(
      <Route path={`/beaches/${beach.id}`} key={beach.id}>
        <Beach {...beach} />
      </Route>
    );

    beachCards.push(<BeachCard beachInfo={beach} key={beach.id} />);
  }

  return (
    <Switch>
      {beachRoutes}
      <Route path={'/beaches'}>
        {routerState && <h4 className="success-message">{routerState.successMessage}</h4>}

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