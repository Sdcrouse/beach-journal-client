import React, { Component } from 'react';

class JournalEntriesContainer extends Component {
  render() {
    return (
      <p>Displaying Journal Entries for Beach with id {this.props.beachId}</p>
    )
  }
}

export default JournalEntriesContainer;