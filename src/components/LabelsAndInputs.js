import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const LabeledInput = ({ inputName, inputValue, inputId, inputDataId, labelClass, labelText, onChange, required }) => {
  const controlId = inputId ? inputId : inputName;
  
  return (
    <Form.Group as={Row} controlId={controlId} className="center-justify-content">
      <Form.Label className={labelClass}>{labelText}</Form.Label>
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

export const LabeledTextarea = ({ inputName, inputValue, inputId, inputDataId, labelClass, labelText, onChange, required, colSize, rows }) => {
  const controlId = inputId ? inputId : inputName;
  const rowNumber = rows ? rows : "2";

  return (
    <Form.Group as={Row} controlId={controlId} className="center-justify-content">
      <Form.Label className={labelClass}>{labelText}</Form.Label>
      <Col sm={colSize}>
        <Form.Control
          as="textarea"
          rows={rowNumber}
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