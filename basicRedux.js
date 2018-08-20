export const createStore = reducer => {
  let currentState = {};
  const currentListeners = [];
  const getState = () => currentState;

  // should check if var passed in is a valid function
  const subscribe = listener => {
    currentListeners.push(listener);
  };
  const dispatch = action => {
    currentState = reducer(currentState, action);
    currentListeners.forEach(f => f());
    return action;
  };
  // init createStore state with dispatch
  dispatch({ type: "@MINI-REDUX/GENISIS-DISPATCH" });
  return { getState, subscribe, dispatch };
};
