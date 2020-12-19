import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { journalEntriesByBeachSelector } from '../../selectors';
import JournalEntry from './JournalEntry';
import { withRouter } from 'react-router';
import { Switch, Route, Link } from 'react-router-dom';
import JournalEntryForm from './JournalEntryForm';
import Container from 'react-bootstrap/Container';

const JournalEntriesContainer = ({ beachId, location }) => {
  const selectJournalEntriesByBeach = useMemo(
    journalEntriesByBeachSelector,
    []
  );

  const journalEntriesByBeach = useSelector(state => 
    selectJournalEntriesByBeach(state, beachId)
  );

  let pageContent;

  if (journalEntriesByBeach.length > 0) {
    pageContent = journalEntriesByBeach.map( entry => <JournalEntry key={entry.id} {...entry} /> )
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