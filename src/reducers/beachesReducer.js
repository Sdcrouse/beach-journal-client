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

    case ('ADD_BEACH'):
      return {
        ...state,
        beaches: {
          ...state.beaches,
          ...action.beach
        }
      }

    case('DELETE_BEACH'):
      let updatedState = {
        ...state,
        beaches: {
          ...state.beaches
        }
      };

      delete updatedState.beaches[action.id];
      
      return updatedState;

    default:
      return state;
  }
};

export default beachesReducer;