class Human {
    Name:string;
    Id: number;
    district: string;

    constructor(Name:string, Id:number, district:string){
        this.Name = Name;
        this.Id = Id;
        this.district = district;
    }

    display():void{
        console.log(`Name : ${this.Name}, Id : ${this.Id}, District : ${this.district}`);
    }
}

class Men extends Human{
    age: number;
    constructor(Name:string,Id,district,age){
        super(Name,Id,district);
        this.age = age;
    }
    
    display():void{
        console.log(`Name : ${this.Name}, Id : ${this.Id}, District : ${this.district}, Age : ${this.age}`);
    }
}

let human = new Human('sojun', 15, 'brahmanbaria');
human.display();

let men = new Men('sourov', 17, 'barisal',24);
men.display();
