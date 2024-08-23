abstract class Messanger{
    abstract message();
}

class Texts extends Messanger{
    message(){
        console.log(`Here we can send text message only`);
    }
}

class Media extends Messanger{
    message() {
        console.log("Here we can send vedio and image message only");
    }
}

let mes1 = new Texts();
let mes2 = new Media();
mes1.message();
mes2.message();