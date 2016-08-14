var axios = require('axios');
var url = '/users';

var GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
var getUsersSuccess = function(data) {
  return {
    type: GET_USERS_SUCCESS,
    data: data
  }
};

var GET_USERS_ERRORS = "GET_USERS_ERRORS";
var getUsersErrors = function(data, error) {
  return {
    type: GET_USERS_ERRORS,
    data: data,
    error: error
  }
};

var SET_NAME = "SET_NAME";
var setName = function(name) {
  return {
    type: SET_NAME,
    name: name
  }
};

var getUsers = function(data) {
  return function(dispatch){
    return axios({
      method: 'GET',
      url: url,
      responseType: 'json',
    })
    .then(function(response){
      if (response.state < 200 || response.status >= 300){
        console.log(response, 'response');
        var error = new Error(response.statusText)
        error.response = response
        throw error;
      }
      return response;
    })
    .then(function(data){
      console.log(data, data.name, data.message);

      var results = data;
      return dispatch(getUsersSuccess(data));
    })
    .catch(function(error){
      console.log(error, data, 'from action error');
      return dispatch(getUsersErrors(data, error));
    });
  }
};

exports.GET_USERS_SUCCESS = GET_USERS_SUCCESS;
exports.getUsersSuccess = getUsersSuccess;
exports.GET_USERS_ERRORS = GET_USERS_ERRORS;
exports.getUsersErrors = getUsersErrors;
exports.SET_NAME = SET_NAME;
exports.setName = setName;

exports.getUsers = getUsers;
