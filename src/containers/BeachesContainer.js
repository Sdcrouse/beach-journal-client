import React, { Component } from 'react';
import Beach from '../components/Beach';
import { connect } from 'react-redux';

class BeachesContainer extends Component {
  render() {
    const beaches = this.props.beaches;

    return (
      <>
        {Object.keys(beaches).map(
          beachKey => <Beach key={beachKey} {...beaches[beachKey]} />
        )}
      </>  
    )
  }
}

const mapStateToProps = state => ({
  beaches: state.beaches
});

export default connect(mapStateToProps)(BeachesContainer);