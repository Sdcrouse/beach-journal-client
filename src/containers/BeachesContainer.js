import React, { Component } from 'react';
import Beach from '../components/Beach';
import { connect } from 'react-redux';

class BeachesContainer extends Component {
  render() {
    const { beaches, locations, attractions } = this.props;

    const beachComponents = Object.values(beaches).map(beach => {
      const location = locations[beach.location_id];
      const beachAttractions = Object.values(attractions).filter(attr => attr.beach_id === beach.id);

      return <Beach key={beach.id} locationInfo={location} attractions={beachAttractions} {...beach} />
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
  locations: state.locations,
  attractions: state.attractions
});

export default connect(mapStateToProps)(BeachesContainer);