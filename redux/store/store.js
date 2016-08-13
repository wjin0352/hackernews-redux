var redux = require('redux');
var createStore = redux.createStore;

var reducers = require('./reducers/userReducers');

// created a store using createStore method, and told it to
// use userReducer to handle any actions that are dispatched
var store = createStore(reducers.userReducer);

store.dispatch({
  type: 'GET_USERS',
  payload: 'Which payload will get called?'
});

module.exports = store;

