import React from 'react';

const AttractionInputs = ({ index, category, name, description, handleChange }) => {
  let categoryId = `category-${index}`, nameId = `name-${index}`, descId = `description-${index}`;
  return (
    <p>
      <label htmlFor={categoryId}>Category: </label>
      <input
        type="text"
        id={categoryId}
        data-id={index}
        name="category"
        value={category}
        onChange={handleChange}
        required
      />
      <label htmlFor={nameId}>Name: </label>
      <input
        type="text"
        id={nameId}
        data-id={index}
        name="name"
        value={name}
        onChange={handleChange}
        required
      />
      <label htmlFor={descId}>Description: </label>
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