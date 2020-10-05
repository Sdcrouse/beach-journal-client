import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const LabeledInput = ({ inputName, inputValue, labelClass, labelText, onChange, required }) => 
  <Form.Group as={Row} controlId={inputName} className="align-items-center">
    <Form.Label className={labelClass}>{labelText}</Form.Label>
    <Col xs="auto">
      <Form.Control
        type="text"
        name={inputName}
        value={inputValue}
        onChange={onChange}
        required={required}
      />
    </Col>
  </Form.Group>