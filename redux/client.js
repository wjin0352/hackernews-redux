var createStore = require('redux');
var combineReducers = require('redux');

var userReducer = function(state, action) {
  var newState = {};
  switch(action.type) {
    state.name = action.payload;
    break;
  }
  return state;
}

var store = createStore(reducer, {name: 'will', message: 'message here'});

store.subscribe(function() {
  console.log('store changed', store.getState())
})

store.dispatch({type: GET_USERS, payload: {}})
