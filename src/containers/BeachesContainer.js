import React, { Component } from 'react';
import { connect } from 'react-redux';
import BeachCard from '../components/BeachCard';
import Beach from '../components/Beach';
import { Switch, Route, Link } from 'react-router-dom';

class BeachesContainer extends Component {
  render() {
    const { beaches, locations, attractions } = this.props;

    const beachCards = Object.values(beaches).map(beach => {
      const location = locations[beach.location_id];
      const beachAttractions = Object.values(attractions).filter(attr => attr.beach_id === beach.id);

      return (
        <>
          <Switch>
            <Route path={`/beaches/${beach.id}`}>
              <Beach locationInfo={location} attractions={beachAttractions} {...beach} />
            </Route>
            <Route path={'/beaches'}>
              <BeachCard key={beach.id} beachInfo={beach} />
              <Link to={`/beaches/${beach.id}`}><button>View Beach</button></Link>
            </Route>
          </Switch>
        </>
      );
    });

    return beachCards;
  }
}

const mapStateToProps = state => ({ 
  beaches: state.beachData.beaches,
  locations: state.locations,
  attractions: state.attractions
});

export default connect(mapStateToProps)(BeachesContainer);