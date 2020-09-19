const beachesReducer = (state = { beaches: {}, retrievingData: false }, action) => {
  switch(action.type) {
    case ('RETRIEVING_SAVED_BEACHES'):
      return {
        ...state,
        beaches: state.beaches,
        retrievingData: true
      };

    case('LOAD_BEACHES'):
      return {
        ...state,
        retrievingData: false,
        beaches: {...action.beaches}
      };

    default:
      return state;
  }
};

export default beachesReducer;