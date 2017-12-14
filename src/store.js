const createStore = reducer => {
  let state;
  const subscribers = [];
  const store = {
    dispatch: action => {
      state = reducer(state, action);
      subscribers.forEach(handler => handler());
    },
    getState: () => state,
    subscribe: handler => {
      subscribers.push(handler);
    },
    unsubscribe: handler => {
      const index = subscribers.indexOf(handler);
      if (index > 0) {
        subscribers.splice(index, 1);
      }
    },
  };
  return store;
};

export default createStore;
