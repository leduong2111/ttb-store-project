const statisticApi = require('express').Router();
const statisticController = require('../controllers/statistic.controller');

statisticApi.all('*', function (req, res, next) {
    req.header('Access-Control-Allow-Origin', '*');
    req.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    req.header('Access-Control-Allow-Headers', 'Content-Type', 'User-Agent');
    next();
});

// api: thống kê doanh thu theo tháng
statisticApi.get('/monthly-revenue', statisticController.getStaMonthlyRevenue);

// api: thống kê doanh thu theo năm
statisticApi.get('/annual-revenue', statisticController.getStaAnnualRevenue);

// api: thống kê đơn hàng tỉnh nào nhiều nhất
statisticApi.get('/top-order', statisticController.getTopProvinceOrder);

module.exports = statisticApi;
