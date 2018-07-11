export default function load(id) {
  return (dispatch) => {
    dispatch({ type: 'PROJECT_LOADING', data });
    return fetch(`/projects/${id}`)
      .then(data => dispatch({ type: 'PROJECT_LOADED', data }))
      .catch(err => dispatch({ type: 'PROJECT_ERROR', err }));
  };
}
