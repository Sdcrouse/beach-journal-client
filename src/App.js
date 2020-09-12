import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchBeaches } from "./actions/beachActions"

class App extends Component {
  componentDidMount() {
    this.props.fetchBeaches()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Beach Journal!</h1>
          <h2>Your Saved Beaches:</h2>
          {
            this.props.beaches.map(
              beach => <p>{beach.attributes.name}</p>
            )
          }
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  beaches: state.beaches
})

const mapDispatchToProps = dispatch => ({
  fetchBeaches: () => dispatch( fetchBeaches() )
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
