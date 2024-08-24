import { Developer } from "./Export";
class Full_stack extends Developer{
    constructor(Name:string,Id:number,work:string){
        super(Name,Id,work);
    }
    
    display():void{
        console.log(`Name : ${this.Name}, Developer Id : ${this.Dev_id}, Work : ${this.work}`);
    }
}

let fs = new Full_stack('sourov', 17, 'Full stack');
fs.display();