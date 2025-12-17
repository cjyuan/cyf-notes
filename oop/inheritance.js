// Superclass (Parent class)
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }

    info() {
        console.log(`${this.name} is a ${this.species}.`);
    }
}

// Subclass (Child class) inheriting from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog"); // Call the superclass constructor
        this.breed = breed;
    }

    // Overriding the makeSound method
    makeSound() {
        console.log(`${this.name} barks!`);
    }

    dogInfo() {
        console.log(`${this.name} is a ${this.breed} breed.`);
    }
}

// Another Subclass
class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} meows!`);
    }
}

// Using the classes
const animal = new Animal("Generic Animal", "Unknown");
animal.info();
animal.makeSound();

const dog = new Dog("Buddy", "Golden Retriever");
dog.info();          // Inherited method
dog.makeSound();     // Overridden method
dog.dogInfo();       // Subclass-specific method

const cat = new Cat("Whiskers", "Cat");
cat.info();
cat.makeSound();
