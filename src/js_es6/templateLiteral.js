// 1. Basic usage of template literals
let name = "Alice";
console.log(`Hello, ${name}!`);  // Output: Hello, Alice!

// 2. Multi-line strings using template literals
let message = `This is a 
multi-line string
using template literals.`;
console.log(message); 

/* Output:
This is a 
multi-line string
using template literals.
*/

// 3. Expression interpolation within template literals
let a = 10, b = 20;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);  // Output: The sum of 10 and 20 is 30.

// 4. Calling functions inside template literals
function greet(user) {
  return `Hello, ${user}!`;
}
console.log(`${greet("Bob")}`);  // Output: Hello, Bob!

// 5. Embedding objects and arrays in template literals
let user = { name: "Charlie", age: 25 };
console.log(`User ${user.name} is ${user.age} years old.`);  // Output: User Charlie is 25 years old.

let fruits = ["Apple", "Banana", "Cherry"];
console.log(`I like ${fruits.join(", ")}.`);  // Output: I like Apple, Banana, Cherry.

// 6. Nested template literals
let nested = `Outer string with ${`inner string`} inside.`;
console.log(nested);  // Output: Outer string with inner string inside.

// 7. Tagged template literals (using functions to process templates)
function tag(strings, ...values) {
  console.log(strings);  // Array of literal parts
  console.log(values);   // Array of interpolated values
  return strings[0] + values.join(", ");
}

let result = tag`The values are ${a} and ${b}.`;  
// Output: The values are 10, 20.

console.log(result);  // Output: The values are 10, 20.
