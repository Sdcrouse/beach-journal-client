import React, { Component } from 'react';
import { connect } from 'react-redux';
import BeachCard from '../components/BeachCard';
import Beach from '../components/Beach';
import { Switch, Route } from 'react-router-dom';

class BeachesContainer extends Component {
  render() {
    const { beaches, locations, attractions } = this.props;

    const beachDivs = Object.values(beaches).map(beach => {
      const location = locations[beach.location_id];
      const beachAttractions = Object.values(attractions).filter(attr => attr.beach_id === beach.id);

      return (
        <div key={beach.id}>
          <Switch>
            <Route path={`/beaches/${beach.id}`}>
              <Beach locationInfo={location} attractions={beachAttractions} {...beach} />
            </Route>
            <Route path={'/beaches'}>
              <BeachCard beachInfo={beach} />
            </Route>
          </Switch>
        </div>
      );
    });

    return (
      <>
        <header className="App-header">
          <h1>Your Saved Beaches:</h1>
        </header>
        
        {beachDivs}
      </>
    );
  }
}

const mapStateToProps = state => ({ 
  beaches: state.beachData.beaches,
  locations: state.locations,
  attractions: state.attractions
});

export default connect(mapStateToProps)(BeachesContainer);