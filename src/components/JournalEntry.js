import React from 'react';

const JournalEntry = ({ title, topics, date, entry_text }) => {
  let topicsList;

  if(topics) {
    topicsList = <p>Topics: {topics}</p>;
  }

  const textParagraphs = entry_text.split("\n\n").map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <>
      <p><strong>{title}</strong></p>
      {topicsList}
      <p>{date}</p>
      {textParagraphs}
    </>
  );
};

export default JournalEntry;