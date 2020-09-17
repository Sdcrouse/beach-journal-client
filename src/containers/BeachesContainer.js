import React, { Component } from 'react';
import Beach from '../components/Beach';
import { connect } from 'react-redux';

class BeachesContainer extends Component {
  render() {
    const { beaches, locations } = this.props;

    const beachComponents = Object.keys(beaches).map(beachId => {
      const beach = beaches[beachId];
      const location = locations[beach.location]; // Note: beach.location is actually the id of the beach's location.

      return <Beach key={beachId} locationInfo={location} {...beach} />
    });

    return (
      <>
        {beachComponents}
      </>
    );
  }
}

const mapStateToProps = state => ({
  beaches: state.beaches,
  locations: state.locations
});

export default connect(mapStateToProps)(BeachesContainer);