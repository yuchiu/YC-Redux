"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createStore = exports.createStore = function createStore(reducer) {
  var currentState = {};
  var currentListeners = [];
  var getState = function getState() {
    return currentState;
  };

  // should check if var passed in is a valid function
  var subscribe = function subscribe(listener) {
    currentListeners.push(listener);
  };
  var dispatch = function dispatch(action) {
    currentState = reducer(currentState, action);
    currentListeners.forEach(function (f) {
      return f();
    });
    return action;
  };
  // init createStore state with dispatch
  dispatch({ type: "@MINI-REDUX/GENISIS-DISPATCH" });
  return { getState: getState, subscribe: subscribe, dispatch: dispatch };
};
