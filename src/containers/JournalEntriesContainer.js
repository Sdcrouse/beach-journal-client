import React, { Component } from 'react';
import { connect } from 'react-redux';

class JournalEntriesContainer extends Component {
  render() {
    const entriesByBeach = Object.values(this.props.journalEntries).filter(
      entry => entry.beach_id === this.props.beachId
    );

    let pageContent;

    if (entriesByBeach.length > 0) {
      pageContent = 
        <ul>
          {entriesByBeach.map( entry => <li key={entry.id}>{entry.title}</li> )}
        </ul>;
    } else {
      pageContent = <p>No journal entries yet. Feel free to write one!</p>
    }

    return (
      <>
        <h3>Journal Entries: </h3>
        {pageContent}
      </>
    )
  }
}

const mapStateToProps = ({ journalEntries }) => ({ journalEntries });

export default connect(mapStateToProps)(JournalEntriesContainer);