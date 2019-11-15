var authService = require('../services/authService');

function redirectToLogin(res) {
  res.locals.loggedUser = null;
  res.redirect('/auth/login');
}

var verifyAuth = function(req, res, next) {
  var loginToken = req.cookies['loginToken'];

  if(loginToken) {
    if(req.session.authenticatedUsers) {
      var user = req.session.authenticatedUsers.find(u => u.loginToken === loginToken);

      if (user) {
        res.locals.loggedUser = authService.getUserByEmail(user.email);
        next();
      }else{
        redirectToLogin(res);
      }
    }else{
      redirectToLogin(res);
    }
  }else{
    redirectToLogin(res);
  }
}

module.exports = verifyAuth;