const defaultState = {
  count: 100,
};

const decrement = (state = defaultState, action) => {
  switch (action.type) {
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default decrement;
