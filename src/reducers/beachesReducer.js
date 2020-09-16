const beachesReducer = (state = {}, action) => {
  switch(action.type) {
    case('LOAD_BEACHES'):
      return action.beaches;

    default:
      return state;
  }
};

export default beachesReducer;