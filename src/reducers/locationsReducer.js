const locationsReducer = (state = {}, action) => {
  switch(action.type) {
    case('LOAD_LOCATIONS'):
      return action.locations;

    default:
      return state;
  }
};

export default locationsReducer;