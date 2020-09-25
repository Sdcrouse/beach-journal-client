import React, { Component } from 'react';
import { createBeach } from '../actions/beachActions';
import { connect } from 'react-redux';
import '../App.css';
import { Redirect } from 'react-router-dom';

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
      ...this.state,
      location: {
        ...this.state.location,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    const {name, description, location} = this.state;
    const {city, state, country} = location;

    if (name === '' || description === '' || city === '' || state === '' || country === '') {
      this.setState({
        ...this.state,
        errorMessage: "One or more required fields have not been filled out."
      })
    } else {
      this.props.createBeach(this.state);
      console.log("Beach form submitted!");
      this.setState({
        ...this.state,
        redirect: true
      })
    }
  }

  redirectToBeaches = () => {
    if (this.state.redirect) {
      return <Redirect to="/beaches" />
    }
  }

  render() {
    return (
      <>
        {this.redirectToBeaches()}
        
        <h1>New Beach</h1>
        <p className="required-field">Red text indicates a required field.</p>

        {this.state.errorMessage &&
          <h3>{this.state.errorMessage}</h3>
        }

        {/* Idea: For the location's state, make it required, but let users know that "N/A" is fine if the beach is in a country without states. */}
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="name" className="required-field">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <strong >Location Info: </strong>

            <label htmlFor="location_city" className="required-field">City: </label>
            <input
              name="city"
              id="location_city"
              value={this.state.location.city}
              onChange={this.handleLocationInputChange}
              required
            />

            <label htmlFor="location_state" className="required-field">State: </label>
            {/* I may want to refactor this, to avoid confusion between React state and a country's states. */}
            <input
              name="state"
              id="location_state"
              value={this.state.location.state}
              onChange={this.handleLocationInputChange}
              required
            />

            <label htmlFor="location_country" className="required-field">Country: </label>
            <input
              name="country"
              id="location_country"
              value={this.state.location.country}
              onChange={this.handleLocationInputChange}
              required
            />
          </p>
          <p>
            <label htmlFor="description" className="required-field">Description: </label>
            <textarea
              name="description"
              id="description"
              value={this.state.description}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor="items_to_bring">What to bring, wear, etc. </label>
            <textarea
              name="items_to_bring"
              id="items_to_bring"
              value={this.state.items_to_bring}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="popular_activities">Popular Activities: </label>
            <textarea
              name="popular_activities"
              id="popular_activities"
              value={this.state.popular_activities}
              onChange={this.handleChange}
            />
          </p>
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