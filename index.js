"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isFunction = function isFunction(variable) {
  if (variable instanceof Function) {
    return true;
  }
  return false;
};

var createStore = function createStore(reducer) {
  var currentState = {};
  var currentListeners = [];
  var getState = function getState() {
    return currentState;
  };

  var subscribe = function subscribe(listener) {
    // check if var passed in is a valid function
    if (isFunction(listener)) currentListeners.push(listener);else console.log("error. only function should be passed into subscribe.");
  };

  var dispatch = function dispatch(action) {
    currentState = reducer(currentState, action);
    currentListeners.forEach(function (f) {
      return f();
    });
    return action;
  };

  // using an unique type for initiallizing createStore's state with dispatch
  dispatch({ type: "@MINI-REDUX/GENISIS-DISPATCH" });
  return { getState: getState, subscribe: subscribe, dispatch: dispatch };
};
exports.createStore = createStore;
