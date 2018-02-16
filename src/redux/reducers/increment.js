const defaultState = {
  count: 0,
};

const increment = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

export default increment;
