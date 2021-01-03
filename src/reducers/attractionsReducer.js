const attractionsReducer = (state = {}, action) => {
  switch(action.type) {
    case('LOAD_BEACH_DATA'):
      return action.beachData.attractions;

    case ('ADD_NEW_BEACH_DATA'):
      return {
        ...state,
        ...action.newBeachData.attractions
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