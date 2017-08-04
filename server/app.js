'use strict'
//All Dependencies
const express = require('express'),
      path = require('path'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      compression = require('compression'),
      mongoose = require('mongoose'),

      //All Route Files
      routes = require('./routes/index'),
      users = require('./routes/users'),

      //Express Instance
      app = express();

mongoose.Promise = global.Promise

app.use(compression({filter: shouldCompress}))

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    return false
  }
  return compression.filter(req, res)
}

require('dotenv').config()

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors())

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});

var DB_URL = `mongodb://fajarkarim:QvYVoASycYyDwFAp@cluster0-shard-00-00-soyt6.mongodb.net:27017,cluster0-shard-00-01-soyt6.mongodb.net:27017,cluster0-shard-00-02-soyt6.mongodb.net:27017/pos_fafega?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`
mongoose.connect(DB_URL, (err) => {
  err ? console.log(err) : console.log(`database connected`);
})

console.log(`run in port 3000`);


module.exports = app;
