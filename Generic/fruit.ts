// generic means we can send any types of values but it can catch its type 
let student = <a,b>(studentId: a,age: b) => {
    console.log(`studentId: ${studentId}, age: ${age}`);
}

student(15,24);
student('15',24);
student('15','24');