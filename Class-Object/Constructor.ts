class Student {
    stdName;
    Id;
    district;

    constructor(stdName, Id, district){
        this.stdName = stdName;
        this.Id = Id;
        this.district = district;
    }

    display():void{
        console.log(`Name : ${this.stdName}, Id : ${this.Id}, District : ${this.district}`);
    }
}

let student = new Student('sourov', 15, 'barisal');
student.display();