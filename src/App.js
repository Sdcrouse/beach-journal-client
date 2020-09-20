import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchBeaches } from "./actions/beachActions";
import Home from "./components/Home";
import BeachesPage from "./components/BeachesPage";
import NewBeachPage from "./components/NewBeachPage";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.fetchBeaches()
  }

  render() {
    let pageContent;

    if (this.props.retrievingData) {
      pageContent = 
        <>
          <h1>Welcome to the Beach Journal!</h1>
          <p>Please wait while we load your saved beaches...</p>
        </>;
    } else {
      pageContent = 
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/beaches/new">
              <NewBeachPage />
            </Route>
            <Route path="/beaches">
              <BeachesPage />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
    }

    return pageContent;
  }
}

const mapStateToProps = state => ({
  retrievingData: state.beachData.retrievingData
});

const mapDispatchToProps = dispatch => ({
  fetchBeaches: () => dispatch( fetchBeaches() )
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
