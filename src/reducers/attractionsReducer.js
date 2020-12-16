const attractionsReducer = (state = {}, action) => {
  switch(action.type) {
    case('LOAD_ATTRACTIONS'):
      return action.attractions;

    case ('ADD_ATTRACTIONS'):
      return {
        ...state,
        ...action.attractions
      };

    case('DELETE_ATTRACTIONS'):
      let updatedState = {...state};
      
      action.ids.forEach(id => delete updatedState[id]);

      return updatedState;
    
    default:
      return state;
  }
};

export default attractionsReducer;