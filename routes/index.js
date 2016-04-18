var express = require('express');
var router = express.Router();

/* GET home page. */
exports.login = function(req, res){
  res.render('index', { title: 'PIP 2.0' });
};

exports.myPIP = function(req, res) {
  res.render('my-pip', { title: 'My PIP' });
};

exports.timetable = function(req, res){
  res.render('timetable-manager', { title: 'PIP 2.0 - Timetable' });
};
