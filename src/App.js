import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchBeaches } from "./actions/beachActions";
import Home from "./components/Home";
import BeachesContainer from './components/beach/BeachesContainer';
import NewBeachPage from "./components/beach/NewBeachPage";
import FigureImage from 'react-bootstrap/FigureImage';
import FigureCaption from 'react-bootstrap/FigureCaption';
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
        <>
          <Navbar />
          <section>
            <Switch>
              <Route path="/beaches/new">
                <NewBeachPage />
              </Route>
              <Route 
                path="/beaches"
                render={(props) => <BeachesContainer {...props} />}
              />
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </section>
        </>
    }

    return (
      <div className="App">
        <header>
          <FigureImage alt="Beach ball and Beach Journal title" src={require('./beach-journal-header.png')} width="100%" />
          <FigureCaption className="custom-caption">
            Original beach ball image by <a href="https://pixabay.com/users/zrblue-10475804/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5422214">ZRblue</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5422214">Pixabay</a>
          </FigureCaption>
        </header>
        {pageContent}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  retrievingData: state.beachData.retrievingData
});

const mapDispatchToProps = dispatch => ({
  fetchBeaches: () => dispatch( fetchBeaches() )
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
