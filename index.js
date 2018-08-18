// eslint-disable-next-line import/named
import { createStore } from "./mini-redux";

const counter = (state = 0, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return 10;
  }
};

const store = createStore(counter);

const init = store.getState();

console.log(`init with num:${init}.`);

const listener = () => {
  const current = store.getState();
  console.log(`current with num:${current}.`);
};
store.subscribe(listener);

store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "MINUS" });
store.dispatch({ type: "MINUS" });
