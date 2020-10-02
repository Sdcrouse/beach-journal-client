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
        const entry = normalizeJournalEntry(journalJson.data);

        dispatch({ type: 'ADD_ENTRY', entry });
      })
  }
};

export const deleteJournalEntry = (id, beachId) => {
  console.log(`Journal Entry #${id} deleted!`);

  const configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ id })
  };

  return dispatch => {
    fetch(`${BASE_URL}/${beachId}/journal_entries/${id}`, configObj)
      .then(response => response.json())
      .then(journalJson => {
        console.log("Deleted Journal Entry: ", journalJson);
      })
  };
}

const normalizeJournalEntry = entryData => {
  const id = parseInt(entryData.id);

  return {
    [id]: {
      ...entryData.attributes,
      id
    }
  };
};