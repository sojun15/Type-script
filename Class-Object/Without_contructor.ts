class Person {
    Name;
    Id;
    district;

    getInput(Name, Id, district):void{
        this.Name = Name;
        this.Id = Id;
        this.district = district;
    }

    display():void{
        console.log(`Name : ${this.Name}, Id : ${this.Id}, District : ${this.district}`);
    }
}

let person = new Person();
person.getInput('sojun', 15, 'brahmanbaria');
person.display();