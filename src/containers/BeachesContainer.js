import React, { Component } from 'react';
import { connect } from 'react-redux';
import BeachCard from '../components/BeachCard';
import Beach from '../components/Beach';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
import Container from 'react-bootstrap/Container';

class BeachesContainer extends Component {
  render() {
    const { beaches, locations, attractions } = this.props;
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

          {this.props.location.state && 
            <h4 className="success-message">{this.props.location.state.successMessage}</h4>
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
}

const mapStateToProps = state => ({ 
  beaches: state.beachData.beaches,
  locations: state.locations,
  attractions: state.attractions
});

export default connect(mapStateToProps)(BeachesContainer);