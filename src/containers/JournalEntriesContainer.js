import React, { Component } from 'react';
import { connect } from 'react-redux';
import JournalEntry from '../components/JournalEntry';
import { withRouter } from 'react-router';
import { Switch, Route, Link } from 'react-router-dom';

class JournalEntriesContainer extends Component {
  render() {
    const { journalEntries, beachId, location } = this.props;

    const entriesByBeach = Object.values(journalEntries).filter(
      entry => entry.beach_id === beachId
    );

    let pageContent;

    if (entriesByBeach.length > 0) {
      pageContent = entriesByBeach.map( entry => <JournalEntry key={entry.id} {...entry} /> )
    } else {
      pageContent = <p>No journal entries yet. Feel free to write one!</p>
    }

    return (
      <>
        <h2>Journal Entries:</h2>

        {location.pathname === `/beaches/${beachId}` &&
          <Link to={`/beaches/${beachId}/journal_entries/new`}>
            <button>New Journal Entry</button>
          </Link>
        }

        <Switch>
          <Route path={`/beaches/${beachId}/journal_entries/new`}>
            <h3>New Journal Entry</h3>
          </Route>
        </Switch>

        {pageContent}
      </>
    )
  }
}

const mapStateToProps = ({ journalEntries }) => ({ journalEntries });

export default withRouter( connect(mapStateToProps)(JournalEntriesContainer) );