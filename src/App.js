import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchBeaches } from "./actions/beachActions";
import Home from "./components/Home";
import BeachesPage from "./components/BeachesPage";

class App extends Component {
  componentDidMount() {
    this.props.fetchBeaches()
  }

  render() {
    return (
      <div className="App">
        <Home />
        <BeachesPage beaches={this.props.beaches} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  beaches: state.beaches
});

const mapDispatchToProps = dispatch => ({
  fetchBeaches: () => dispatch( fetchBeaches() )
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
