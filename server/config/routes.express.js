var userRouter = require('../api/user/routes.user');

module.exports = function(app) {
  app.use('/users', userRouter);
}
