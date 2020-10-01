const BASE_URL = "http://localhost:3000/api/v1/beaches";

export const createJournalEntry = entryData => {
  const journal_entry = entryData.journalEntry;

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ journal_entry })
  };

  return dispatch => {
    fetch(`${BASE_URL}/${journal_entry.beach_id}/journal_entries`, configObj)
      .then(response => response.json())
      .then(journalJson => {
        console.log("Journal Entry saved! Here it is: ", journalJson);
      })
  }
};