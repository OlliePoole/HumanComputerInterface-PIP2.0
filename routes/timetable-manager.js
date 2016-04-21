
function student_timetable() {

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

  // Exams
  var exams = [{name: "Advanced OOP", date: "May 9th", time: "1PM", location: "Wheatley Campus"},
                {name: "Data Structures", date: "May 15th", time: "9AM", location: "JHB - Sports Hall"}];

  return { semesterOne: { morning: semesterOneMorningModules, afternoon: semesterOneAfternoonModules },
           semesterTwo: { morning: semesterTwoMorningModules, afternoon: semesterTwoAfternoonModules },
           exams      : exams
         };

}

function lecturer_timetable() {

  // Semester One
  var semesterOneMorningModules = [{name: "Advanced Algorithms", time: "9AM", location: "C1.01"}, {}, {}, {}, {}];
  var semesterOneAfternoonModules = [{}, {}, {name: "Human Computer Interface", time: "1PM", location: "C1.13"}, {}, {}];

  // Semester Two
  var semesterTwoMorningModules = [{}, {name: "Mathematics", time: "9AM", location: "EL.17"}, {}, {}, {}];
  var semesterTwoAfternoonModules = [{}, {name: "Modern Computing", time: "1PM", location: "C2.12"}, {}, {}, {}];

  return { semesterOne: { morning: semesterOneMorningModules, afternoon: semesterOneAfternoonModules },
           semesterTwo: { morning: semesterTwoMorningModules, afternoon: semesterTwoAfternoonModules }};

}

exports.student_timetable = student_timetable
exports.lecturer_timetable = lecturer_timetable
