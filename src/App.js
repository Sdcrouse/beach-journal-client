import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchBeaches } from "./actions/beachActions";
import Home from "./components/Home";
import BeachesPage from "./components/BeachesPage";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.fetchBeaches()
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/beaches">
            <BeachesPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBeaches: () => dispatch( fetchBeaches() )
});

export default connect(null, mapDispatchToProps)(App);
