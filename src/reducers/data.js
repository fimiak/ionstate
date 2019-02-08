function data(state = [], action) {
  switch (action.type) {
    case 'ADD_LIKE':
      const i = action.index;
      console.log(i);
      /* return [...state.slice(0, i), { ...state[i], likes: state[i].likes + 1 }, ...state.slice(i + 1)]; */
      return [{ ...state, likes: i + 1 }, ...state];
    default:
      return state;
  }
}

export default data;
