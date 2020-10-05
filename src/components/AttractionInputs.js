import React from 'react';
import '../App.css';
import { LabeledInput } from './LabelsAndInputs';

const AttractionInputs = ({ index, category, name, description, handleChange }) => {
  let categoryId = `category-${index}`, nameId = `name-${index}`, descId = `description-${index}`;
  return (
    <p>
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
      <label htmlFor={descId} className="required-field">Description: </label>
      <textarea
        id={descId}
        data-id={index}
        name="description"
        value={description}
        onChange={handleChange}
        required
      />
    </p>
  );
};

export default AttractionInputs;