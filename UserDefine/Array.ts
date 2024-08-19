// we can declare array in both ways
let disciplines: Array<string>;
let codes: number[];

disciplines = ["cse","ece","bad"];
codes = [2,9,3];

for(let i=0;i<codes.length;i++){
    console.log(`Discipline : ${disciplines[i]}, code : ${codes[i]}`);
}

// let studentInfo: (string | number)[];
let studentInfo: Array<string | number>;

studentInfo = ['sojun',15,'sourov',17,'mogammel',31];

for(let index=0;index<studentInfo.length;index+=2){
    console.log(`Name : ${studentInfo[index]}, sid : ${studentInfo[index+1]}`)
}