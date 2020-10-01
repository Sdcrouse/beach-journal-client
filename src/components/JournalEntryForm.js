import React, { Component } from 'react';

class JournalEntryForm extends Component {
  state = {
    beachId: this.props.beachId
  };
  
  render() {
    return (
      <>
        <h3>New Journal Entry</h3>
        
        <form>
          <p>
            <label htmlFor="date">Date: </label>
            <input type="text" id="date" name="date" />
          </p>
          <p>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" />
          </p>
          <p>
            <label htmlFor="topics">Topics: </label>
            <input type="text" id="topics" name="topics" />
          </p>
          <p>
            <label htmlFor="entry_text">Entry Text: </label>
            <textarea id="entry_text" name="entry_text" />
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