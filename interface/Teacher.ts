interface template {
    output : ()=> string; 
}
class Teacher implements template{
    constructor(private name:string, private degree:string){
    }

    output = () => {
        return `Name : ${this.name}, Degree : ${this.degree}`;
    }
}

class Employee implements template{
    constructor(private name:string, private position:string){}
    output = () => {
        return `Name : ${this.name}, Degree : ${this.position}`;
    }
}
let teacher1 = new Teacher('atanu','assistant professor');
console.log(teacher1.output());
let teacher2 = new Teacher('shamim','professor');
console.log(teacher2.output());
let teacher3 = new Teacher('anisul','professor');
console.log(teacher3.output());

let employee1 = new Employee('anoyar','office helper');
console.log(employee1.output());
