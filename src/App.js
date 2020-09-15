import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchBeaches } from "./actions/beachActions";
import Home from "./components/Home";
import BeachesPage from "./components/BeachesPage";
import { Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.fetchBeaches()
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route exact path="/beaches" render={(routerProps) => 
          <BeachesPage {...routerProps} beaches={this.props.beaches} />
        }/>
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
