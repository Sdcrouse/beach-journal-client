import React, { Component } from 'react';
import { createBeach } from '../actions/beachActions';
import { connect } from 'react-redux';
import '../App.css';
import { Redirect } from 'react-router-dom';
import LocationInputs from './LocationInputs';
import AttractionInputs from './AttractionInputs';

class NewBeachPage extends Component {
  state = {
    name: '',
    description: '',
    items_to_bring: '',
    popular_activities: '',
    location: {
      city: '',
      state: '',
      country: ''
    },
    attractions_attributes: [],
    errorMessage: null,
    redirect: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLocationInputChange = event => {
    this.setState({
      location: {
        ...this.state.location,
        [event.target.name]: event.target.value
      }
    })
  }

  handleAddAttraction = event => {
    event.preventDefault();

    this.setState((state) => ({
      attractions_attributes: [...state.attractions_attributes, {category: '', name: '', description: ''}]
    }))
  }

  handleAttractionInputChange = event => {
    let attractions_attributes = [...this.state.attractions_attributes];
    const { dataset, name, value } = event.target;

    attractions_attributes[dataset.id][name] = value;

    this.setState({ attractions_attributes });
  }

  handleSubmit = event => {
    event.preventDefault();

    const {name, description, location} = this.state;
    const {city, state, country} = location;

    if (name === '' || description === '' || city === '' || state === '' || country === '') {
      this.setState({
        errorMessage: "One or more required fields have not been filled out."
      })
    } else {
      this.props.createBeach(this.state);
      console.log("Beach form submitted!");
      this.setState({
        redirect: true
      })
    }
  }

  redirectToBeaches = () => {
    if (this.state.redirect) {
      return (
        <Redirect 
          to={{
            pathname: "/beaches",
            state: {successMessage: "Beach created! Scroll down to the bottom to view it."}
          }}
        />
      )
    }
  }

  render() {
    const {
      errorMessage, name, location, description, items_to_bring, popular_activities, attractions_attributes
    } = this.state;

    return (
      <>
        {this.redirectToBeaches()}

        <h1>New Beach</h1>
        <p className="required-field">Red text indicates a required field.</p>

        {errorMessage &&
          <h3>{errorMessage}</h3>
        }

        {/* Idea: For the location's state, make it required, but let users know that "N/A" is fine if the beach is in a country without states. */}
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="name" className="required-field">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </p>

          <LocationInputs handleChange={this.handleLocationInputChange} {...location} />

          <p>
            <label htmlFor="description" className="required-field">Description: </label>
            <textarea
              name="description"
              id="description"
              value={description}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor="items_to_bring">What to bring, wear, etc. </label>
            <textarea
              name="items_to_bring"
              id="items_to_bring"
              value={items_to_bring}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="popular_activities">Popular Activities: </label>
            <textarea
              name="popular_activities"
              id="popular_activities"
              value={popular_activities}
              onChange={this.handleChange}
            />
          </p>

          <h2>Attractions:</h2>
          {attractions_attributes.map((attraction, index) => 
            <AttractionInputs key={index} index={index} handleChange={this.handleAttractionInputChange} {...attraction} />
          )}
          <button onClick={this.handleAddAttraction}>Add Attraction</button>

          <p>
            <input type="submit" value="Create Beach" />
          </p>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBeach: beachData => dispatch(createBeach(beachData))
});

export default connect(null, mapDispatchToProps)(NewBeachPage);