export const fetchBeaches = () => {
  return () => {
    fetch("http://localhost:3000/api/v1/beaches")
      .then(resp => resp.json())
      .then(beachJson => console.log(beachJson))
  };
}