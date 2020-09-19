import React from 'react';

const JournalEntry = ({ title, topics, date, entry_text }) => {
  let topicsList;

  if(topics) {
    topicsList = <p>Topics: {topics}</p>;
  }

  return (
    <>
      <p><strong>{title}</strong></p>
      {topicsList}
      <p>{date}</p>
      <p>{entry_text}</p>
    </>
  );
};

export default JournalEntry;