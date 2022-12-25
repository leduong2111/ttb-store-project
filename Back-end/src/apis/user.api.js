const express = require('express');
const userApi = express.Router();
const userController = require('../controllers/user.controller');
const passportAuth = require('../middlewares/passport.middleware');

userApi.all('*', function (req, res, next) {
    req.header('Access-Control-Allow-Origin', '*');
    req.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    req.header('Access-Control-Allow-Headers', 'Content-Type', 'User-Agent');
    next();
});

// api: get  user
userApi.get('/', passportAuth.jwtAuthentication, userController.getUser);

// api: update user
userApi.put('/update', userController.putUpdateUser);

module.exports = userApi;
