import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { createJournalEntry } from '../actions/journalEntryActions';
import { Redirect } from 'react-router-dom';

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
      <>
        {this.redirectToBeach(beach_id)}

        <h3>New Journal Entry</h3>
        <p className="required-field">Red text indicates a required field.</p>

        {this.state.errorMessage &&
          <h4>{this.state.errorMessage}</h4>
        }

        <form onSubmit={this.handleSubmit}>
          <p>
            <label className="required-field" htmlFor="date">Date: </label>
            <input type="text" id="date" name="date" value={date} onChange={this.handleChange} required />
          </p>
          <p>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" value={title} onChange={this.handleChange} />
          </p>
          <p>
            <label htmlFor="topics">Topics: </label>
            <input type="text" id="topics" name="topics" value={topics} onChange={this.handleChange} />
          </p>
          <p>
            <label className="required-field" htmlFor="entry_text">Entry Text: </label>
            <textarea id="entry_text" name="entry_text" value={entry_text} onChange={this.handleChange} required />
          </p>
          <p>
            <input type="submit" value="Write this Journal Entry!" />
          </p>
        </form>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createJournalEntry: entryData => dispatch(createJournalEntry(entryData))
});

export default connect(null, mapDispatchToProps)(JournalEntryForm);