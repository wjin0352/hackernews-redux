var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var browerHistory = router.browerHistory;


var App = function() {
  return (
    <div className="app-container">
      <h3>Hacker News Feed</h3>
    </div>
  );
}

var router = (
  <Router history={browerHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
)
