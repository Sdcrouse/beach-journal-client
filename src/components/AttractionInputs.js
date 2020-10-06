import React from 'react';
import '../App.css';
import { LabeledInput, LabeledTextarea } from './LabelsAndInputs';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const AttractionInputs = ({ index, category, name, description, handleChange }) => {
  let categoryId = `category-${index}`, nameId = `name-${index}`, descId = `description-${index}`;
  return (
    <Form.Row>
      <Col xs={3}>
        <LabeledInput
          inputName="category"
          inputValue={category}
          inputId={categoryId}
          inputDataId={index}
          labelClass="required-field"
          labelText="Category:"
          onChange={handleChange}
          required={true}
        />
      </Col>
      <Col xs={3}>
        <LabeledInput
          inputName="name"
          inputValue={name}
          inputId={nameId}
          inputDataId={index}
          labelClass="required-field"
          labelText="Name:"
          onChange={handleChange}
          required={true}
        />
      </Col>
      <Col xs={6}>
        <LabeledTextarea
          inputName="description"
          inputValue={description}
          inputId={descId}
          inputDataId={index}
          labelClass="required-field"
          labelText="Description:"
          onChange={handleChange}
          required={true}
          colSize={10}
        />
      </Col>
    </Form.Row>
  );
};

export default AttractionInputs;