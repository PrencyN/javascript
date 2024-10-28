class Animal {
  makeSound() {
    console.log("Some generic animal sound.");
  }
}

class Cat extends Animal {
  // Override makeSound method
  makeSound() {
    console.log("Meow!");
  }
}

// Usage:
const genericAnimal = new Animal();
genericAnimal.makeSound(); // Output: Some generic animal sound.

const kitty = new Cat();
kitty.makeSound(); // Output: Meow!
