// generic means we can send any types of values but it can catch its type 
var student = function (studentId, age) {
    console.log("studentId: ".concat(studentId, ", age: ").concat(age));
};
student(15, 24);
student('15', 24);
student('15', '24');
