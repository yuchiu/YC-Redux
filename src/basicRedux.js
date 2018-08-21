const isFunction = variable => {
  if (variable instanceof Function) {
    return true;
  }
  return false;
};

const createStore = reducer => {
  let currentState = {};
  const currentListeners = [];
  const getState = () => currentState;

  const subscribe = listener => {
    // check if var passed in is a valid function
    if (isFunction(listener)) currentListeners.push(listener);
    else console.log("error. only function should be passed into subscribe.");
  };

  const dispatch = action => {
    currentState = reducer(currentState, action);
    currentListeners.forEach(f => f());
    return action;
  };

  // using an unique type for initiallizing createStore's state with dispatch
  dispatch({ type: "@MINI-REDUX/GENISIS-DISPATCH" });
  return { getState, subscribe, dispatch };
};
export { createStore };
