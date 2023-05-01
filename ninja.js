// TODO Create a Ninja class
class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
    // TODO add an attribute: name
        this.name = name;
    // TODO add an attribute: health
        this.health = health;
    // TODO add a attribute: speed - give a default value of 3
        this.speed = speed;
    // TODO add a attribute: strength - give a default value of 3
        this.strength = strength;
    }
    // TODO add a method: sayName() - This should log that Ninja's name to the console
    sayName(){
        console.log(this.name)
    }

    // TODO add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
    showStats(){
        console.log(`
        name: ${this.name}
        strength: ${this.strength}
        speed: ${this.speed}
        health: ${this.health}
        `)
    }
    // TODO add a method: drinkSake() - This should add +10 Health to the Ninja
    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Bob")
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()


module.exports = {Ninja}




