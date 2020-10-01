export const createJournalEntry = entryData => {
  return dispatch => {
    console.log("Journal Entry saved! Here it is: ", entryData);
  }
};