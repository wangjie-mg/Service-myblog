var createError = require('http-errors');
const express = require('express');

const signinupRouter = require('./routes/signinup');
const userRouter = require('./routes/user');
const tokenRouter = require('./routes/usertoken');
const writeRouter = require('./routes/write');
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Authorization");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use('/reglogin',signinupRouter);
app.use('/user',userRouter);
app.use('/token',tokenRouter);
app.use('/write',writeRouter);


app.listen(3001,()=>{
  console.log('app listening on port 3001');
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
