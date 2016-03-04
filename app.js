var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var single = require('./routes/single');
var payment = require('./routes/pay');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.engine("html",require("ejs").__express); // or   app.engine("html",require("ejs").renderFile);
app.set('view engine', 'html');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*app.use('/', routes);
app.use('/users', users);*/
app.use('/', routes);  // 即为为路径 / 设置路由
app.use('/users', users); // 即为为路径 /users 设置路由
app.use('/single', single); // 设置单页面的路径
app.use('/pay', payment); // 设置单页面的路径

app.use('/register',routes); // 即为为路径 /register 设置路由
app.use('/home',routes); // 即为为路径 /home 设置路由
app.use("/logout",routes); // 即为为路径 /logout 设置路由
app.use("/index",routes); // 即为为路径 /logout 设置路由
app.use("/sort",routes); // 即为为路径 /logout 设置路由
app.use("/myCenter",routes); // 即为为路径 /logout 设置路由
app.use("/myCollection",routes); // 即为为路径 /logout 设置路由
app.use("/myAddress",routes); // 即为为路径 /logout 设置路由
app.use("/addAddress",routes); // 即为为路径 /logout 设置路由
app.use("/changeAddress",routes); // 即为为路径 /logout 设置路由
app.use("/uploadID",routes); // 即为为路径 /logout 设置路由
app.use("/myCoupons",routes); // 即为为路径 /logout 设置路由


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
