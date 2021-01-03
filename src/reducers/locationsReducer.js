const locationsReducer = (state = {}, action) => {
  switch(action.type) {
    case('LOAD_BEACH_DATA'):
      return action.beachData.locations;

    case('ADD_NEW_BEACH_DATA'):
      const { location } = action.newBeachData;

      if ( state[location.id] ) {
        return state;
      }

      return {
        ...state,
        [location.id]: location
      }

    default:
      return state;
  }
};

export default locationsReducer;