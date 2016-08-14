var actions = require('../actions/userActions');

var initialState = { name:"", message: "", date: Date.now, userArray: [], current_name: "" };

// reducer takes 2 arguments, current state and an action
var userReducer = function(state, action) {
  // construct an object that contains new state and return it
  state = state || initialState;

  if (action.type === actions.GET_USERS_SUCCESS) {
    var name = action.data.name;
    var message = action.data.message;
    console.log(data);
    var getUserState = Object.assign({}, state, {name: name, message: message});
    console.log(data);
    return getUserState;
  } else if (action.type === actions.GET_USERS_ERRORS) {
    throw new error('something went wrong');
  } else if (action.type === actions.SET_NAME) {
    var current_name = action.name;
    var current_name_state = Object.assign({}, state, {current_name:
      current_name });
    return current_name_state;
  }
  // the returned value will replace the state of your application
  // everytime a new action is dispatched a new reducer will be run again. Updating
  // the state accordingly.
  return state;
};

exports.userReducer = userReducer;

