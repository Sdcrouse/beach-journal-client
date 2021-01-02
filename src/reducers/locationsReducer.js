const locationsReducer = (state = {}, action) => {
  switch(action.type) {
    case('LOAD_LOCATIONS'):
      return action.locations;

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