import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteJournalEntry } from '../actions/journalEntryActions';
import Button from 'react-bootstrap/Button';
import '../App.css';

const JournalEntry = ({ id, beach_id, title, topics, date, entry_text }) => {
  const dispatch = useDispatch();
  let topicsList;

  if(topics) {
    topicsList = <p>Topics: {topics}</p>;
  }

  const textParagraphs = entry_text.split("\n\n").map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <>
      <br />
      <div className="journal-entry">
        <p><strong className="tertiary-labels">{title}</strong></p>
        {topicsList}
        <p>{date}</p>
        {textParagraphs}
        <Button variant="dark" onClick={() => dispatch( deleteJournalEntry(id, beach_id) )}>Delete this Journal Entry</Button>
      </div>
      <br />
    </>
  );
};

export default JournalEntry;