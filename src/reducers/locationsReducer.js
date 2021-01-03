const locationsReducer = (state = {}, action) => {
  switch(action.type) {
    case('LOAD_BEACH_DATA'):
      return action.beachData.locations;

    case('ADD_LOCATION'):
      if (state[action.location.id]) {
        return state;
      }

      return {
        ...state,
        [action.location.id]: action.location
      }

    default:
      return state;
  }
};

export default locationsReducer;