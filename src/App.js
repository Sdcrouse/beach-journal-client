import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

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

const mapDispatchToProps = () => {
  return {
    fetchBeaches: () => {
      fetch("http://localhost:3000/api/v1/beaches")
        .then(resp => resp.json())
        .then(beachJson => console.log(beachJson))
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
