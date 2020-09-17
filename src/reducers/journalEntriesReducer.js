const journalEntriesReducer = (state = {}, action) => {
  switch(action.type) {
    case('LOAD_JOURNAL_ENTRIES'):
      return action.journalEntries;

    default:
      return state;
  }
};

export default journalEntriesReducer;