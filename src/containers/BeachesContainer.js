import React, { Component } from 'react';
import { connect } from 'react-redux';
import BeachCard from '../components/BeachCard';

class BeachesContainer extends Component {
  render() {
    const { beaches, locations, attractions } = this.props;

    const beachCards = Object.values(beaches).map(beach => {
      const location = locations[beach.location_id];
      const beachAttractions = Object.values(attractions).filter(attr => attr.beach_id === beach.id);

      return (
        <BeachCard key={beach.id} locationInfo={location} attractions={beachAttractions} beachInfo={beach} />
      );
    });

    return (
      <>
        {beachCards}
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