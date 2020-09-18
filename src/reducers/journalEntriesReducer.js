const journalEntriesReducer = (state = {}, action) => {
  switch(action.type) {
    case('LOAD_JOURNAL_ENTRIES'):
      return action.journal_entries;

    default:
      return state;
  }
};

export default journalEntriesReducer;