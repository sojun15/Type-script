// single object array 
let studentInfo: object;
studentInfo = {stdName:'sojun', id:15};
console.log(studentInfo);

// multiple objects Array
let StudentInfo: object[];
StudentInfo = [];
let StudentInfo1,StudentInfo2 : {studentName:string, Id:number};
StudentInfo1 = {studentName:"sojun",Id:15};
StudentInfo.push(StudentInfo1);

StudentInfo2 = {studentName:"sourov",Id:17};
StudentInfo.push(StudentInfo2);
console.log(StudentInfo);