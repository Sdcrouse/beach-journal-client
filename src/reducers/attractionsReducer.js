const attractionsReducer = (state = {}, action) => {
  switch(action.type) {
    case('LOAD_ATTRACTIONS'):
      return action.attractions;

    case ('ADD_ATTRACTIONS'):
      return {
        ...state,
        ...action.attractions
      };
    
    default:
      return state;
  }
};

export default attractionsReducer;