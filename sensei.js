// TODO create a class Sensei that inherits from the Ninja class
const {Ninja} = require('./ninja')

class Sensei extends Ninja{
    constructor(name) {
        super(name, 200, 10, 10);
    // TODO add an attribute: wisdom - default to 10
        this.wisdom = 10;
    }
    // TODO create a method: speakWisdom()
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months...")
    }
}

const sensi1 = new Sensei("John")

sensi1.speakWisdom()
sensi1.showStats()
