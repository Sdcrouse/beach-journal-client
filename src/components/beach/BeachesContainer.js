import React from 'react';
import { useSelector } from 'react-redux';
import { beachesSelector } from '../../selectors';
import BeachCard from './BeachCard';
import Beach from './Beach';
import SuccessMessage from '../SuccessMessage';
import { Switch, Route } from 'react-router-dom';
import '../../App.css';
import Container from 'react-bootstrap/Container';

const BeachesContainer = () => {
  const beaches = useSelector(beachesSelector);

  let [beachRoutes, beachCards] = [ [], [] ]; // Stretch goal: Refactor these nested routes with hooks.

  for (const beach of Object.values(beaches)) {
    const { id } = beach;

    beachRoutes.push(
      <Route path={`/beaches/${id}`} key={id}>
        <Beach {...beach} />
      </Route>
    );

    beachCards.push(<BeachCard beachInfo={beach} key={id} />);
  }

  return (
    <Switch>
      {beachRoutes}
      <Route path={'/beaches'}>
        <SuccessMessage />

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