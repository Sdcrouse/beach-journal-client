const journalEntriesReducer = (state = {}, action) => {
  switch(action.type) {
    case('LOAD_JOURNAL_ENTRIES'):
      return action.journal_entries;

    case('ADD_ENTRY'):
      return {
        ...state,
        ...action.entry
      }

    default:
      return state;
  }
};

export default journalEntriesReducer;