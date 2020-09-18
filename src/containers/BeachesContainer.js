import React, { Component } from 'react';
import Beach from '../components/Beach';
import { connect } from 'react-redux';

class BeachesContainer extends Component {
  render() {
    const { beaches, locations } = this.props;

    const beachComponents = Object.values(beaches).map(beach => {
      const location = locations[beach.location_id];

      return <Beach key={beach.id} locationInfo={location} {...beach} />
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