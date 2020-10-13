import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const LabeledInput = ({ inputName, inputValue, inputId, inputDataId, labelClass, labelText, onChange, required }) => {
  const controlId = inputId ? inputId : inputName;
  const requiredFieldMarker = labelClass === "required-field" ? <strong>*</strong> : '';
  
  return (
    <Form.Group as={Row} controlId={controlId} className="center-justify-content">
      <p>
        {requiredFieldMarker} <Form.Label className={labelClass}>{labelText}</Form.Label>
      </p>
      
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

export const LabeledTextarea = ({ inputName, inputValue, inputId, inputDataId, labelClass, labelText, onChange, required, colSize, rows = 2 }) => {
  const controlId = inputId ? inputId : inputName;
  const requiredFieldMarker = labelClass === "required-field" ? <strong>*</strong> : '';

  return (
    <Form.Group as={Row} controlId={controlId} className="center-justify-content">
      <p>
        {requiredFieldMarker} <Form.Label className={labelClass}>{labelText}</Form.Label>
      </p>

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