import React from 'react';
import '../App.css';
import { LabeledInput, LabeledTextarea } from './LabelsAndInputs';

const AttractionInputs = ({ index, category, name, description, handleChange }) => {
  let categoryId = `category-${index}`, nameId = `name-${index}`, descId = `description-${index}`;
  return (
    <>
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
      <LabeledTextarea
        inputName="description"
        inputValue={description}
        inputId={descId}
        inputDataId={index}
        labelClass="required-field"
        labelText="Description:"
        onChange={handleChange}
        required={true}
        colSize={5}
      />
    </>
  );
};

export default AttractionInputs;