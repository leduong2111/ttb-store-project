const loginApi = require('express').Router();
const loginController = require('../controllers/login.controller');

// ! passportAuth middleware để config passport
const passportAuth = require('../middlewares/passport.middleware');
const passport = require('passport');

loginApi.all('*', function (req, res, next) {
  req.header('Access-Control-Allow-Origin', '*');
  req.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  req.header('Access-Control-Allow-Headers', 'Content-Type', 'User-Agent');
  next();
});

// api: login with local
loginApi.post('/', loginController.postLogin);

// api: login with gg
loginApi.post(
  '/gg',
  passport.authenticate('google-token', { session: false }),
  loginController.postLoginWithGoogle,
);

// api: authenticated with jwt
loginApi.get('/auth', passportAuth.jwtAuthentication, loginController.getAuth);

// api: refresh token
loginApi.post('/refresh_token', loginController.postRefreshToken);

// api: logout
loginApi.post('/logout', loginController.postLogout);

module.exports = loginApi;
