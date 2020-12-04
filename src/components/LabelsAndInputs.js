import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const createLabel = (isRequired, labelText) => {
  return (
    isRequired
      ? <p><strong>*</strong> <Form.Label className="required-field">{labelText}</Form.Label></p>
      : <p><Form.Label>{labelText}</Form.Label></p>
  );
}

export const LabeledInput = ({ inputName, inputValue, inputId, inputDataId, labelText, onChange, required }) => {
  const controlId = inputId ? inputId : inputName;
    
  return (
    <Form.Group as={Row} controlId={controlId} className="center-justify-content">
      {createLabel(required, labelText)}

      <Col xs="auto">
        <Form.Control
          type="text"
          data-id={inputDataId}
          name={inputName}
          value={inputValue}
          onChange={onChange}
          required={required}
        />
      </Col>
    </Form.Group>
  );
};

export const LabeledTextarea = ({ inputName, inputValue, inputId, inputDataId, labelText, onChange, required, colSize, rows = 2 }) => {
  const controlId = inputId ? inputId : inputName;

  return (
    <Form.Group as={Row} controlId={controlId} className="center-justify-content">
      {createLabel(required, labelText)}

      <Col sm={colSize}>
        <Form.Control
          as="textarea"
          rows={rows}
          data-id={inputDataId}
          name={inputName}
          value={inputValue}
          onChange={onChange}
          required={required}
        />
      </Col>
    </Form.Group>
  );
};