import React, { Component } from 'react';
import { connect } from 'react-redux';

class JournalEntriesContainer extends Component {
  render() {
    const entriesByBeach = Object.values(this.props.journalEntries).filter(
      entry => entry.beach_id === this.props.beachId
    );

    return (
      <>
        <p>Displaying Journal Entries for Beach with id {this.props.beachId}:</p>
        <ul>
          {entriesByBeach.map( entry => <li key={entry.id}>{entry.title}</li> )}
        </ul>
      </>
    )
  }
}

const mapStateToProps = ({ journalEntries }) => ({ journalEntries });

export default connect(mapStateToProps)(JournalEntriesContainer);