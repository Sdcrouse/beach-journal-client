import React, { useState } from 'react';
import LocationInputs from '../location/LocationInputs';
import AttractionInputs from '../attraction/AttractionInputs';
import '../../App.css';
import Form from 'react-bootstrap/Form';
import { LabeledInput, LabeledTextarea } from '../LabelsAndInputs';
import Button from 'react-bootstrap/Button';

const NewBeachPageV2 = () => {
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

  const handleChange = event => {
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
    event.preventDefault();
    console.log("Beach form submitted!");
    console.log("Beach data: ", beachData);
    console.log("Location Data: ", location);
    console.log("Attraction Data: ", attractions);
  }

  return (
    <>
      <h1>New Beach</h1>
      <p><strong>* </strong><span className="required-field">Required field</span></p>

      <Form onSubmit={handleSubmit}>
        <LabeledInput
          inputName="name"
          inputValue={beachData.name}
          labelClass="required-field"
          labelText="Name:"
          onChange={handleChange}
          required={true}
        />

        <LocationInputs handleChange={handleLocationInputChange} {...location} />

        <LabeledTextarea
          inputName="description"
          inputValue={beachData.description}
          labelClass="required-field"
          labelText="Description:"
          onChange={handleChange}
          required={true}
          colSize={5}
        />
        <LabeledTextarea
          inputName="items_to_bring"
          inputValue={beachData.items_to_bring}
          labelText="What should you bring when visiting this beach?"
          onChange={handleChange}
          colSize={4}
        />
        <LabeledTextarea
          inputName="popular_activities"
          inputValue={beachData.popular_activities}
          labelText="Popular Activities:"
          onChange={handleChange}
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

export default NewBeachPageV2;