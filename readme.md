This is a react-redux capstone project

This app has a user experience using Hacker news api to pull in some data and display to my user.

This will use express, node, react, react-router, and redux.

This will have unit tests and strive for comprehensive test coverage.
  - components
  - routes
  - action creators
  - reducer functions

The application should be responsive design using CSS and media queries.


hackernews sdk, the methods are built into the sdk
> var hn = require('hackernews-api');
> hn.getItem(8863);

call hn.getItem(parameter) and you get the hash below

{
  by : "dhouston",
  descendants : 71,
  id : 8863,
  kids : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
  score : 111,
  time : 1175714200,
  title : "My YC app: Dropbox - Throw away your USB drive",
  type : "story",
  url : "http://www.getdropbox.com/u/2/screencast.html"
}
> hn.getUser('wcember');
{ about: 'programmer, actuary, consultant.<p>williamcember.com\ngithub.com&#x2F;
wcember\n@wcember',
  created: 1382846640,
  delay: 0,
  id: 'wcember',
  karma: 4,
  submitted: [ 9106838, 7979403, 6638253 ] }

