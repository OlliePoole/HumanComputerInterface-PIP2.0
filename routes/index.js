var express = require('express');
var router = express.Router();

var timetableManger = require('./timetable-manager');

/*******************************************************
                   Login page
 *******************************************************/

router.get('/', function(req, res) {
  res.render('index', { title: 'PIP 2.0' });
});





/*******************************************************
                   Student routes
 *******************************************************/


router.get('/student-myPIP', function(req, res) {
  res.render('student/my-pip', { title: 'My PIP', pageNum: 1, user: 0 });
});

router.get('/student-timetable', function(req, res) {
  res.render('my-timetable/timetable-manager', { title: 'My Timetable',
                                                 timetable: timetableManger.student_timetable(),
                                                 pageNum: 2, user: 0 });
});

router.get('/student-modules', function(req, res) {
  res.render('student/module-manager', { title: 'My Modules', pageNum: 3, user: 0});
});

router.get('/student-settings', function(req, res) {
  res.render('settings-manager', { title: 'My Settings', pageNum: 4, user: 0});
});








/*******************************************************
                   Lecturer routes
 *******************************************************/

router.get('/lecturer-myPIP', function(req, res) {
   res.render('lecturer/my-pip', { title: 'My PIP', pageNum: 1, user: 1 });
 });

router.get('/lecturer-timetable', function(req, res) {
  res.render('my-timetable/timetable-manager', { title: 'My Timetable',
                                                 timetable: timetableManger.lecturer_timetable(),
                                                 pageNum: 2, user: 1 });
});

router.get('/lecturer-settings', function(req, res) {
  res.render('settings-manager', { title: 'My Settings', pageNum: 4, user: 1});
});




/*******************************************************
                   Applicant routes
 *******************************************************/

 router.get('/applicant-myPIP', function(req, res) {
    res.render('applicant/my-pip', { title: 'My PIP', pageNum: 1,  user: 2 });
  });

 router.get('/applicant-enrollment', function(req, res) {
   res.render('applicant/enrollment', { title: 'My Enrollment', pageNum: 2, user: 2 });
 });

 router.get('/applicant-settings', function(req, res) {
   res.render('settings-manager', { title: 'My Settings', pageNum: 3, user: 2});
 });



module.exports = router;
