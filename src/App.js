import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchBeaches } from "./actions/beachActions";
import Home from "./components/Home";
import BeachesPage from "./components/BeachesPage";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.fetchBeaches()
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/beaches">
            <BeachesPage beaches={this.props.beaches} />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
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
