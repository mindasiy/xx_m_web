var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '霹雳爸爸' });
});

/* GET login page. *//*
router.route("login").get(function(req,res){    // 到达此路径则渲染login文件，并传出title值供 login.html使用
    res.render("login",{title:'User Login'});
}).post(function(req,res){                        // 从此路径检测到post方式则进行post数据的处理操作
});*/
/* GET register page. */
router.route("/register").get(function(req,res){    // 到达此路径则渲染register文件，并传出title值供 register.html使用
    res.render("register",{title:'User register'});
}).post(function(req,res){
    //这里的User就是从model中获取user对象，通过global.dbHandel全局方法（这个方法在app.js中已经实现)
});

router.route("/index").get(function(req,res){    
    res.render("index",{title:'User Login'});
}).post(function(req,res){                      
});

/* GET sort page. */
router.route("/sort").get(function(req,res){    
    res.render("sort",{title:'User Login'});
}).post(function(req,res){                      
});

router.route('/myCenter').get(function(req,res){   
    res.render('myCenter',{title:'User Login'});
}).post(function(req,res){                      
});

router.route("/myCollection").get(function(req,res){    
    res.render("myCollection",{title:'User Login'});
}).post(function(req,res){                      
});

router.route("/myAddress").get(function(req,res){    
    res.render("myAddress",{title:'User Login'});
}).post(function(req,res){                      
});

router.route("/addAddress").get(function(req,res){    
    res.render("addAddress",{title:'User Login'});
}).post(function(req,res){                      
});

router.route("/changeAddress").get(function(req,res){    
    res.render("changeAddress",{title:'User Login'});
}).post(function(req,res){                      
});

router.route("/uploadID").get(function(req,res){    
    res.render("uploadID",{title:'User Login'});
}).post(function(req,res){                      
});
router.route("/myCoupons").get(function(req,res){    
    res.render("myCoupons",{title:'User Login'});
}).post(function(req,res){                      
});


module.exports = router;
