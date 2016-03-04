/**
 * Created by mindasiy on 2016/3/2.
 *
 */
var express = require('express');
var router = express.Router();

/* GET totaltariff */
router.get('/totaltariff', function(req, res, next) {
    res.render('single/totaltariff', { title: '合计预收关税' });
});
/* GET flreigh */
router.get('/flreigh', function(req, res, next) {
    res.render('single/flreigh', { title: '合计预收关税' });
});


module.exports = router;
