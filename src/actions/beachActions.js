export const fetchBeaches = () => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/beaches")
      .then(resp => resp.json())
      .then(
        beachJson => dispatch({ type: 'LOAD_BEACHES', beaches: beachJson.data })
      )
  };
}