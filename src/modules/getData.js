const getData = () => {
  return fetch(
    "https://test-cd1db-default-rtdb.firebaseio.com/goods.json"
  ).then((response) => {
    return response.json();
  });
};
export default getData;
