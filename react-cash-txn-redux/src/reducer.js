let initialState = { count: 0 };

function reducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 10
    };
  }
  if (action.type === "DECREMENT" && state.count > 0) {
    return {
      count: state.count - 10
    };
  }

  return state;
}

export default reducer;
