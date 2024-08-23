class Male{
    protected age:number;
    private name:string;
    private nid:number;
    constructor(name:string,age:number,nid:number){
        this.name = name;
        this.age = age;
        this.nid = nid;
    }
    getVariable():string{
        return this.name;
    }
    setVariable(nid:number){
        this.nid = nid;
    }
    display(){
        console.log(`Name : ${this.name}, age : ${this.age}, nid : ${this.nid}`);
    }
}

let male1 = new Male('sojun',24,420);
console.log(male1.getVariable());
male1.setVariable(170);
male1.display();

class Man extends Male{
    age:number;
    change(age:number){
        this.age = age;
    }
    display(){
        console.log(`age : ${this.age}`);
    }
    constructor(name:string,age:number,nid:number){
        super(name,age,nid);
    }
}

let man1 = new Man('mogambel',22,220);
man1.change(15);
man1.display();