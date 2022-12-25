const orderApi = require('express').Router();
const orderController = require('../controllers/order.controller');

orderApi.all('*', function (req, res, next) {
    req.header('Access-Control-Allow-Origin', '*');
    req.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    req.header('Access-Control-Allow-Headers', 'Content-Type', 'User-Agent');
    next();
});

// api: lấy danh sách đơn hàng
orderApi.get('/list', orderController.getOrderList);

// api: lấy chi tiết 1 đơn hàng
orderApi.get('/', orderController.getOrderDetails);

// api: tạo 1 đơn hàng (tách nhiều sản phẩm ra mỗi sp 1 đơn)
orderApi.post('/', orderController.postCreateOrder);

module.exports = orderApi;
