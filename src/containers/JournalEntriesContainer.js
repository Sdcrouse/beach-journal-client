import React from 'react';
import { useSelector } from 'react-redux';
import JournalEntry from '../components/journalEntry/JournalEntry';
import { withRouter } from 'react-router';
import { Switch, Route, Link } from 'react-router-dom';
import JournalEntryForm from '../components/journalEntry/JournalEntryForm';
import Container from 'react-bootstrap/Container';

const JournalEntriesContainer = props => {
  const journalEntries = useSelector(state => state.journalEntries);
  const { beachId, location } = props;

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
      <h2 className="secondary-labels">Journal Entries:</h2>

      {location.state && 
        <h4 className="success-message">{location.state.successMessage}</h4>
      }

      {location.pathname === `/beaches/${beachId}` &&
        <Link to={`/beaches/${beachId}/journal_entries/new`}>
          <button>New Journal Entry</button>
        </Link>
      }

      <Switch>
        <Route path={`/beaches/${beachId}/journal_entries/new`}>
          <JournalEntryForm beachId={beachId} />
        </Route>
      </Switch>

      <Container>
        {pageContent}
      </Container>
    </>
  )
}

export default withRouter(JournalEntriesContainer);