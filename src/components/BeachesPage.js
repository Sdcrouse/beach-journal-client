import React, { Component } from 'react';
import Beach from './Beach';
import { connect } from 'react-redux';

class BeachesPage extends Component {
  render() {
    const beaches = this.props.beaches; 
    
    return (
      <>
        <header className="App-header">
          <h1>Your Saved Beaches:</h1>
        </header>

        {Object.keys(beaches).map(
          beachKey => <Beach key={beachKey} {...beaches[beachKey]} />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  beaches: state.beaches
});

export default connect(mapStateToProps)(BeachesPage);