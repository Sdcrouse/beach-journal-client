const beachesReducer = (state = { beaches: {}, retrievingData: false }, action) => {
  switch(action.type) {
    case ('RETRIEVING_SAVED_BEACHES'):
      return {
        ...state,
        beaches: state.beaches,
        retrievingData: true
      };

    case('LOAD_BEACH_DATA'):
      return {
        ...state,
        retrievingData: false,
        beaches: {...action.beachData.beaches}
      };

    case ('ADD_NEW_BEACH_DATA'):
      return {
        ...state,
        beaches: {
          ...state.beaches,
          ...action.newBeachData.beach
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