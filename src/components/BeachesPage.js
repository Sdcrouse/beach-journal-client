import React, { Component } from 'react';
import Beach from './Beach';
import { connect } from 'react-redux';

class BeachesPage extends Component {
  render() {
    console.log(this.props.beaches);
    return (
      <>
        <header className="App-header">
          <h1>Your Saved Beaches:</h1>
        </header>

        {this.props.beaches.map(
          beach => <Beach key={beach.id} {...beach.attributes} />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  beaches: state.beaches
});

export default connect(mapStateToProps)(BeachesPage);