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
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBeaches: () => dispatch( fetchBeaches() )
  }
}

export default connect(null, mapDispatchToProps)(App);
