let me = {
    firstName: 'Esteban',
    lastName: 'Peina',
    age: 25
}

let attribute = 'lastName'

me.lastName = 'Pecina'  // how to correct spelling in lastName

// console.log(me.firstName)
// console.log(me[attribute])

delete me.age /// deleting age from objects

let meal ={
    appetizer: 'chips and salsa',
    drink: 'sweet tea',
    entree: 'bacon ranch quesadillas'
}

// console.log(meal)

meal.desert = 'Molten lava cake'  // adding desert to objects

// console.log(meal)

let takehome = meal.entree   ///set a new variable 

// console.log(meal)
// console.log(takehome)


//For in loop

for(let key in me) {
    console.log(key,me[key])
}

// for(let "key stand-in" in "object to loop through") {
//     what you want it to do
// }


//Classes 
class Pet {
    constructor(name, color, age){
    this.name = name,
    this.color = color,
    this.age = age
}

howOld(){
    console.log(`${this.name} is ${this.age} years old.`)
 }
}

class Cat extends Pet{
    constructor(name,color,age, temperament){
    super(name,color,age) //
    this.breed = breed,
    this.temperament = temperament
    }
}

let object = new Pet('Gus Gus', 'Black and grey', 1)

// console.log(object)
// object.howOld()

class Dog extends Pet {
    constructor(name, color, age, breed) {
        super(name,color,age) //bringing 1st constructor to pet extends
        this.breed = breed,
        this.trainingLevel = 0
    }

    train() {
        this.trainingLevel += 1
        console.log(`${this.name}'s training level is now ${this.trainingLevel}`)
    }
}



let myPet = new Dog('Gus Gus','Black and grey', 1, 'Bernedoodle')

console.log(myPet)

myPet.train()