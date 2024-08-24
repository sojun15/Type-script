export class Developer {
    Name:string;
    Dev_id: number;
    work: string;

    constructor(Name:string, Dev_id:number, work:string){
        this.Name = Name;
        this.Dev_id = Dev_id;
        this.work = work;
    }

    display():void{
        console.log(`Name : ${this.Name}, Id : ${this.Dev_id}, District : ${this.work}`);
    }
}

