var express = require('express');
var router = express.Router();

/* GET home page. */
exports.login = function(req, res){
  res.render('index', { title: 'PIP 2.0' });
};

/* GET My PIP page */
exports.myPIP = function(req, res) {
  res.render('my-pip', { title: 'My PIP' });
};

/* GET My Timetbale page */
exports.timetable = function(req, res){
  res.render('timetable-manager', { title: 'PIP 2.0 - Timetable' });
};

/* GET My Modules page */
exports.modules = function(req, res){
  res.render('module-manager', { title: 'PIP 2.0 - Modules' });
};

/* GET My Settings page */
exports.settings = function(req, res){
  res.render('settings-manager', { title: 'PIP 2.0 - Settings' });
};
