let signUp = document.querySelector('.login-form') as HTMLFormElement;

let studentId = document.querySelector('#StudentId') as HTMLInputElement;

let studentName = document.querySelector('#name') as HTMLInputElement;

let discipline = document.querySelector('#discipline') as HTMLInputElement;

signUp.addEventListener("submit",(event:Event)=>{
    event.preventDefault();
    const data = {
        studentId : studentId.value,
        studentName : studentName.value,
        discipline : discipline.value
    };
    alert(`studentId : ${data.studentId}, name : ${data.studentName}, discipline : ${data.discipline}`);
});