const BASE_URL = "http://localhost:3000/api/v1/beaches";

export const createJournalEntry = entryData => {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ journal_entry: entryData.journalEntry })
  };

  const beachId = entryData.journalEntry.beach_id;

  return dispatch => {
    fetch(`${BASE_URL}/${beachId}/journal_entries`, configObj)
      .then(response => response.json())
      .then(journalJson => {
        console.log("Journal Entry saved! Here it is: ", journalJson);
      })
  }
};