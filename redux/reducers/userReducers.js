var actions = require('../userActions');

var initialState = [];

// reducer takes 2 arguments, current state and an action
var userReducer = function(state, action) {
  // construct an object that contains new state and return it
  state = state || initialState;

  if (action.type === actions.GET_USERS) {
    return state.concat({
      payload: 'Some New Payload!!!'
    })
  }
  // the returned value will replace the state of your application
  // everytime a new action is dispatched a new reducer will be run again. Updating
  // the state accordingly.
  return state;
};

exports.userReducer = userReducer;

