import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBeach } from '../../actions/beachActions';
import { Redirect } from 'react-router-dom';
import LocationInputs from '../location/LocationInputs';
import AttractionInputs from '../attraction/AttractionInputs';
import '../../App.css';
import Form from 'react-bootstrap/Form';
import { LabeledInput, LabeledTextarea } from '../LabelsAndInputs';
import Button from 'react-bootstrap/Button';

const NewBeachPage = () => {
  const dispatch = useDispatch();

  const [beachData, setBeachData] = useState({
    name: '',
    description: '',
    items_to_bring: '',
    popular_activities: '',
  });

  const [location, setLocation] = useState({
    city: '',
    state: '',
    country: ''
  });

  const [attractions, setAttractions] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const handleBeachInputChange = event => {
    setBeachData({
      ...beachData,
      [event.target.name]: event.target.value
    })
  }

  const handleLocationInputChange = event => {
    setLocation({
      ...location,
      [event.target.name]: event.target.value
    })
  }

  const handleAddAttraction = event => {
    event.preventDefault();

    setAttractions([
      ...attractions,
      {category: '', name: '', description: ''}
    ]);
  }

  const handleAttractionInputChange = event => {
    const { dataset, name, value } = event.target;
    let updatedAttractions = [...attractions];

    updatedAttractions[dataset.id][name] = value;

    setAttractions(updatedAttractions);
  }

  const handleSubmit = event => {
    const {name, description} = beachData;
    const {city, state, country} = location;

    event.preventDefault();

    if (name === '' || description === '' || city === '' || state === '' || country === '') {
      setErrorMessage("One or more required fields have not been filled out.");
    } else {
      dispatch(createBeach({
        ...beachData,
        location,
        attractions_attributes: attractions
      }));

      setRedirect(true);
    }
  }

  const conditionallyRedirectToBeaches = () => {
    if (redirect) {
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

  return (
    <>
      {conditionallyRedirectToBeaches()}
      
      <h1>New Beach</h1>
      <p><strong>* </strong><span className="required-field">Required field</span></p>

      {errorMessage && <h3>{errorMessage}</h3>}

      <Form onSubmit={handleSubmit}>
        <LabeledInput
          inputName="name"
          inputValue={beachData.name}
          labelClass="required-field"
          labelText="Name:"
          onChange={handleBeachInputChange}
          required={true}
        />

        <LocationInputs handleChange={handleLocationInputChange} {...location} />

        <LabeledTextarea
          inputName="description"
          inputValue={beachData.description}
          labelClass="required-field"
          labelText="Description:"
          onChange={handleBeachInputChange}
          required={true}
          colSize={5}
        />
        <LabeledTextarea
          inputName="items_to_bring"
          inputValue={beachData.items_to_bring}
          labelText="What should you bring when visiting this beach?"
          onChange={handleBeachInputChange}
          colSize={4}
        />
        <LabeledTextarea
          inputName="popular_activities"
          inputValue={beachData.popular_activities}
          labelText="Popular Activities:"
          onChange={handleBeachInputChange}
          colSize={5}
        />

        <h2 className="secondary-labels">Attractions</h2>
        {attractions.map((attraction, index) => 
          <AttractionInputs key={index} index={index} handleChange={handleAttractionInputChange} {...attraction} />
        )}
        <p>
          <Button onClick={handleAddAttraction} variant="warning">Add Attraction</Button>
        </p>

        <Button type="submit">Create Beach</Button>
      </Form>
    </>
  );
}

export default NewBeachPage;