var GET_USERS = "GET_USERS";
var getUsers = function() {
  return {
    type: GET_USERS,
    payload: 'some data payload'
  }
};

exports.GET_USERS = GET_USERS;
exports.getUsers = getUsers;

