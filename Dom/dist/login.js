"use strict";
let signUp = document.querySelector('.login-form');
let studentId = document.querySelector('#StudentId');
let studentName = document.querySelector('#name');
let discipline = document.querySelector('#discipline');
signUp.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        studentId: studentId.value,
        studentName: studentName.value,
        discipline: discipline.value
    };
    alert(`studentId : ${data.studentId}, name : ${data.studentName}, discipline : ${data.discipline}`);
});
