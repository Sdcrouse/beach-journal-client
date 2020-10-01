import React, { Component } from 'react';

class JournalEntryForm extends Component {
  state = {
    beachId: this.props.beachId
  };
  
  render() {
    return <h3>New Journal Entry</h3>
  }
}

export default JournalEntryForm;