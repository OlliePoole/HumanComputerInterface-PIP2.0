var express = require('express');
var router = express.Router();

import timetable-manager;

/* GET My PIP page */
exports.myPIP = function(req, res) {
  res.render('my-pip', { title: 'My PIP', user: req.query.user, pageNum: 1 });
};

/* GET My Timetbale page */
exports.timetable = function(req, res){

  // Semester One
  var semesterOneMorningModules = [{name: "Machine Vision", time: "9AM", location: "T1.23"}, {}, {}, {},
                                   {name: "Human Computer Interface", time: "9AM", location: "H1.23"}];

  var semesterOneAfternoonModules = [{}, {},
                                     {name: "Web Technology", time: "1PM", location: "C1.13"},
                                     {}, {}];

  // Semester Two
  var semesterTwoMorningModules = [{}, {}, {},
                                   {name: "Graph Theory", time: "9AM", location: "EL.17"},
                                   {}];

  var semesterTwoAfternoonModules = [{},
                                     {name: "Advanced OOP", time: "1PM", location: "C2.12"},
                                     {name: "Data Structures", time: "1PM", location: "C1.13"},
                                     {}, {}];

  res.render('timetable-manager', { title: 'My Timetable',
                                    semesterOne: { morning: semesterOneMorningModules,
                                                   afternoon: semesterOneAfternoonModules },
                                    semesterTwo: { morning: semesterTwoMorningModules,
                                                   afternoon: semesterTwoAfternoonModules },
                                    pageNum: 2
                                    });
};

/* GET My Modules page */
exports.modules = function(req, res) {
  res.render('module-manager', { title: 'My Modules', pageNum: 3});
};

/* GET My Settings page */
exports.settings = function(req, res){
  res.render('settings-manager', { title: 'My Settings', pageNum: 4});
};
