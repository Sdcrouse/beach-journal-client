import React from 'react';
import '../../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NewBeachPageV2 = () => {

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Beach form submitted!");
  }

  return (
    <>
      <h1>New Beach</h1>
      <p><strong>* </strong><span className="required-field">Required field</span></p>

      <Form onSubmit={handleSubmit}>
        <Button type="submit">Create Beach</Button>
      </Form>
    </>
  );
}

export default NewBeachPageV2;