import React, { useState } from 'react';
import LocationInputs from '../location/LocationInputs';
import '../../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NewBeachPageV2 = () => {
  const [location, setLocation] = useState({
    city: '',
    state: '',
    country: ''
  });

  const handleLocationInputChange = event => {
    setLocation({
      ...location,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Beach form submitted!");
    console.log("Location Data: ", location);
  }

  return (
    <>
      <h1>New Beach</h1>
      <p><strong>* </strong><span className="required-field">Required field</span></p>

      <Form onSubmit={handleSubmit}>
        <LocationInputs handleChange={handleLocationInputChange} {...location} />

        <Button type="submit">Create Beach</Button>
      </Form>
    </>
  );
}

export default NewBeachPageV2;