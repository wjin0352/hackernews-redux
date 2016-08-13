var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var browerHistory = router.browerHistory;


var App = React.createClass({

  render: function() {
    return (
      <div className="app-container">
        <h3>Hacker News Feed</h3>
        <div>
          {props.children}
        </div>
      </div>
    );
  }
});

var UsersList = React.createClass({

  render: function() {
    return (
      <div className="users-list" >

      </div>
    )
  }
})

var FindUser = React.createClass({

  render: function() {
    return(
      <div className="find-user">

      </div>
    )
  }
})

var UserEdit = React.createClass({
  render: function() {
    return(
      <div className="edit-user">

      </div>
    )
  }
})

var UserDelete = React.createClass({
  render: function() {
    return(
      <div className="delete-user">

      </div>
    )
  }
})

var



var router = (
  <Router history={browerHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={UsersList} />
      <Route path="" component={} />
      <Route path="" component={} />
      <Route path="" component={} />
      <Route path="" component={} />
    </Route>
  </Router>
)
