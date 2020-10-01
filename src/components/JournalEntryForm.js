import React, { Component } from 'react';

class JournalEntryForm extends Component {
  state = {
    journalEntry: {
      beachId: this.props.beachId,
      date: '',
      title: '',
      topics: '',
      entry_text: ''
    }
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
    event.preventDefault();
    console.log("Journal Entry succesfully written! Here's the data you submitted: ", this.state);
  }
  
  render() {
    const { date, title, topics, entry_text } = this.state.journalEntry;

    return (
      <>
        <h3>New Journal Entry</h3>

        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="date">Date: </label>
            <input type="text" id="date" name="date" value={date} onChange={this.handleChange} />
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
            <label htmlFor="entry_text">Entry Text: </label>
            <textarea id="entry_text" name="entry_text" value={entry_text} onChange={this.handleChange} />
          </p>
          <p>
            <input type="submit" value="Write this Journal Entry!" />
          </p>
        </form>
      </>
    )
  }
}

export default JournalEntryForm;