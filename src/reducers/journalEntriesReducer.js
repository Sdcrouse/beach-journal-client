const journalEntriesReducer = (state = {}, action) => {
  switch(action.type) {
    case('LOAD_BEACH_DATA'):
      return action.beachData.journal_entries;

    case('ADD_ENTRY'):
      return {
        ...state,
        ...action.entry
      }

    case('DELETE_ENTRY'):
      let updatedState = {...state};

      delete updatedState[action.id];
      
      return updatedState;

    case('DELETE_ENTRIES'):
      let newState = {...state};
      
      action.ids.forEach(id => delete newState[id]);
      
      return newState;

    default:
      return state;
  }
};

export default journalEntriesReducer;