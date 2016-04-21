var express = require('express');
var router = express.Router();

/* GET Login page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PIP 2.0' });
});

router.get('/student-myPIP', function(req, res) {
  res.render('student/my-pip', { title: 'My PIP', user: 0, pageNum: 1 });
});

router.get('/student-timetable', function(req, res) {

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

  res.render('student/timetable-manager', { title: 'My Timetable',
                                    semesterOne: { morning: semesterOneMorningModules,
                                                   afternoon: semesterOneAfternoonModules },
                                    semesterTwo: { morning: semesterTwoMorningModules,
                                                   afternoon: semesterTwoAfternoonModules },
                                            pageNum: 2, user: 0
                                          });
});

router.get('/student-modules', function(req, res) {
  res.render('student/module-manager', { title: 'My Modules', pageNum: 3, user: 0});
});

router.get('/student-settings', function(req, res) {
  res.render('student/settings-manager', { title: 'My Settings', pageNum: 4, user: 0});
});

module.exports = router;
