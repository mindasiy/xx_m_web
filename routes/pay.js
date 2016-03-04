/**
 * Created by mindasiy on 2016/3/3.
 *
 */
var express = require('express');
var router = express.Router();

/* GET payment */
router.get('/payment', function(req, res, next) {
    res.render('pay/payment', { title: '快捷支付' });
});
//get paymentrecord
router.get('/paymentrecord', function(req, res, next) {
    res.render('pay/paymentrecord', { title: '快捷支付记录' });
});

module.exports = router;
