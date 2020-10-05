import React, { Component } from 'react';
import { createBeach } from '../actions/beachActions';
import { connect } from 'react-redux';
import '../App.css';
import { Redirect } from 'react-router-dom';
import LocationInputs from './LocationInputs';
import AttractionInputs from './AttractionInputs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="name" className="align-items-center">
            <Form.Label className="required-field">Name:</Form.Label>
            <Col xs="auto">
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                required
              />
            </Col>
          </Form.Group>

          <LocationInputs handleChange={this.handleLocationInputChange} {...location} />

          <Form.Group as={Row} controlId="description" className="align-items-center">
            <Form.Label className="required-field">Description:</Form.Label>
            <Col sm={5}>
              <Form.Control
                as="textarea"
                rows="2"
                name="description"
                value={description}
                onChange={this.handleChange}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="items_to_bring" className="align-items-center">
            <Form.Label>What should you bring<br />when visiting this beach?</Form.Label>
            <Col sm={4}>
              <Form.Control
                as="textarea"
                rows="2"
                name="items_to_bring"
                value={items_to_bring}
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="popular_activities" className="align-items-center">
            <Form.Label>Popular<br />Activities:</Form.Label>
            <Col sm={5}>
              <Form.Control
                as="textarea"
                rows="2"
                name="popular_activities"
                value={popular_activities}
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>

          <h2>Attractions</h2>
          {attractions_attributes.map((attraction, index) => 
            <AttractionInputs key={index} index={index} handleChange={this.handleAttractionInputChange} {...attraction} />
          )}
          <p>
            <Button onClick={this.handleAddAttraction}>Add Attraction</Button>
          </p>
          
          <Button type="submit">Create Beach</Button>
        </Form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBeach: beachData => dispatch(createBeach(beachData))
});

export default connect(null, mapDispatchToProps)(NewBeachPage);