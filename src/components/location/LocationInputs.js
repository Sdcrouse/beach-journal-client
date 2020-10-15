import React from 'react';
import { LabeledInput } from '../LabelsAndInputs';

const LocationInputs = ({ city, state, country, handleChange }) => (
  <>
    <LabeledInput
      inputName="city"
      value={city}
      inputId="location_city"
      labelClass="required-field"
      labelText="City:"
      onChange={handleChange}
      required={true}
    />
    <LabeledInput
      inputName="state"
      value={state}
      inputId="location_state"
      labelClass="required-field"
      labelText="State/Province (if none, then write 'N/A'):"
      onChange={handleChange}
      required={true}
    />
    <LabeledInput
      inputName="country"
      value={country}
      inputId="location_country"
      labelClass="required-field"
      labelText="Country:"
      onChange={handleChange}
      required={true}
    />
  </>
);

export default LocationInputs;

// Stretch goal: Fiddle around with this layout:
/*  import Form from 'react-bootstrap/Form';
 *  import Col from 'react-bootstrap/Col';
 *  <Form.Row>
 *    <Col xs={3}>
 *      <LabeledInput
 *        inputName="city"
 *        value={city}
 *        inputId="location_city"
 *        labelClass="required-field"
 *        labelText="City:"
 *        onChange={handleChange}
 *        required={true}
 *      />
 *    </Col>
 *    <Col xs={6}>
 *      <LabeledInput
 *        inputName="state"
 *        value={state}
 *        inputId="location_state"
 *        labelClass="required-field"
 *        labelText="State/Province (if none, then write 'N/A'):"
 *        onChange={handleChange}
 *        required={true}
 *      />
 *    </Col>
 *    <Col xs={3}>
 *      <LabeledInput
 *        inputName="country"
 *        value={country}
 *        inputId="location_country"
 *        labelClass="required-field"
 *        labelText="Country:"
 *        onChange={handleChange}
 *        required={true}
 *      />
 *    </Col>
 *  </Form.Row>
 */