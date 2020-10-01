const journalEntriesReducer = (state = {}, action) => {
  switch(action.type) {
    case('LOAD_JOURNAL_ENTRIES'):
      return action.journal_entries;

    case('ADD_ENTRY'):
      console.log("Journal Entry state: ", {...state, ...action.entry});
      return {
        ...state,
        ...action.entry
      }

    default:
      return state;
  }
};

export default journalEntriesReducer;