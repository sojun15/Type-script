let id:number;
let fullName:string;
let firstName:string;
let lastName:string;
let isStudent:boolean;

id = 210215;
firstName = 'sojun';
lastName = ' chandra';
isStudent = true;

fullName = firstName.concat(lastName);

console.log(`Name : ${fullName}, Sid : ${id}, Student : ${isStudent}`);
console.log(fullName.split(" "));
