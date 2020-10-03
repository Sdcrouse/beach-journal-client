import React from 'react';
import '../App.css';

const AttractionInputs = ({ index, category, name, description, handleChange }) => {
  let categoryId = `category-${index}`, nameId = `name-${index}`, descId = `description-${index}`;
  return (
    <p>
      <label htmlFor={categoryId} className="required-field">Category: </label>
      <input
        type="text"
        id={categoryId}
        data-id={index}
        name="category"
        value={category}
        onChange={handleChange}
        required
      />
      <label htmlFor={nameId} className="required-field">Name: </label>
      <input
        type="text"
        id={nameId}
        data-id={index}
        name="name"
        value={name}
        onChange={handleChange}
        required
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