//CREATING CLASSES//

// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances

class Cat {
    constructor(nameParam, colorParam, breedParam, ageParam) {
        this.name = nameParam
        this.color = colorParam;
        this.breed = breedParam;
        this.age = ageParam;
    }
    greeting() {
        console.log(`Meowwwww... meowwwww.. Im a Cat`);
    }

    eat() {
        console.log("Nom nom nom... kitty full");
    }
    goForWalk() {
        console.log(`${this.name} is ready to go for a walk`);
    }
}

const siamese = new Cat("Smokey", "White and grey", "Siamese", "3 yrs old");

console.log(siamese)

siamese.greeting()
siamese.eat()
siamese.goForWalk()



const bombay = new Cat("Midnight", "All black", "Bombay", "7 yrs old")

console.log(bombay)

bombay.greeting()
bombay.eat()
bombay.goForWalk()


// // Constructors:
// // create 3 properties that are set by the constructor
// // create 3 methods
// // instantiate 2 arrays of 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// // loop over each array and print 3 properties of each pirate

class Pirate {
 constructor(nameParam, ageParam, locationParam) {
     this.name = nameParam,
     this.age = ageParam,
     this.location = locationParam
 }

pirateGreeting () {
     console.log(`Ahoy Matey! Me name is ${this.name}. I am searching for treasure!`)
 }

 setSail() {
    console.log('Full speed ahead!')
 }

 wearsEyePatch (wearsEyePatch = x) {}
     if(x = true) {
         console.log(`Argh! Mine eye!`)
     } else(x = false) {
         console.log(`${this.name} sees just fine.`)
     } 
 }


const bonnet = new Pirate ("Steade Bonnet: The Gentman Pirate", 28, "Treasure Island")

console.log(bonnet)
bonnet.pirateGreeting()
bonnet.setSail()
bonnet.wearsEyePatch(false)


const blackbeard = new Pirate("Edward Teach: Blackbeard", 36, "Atlantic, West Indies")

console.log(blackbeard)
blackbeard.pirateGreeting()
blackbeard.setSail()
blackbeard.wearsEyePatch(true)

const captainKidd = new Pirate("William Kidd:Captain Kidd", 40, "Indian ocean" )

console.log(captainKidd)
captainKidd.pirateGreeting()
captainKidd.setSail()
captainKidd.wearsEyePatch(false)

const jollyRoger = [bonnet, blackbeard, captainKidd]


const captainSparrow = new Pirate("Captiain Jack Sparrow", 32, "Carribean Sea")
console.log(captainSparrow)
const captainHook = new Pirate("Captain James Hook", 40, "Never, Never, Land")
console.log(captainHook)
const horatio = new Pirate("Horatio McCallister: Sea Captain", 63, "Springfield")
console.log(horatio)

const blackPearl = [captainSparrow, captainHook, horatio]


console.log(jollyRoger)
console.log(blackPearl)

