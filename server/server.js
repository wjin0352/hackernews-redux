var express = require('express');
var app = express();
var variables = require('./config/variables.express');


app.listen(variables.EXPRESS_PORT, function() {
  console.log('listening on port' + variables.EXPRESS_PORT);
});
