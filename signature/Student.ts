let student1: ()=> void;
let student2: (name:string,id:number)=> void;
let student3: (name:string,id:number)=> string;

student1 = () => {
    console.log(`My name is sojun chandra, student id 210215`);
}

student2 = (name:string,id:number) => {
    console.log(`My name is ${name}, student id ${id}`);
}

student3 = (name:string,id:number) => {
    return `My name is ${name}, student id ${id}`;
}

student1();
student2('sourov shome',210217);
console.log(student3('mogambel hossen',210231));