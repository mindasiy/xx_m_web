var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
    res.render('user/login', { title: '用户登录' });
});

/*router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});*/

module.exports = router;
