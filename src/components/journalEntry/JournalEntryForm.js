import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createJournalEntry } from '../../actions/journalEntryActions';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { LabeledInput, LabeledTextarea } from '../LabelsAndInputs';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const JournalEntryForm = props => {
  const dispatch = useDispatch();
  
  const [journalEntry, setJournalEntry] = useState({
    beach_id: props.beachId,
    date: '',
    title: '',
    topics: '',
    entry_text: ''
  });

  const { date, title, topics, entry_text, beach_id } = journalEntry;
  
  const [errorMessage, setErrorMessage] = useState('');
  const [redirect, setRedirect] = useState(false);
  
  const handleChange = event => {
    setJournalEntry({
      ...journalEntry,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();

    if (date === '' || entry_text === '') {
      setErrorMessage("One or more required fields have not been filled out.");
    } else {
      dispatch(createJournalEntry({ journalEntry }));
      setRedirect(true);
    }
  }

  const conditionallyRedirectToBeach = beach_id => {
    // Stretch goal: See if I can just replace the form with all of the journal entries, instead of redirecting.

    if (redirect) {
      return (
        <Redirect 
          to={{
            pathname: `/beaches/${beach_id}`,
            state: {successMessage: "Journal entry successfully created!"}
          }}
        />
      )
    }
  }

  return (
    <Container className="journal-entry-form">
      {conditionallyRedirectToBeach(beach_id)}

      <h3>New Journal Entry</h3>
      <p><strong>* </strong><span className="required-field">Required field</span></p>

      {errorMessage && <h4>{errorMessage}</h4>}

      <Form onSubmit={handleSubmit}>
        <LabeledInput
          inputName="date"
          inputValue={date}
          labelClass="required-field"
          labelText="Date:"
          onChange={handleChange}
          required={true}
        />
        <LabeledInput
          inputName="title"
          inputValue={title}
          labelText="Title:"
          onChange={handleChange}
        />
        <LabeledInput
          inputName="topics"
          inputValue={topics}
          labelText="Topics:"
          onChange={handleChange}
        />
        <LabeledTextarea
          inputName="entry_text"
          inputValue={entry_text}
          labelClass="required-field"
          labelText="Entry Text:"
          onChange={handleChange}
          required={true}
          colSize={10}
          rows="15"
        />
        <Button type="submit">Write this Journal Entry!</Button>
      </Form>
    </Container>
  )
}

export default JournalEntryForm;