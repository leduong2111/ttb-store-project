const accountApi = require('express').Router();
const accountController = require('../controllers/account.controller');

accountApi.all('*', function (req, res, next) {
    req.header('Access-Control-Allow-Origin', '*');
    req.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    req.header('Access-Control-Allow-Headers', 'Content-Type', 'User-Agent');
    next();
});

// Gửi mã xác nhận để đăng ký tài khoản
accountApi.post('/verify', accountController.postSendVerifyCode);

// Đăng ký tài khoản
accountApi.post('/signup', accountController.postSignUp);

// Gửi mã xác nhận để lấy lại mật khẩu
accountApi.post('/verify/forgot', accountController.postSendCodeForgotPW);

// reset password
accountApi.post('/reset-pw', accountController.postResetPassword);

module.exports = accountApi;
