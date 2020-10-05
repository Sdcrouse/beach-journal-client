import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteJournalEntry } from '../actions/journalEntryActions';

const JournalEntry = ({ id, beach_id, title, topics, date, entry_text }) => {
  const dispatch = useDispatch();
  let topicsList;

  if(topics) {
    topicsList = <p>Topics: {topics}</p>;
  }

  const textParagraphs = entry_text.split("\n\n").map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <>
      <p><strong className="tertiary-labels">{title}</strong></p>
      {topicsList}
      <p>{date}</p>
      {textParagraphs}
      <button onClick={() => dispatch( deleteJournalEntry(id, beach_id) )}>Delete this Journal Entry</button>
    </>
  );
};

export default JournalEntry;