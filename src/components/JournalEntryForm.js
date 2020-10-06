import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { createJournalEntry } from '../actions/journalEntryActions';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { LabeledInput, LabeledTextarea } from './LabelsAndInputs';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class JournalEntryForm extends Component {
  state = {
    journalEntry: {
      beach_id: this.props.beachId,
      date: '',
      title: '',
      topics: '',
      entry_text: ''
    },
    errorMessage: '',
    redirect: false
  };

  handleChange = event => {
    this.setState({
      journalEntry: {
        ...this.state.journalEntry,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    const { date, entry_text } = this.state.journalEntry;
    
    event.preventDefault();

    if (date === '' || entry_text === '') {
      this.setState({
        errorMessage: "One or more required fields have not been filled out."
      });
    } else {
      this.props.createJournalEntry(this.state);
      this.setState({
        redirect: true
      })
    }
  }

  redirectToBeach = beach_id => {
    // Stretch goal: See if I can just replace the form with all of the journal entries, instead of redirecting.

    if (this.state.redirect) {
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
  
  render() {
    const { date, title, topics, entry_text, beach_id } = this.state.journalEntry;

    return (
      <Container className="journal-entry-form">
        {this.redirectToBeach(beach_id)}

        <h3>New Journal Entry</h3>
        <p className="required-field">Red text indicates a required field.</p>

        {this.state.errorMessage &&
          <h4>{this.state.errorMessage}</h4>
        }

        <Form onSubmit={this.handleSubmit}>
          <LabeledInput
            inputName="date"
            inputValue={date}
            labelClass="required-field"
            labelText="Date:"
            onChange={this.handleChange}
            required={true}
          />
          <LabeledInput
            inputName="title"
            inputValue={title}
            labelText="Title:"
            onChange={this.handleChange}
          />
          <LabeledInput
            inputName="topics"
            inputValue={topics}
            labelText="Topics:"
            onChange={this.handleChange}
          />
          <LabeledTextarea
            inputName="entry_text"
            inputValue={entry_text}
            labelClass="required-field"
            labelText="Entry Text:"
            onChange={this.handleChange}
            required={true}
            colSize={10}
            rows="15"
          />
          <Button type="submit">Write this Journal Entry!</Button>
        </Form>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createJournalEntry: entryData => dispatch(createJournalEntry(entryData))
});

export default connect(null, mapDispatchToProps)(JournalEntryForm);