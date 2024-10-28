//Array Destructuring
const arr = [1, 2, 3, 4];
const [a, b] = arr;  // a = 1, b = 2
const [x, , y] = arr;  // x = 1, y = 3 (skip 2)
const [m, n, ...rest] = arr;  // m = 1, n = 2, rest = [3, 4]
console.log(`a = ${a} , b = ${b} , x = ${x} , y = ${y} , m = ${m} , n = ${n} , rest = ${rest}`)

//Default Values
const [p = 10, q = 20] = [5];  // p = 5, q = 20
console.log(`p = ${p} , q = ${q}`)

//Object Destructuring
const obj = { name: 'Alice', age: 25 };
const { name, age } = obj;  // name = 'Alice', age = 25
const { name: userName, age: userAge } = obj;  // userName = 'Alice', userAge = 25
console.log(`name = ${name} , age = ${age} , userName = ${userName} , userAge = ${userAge}`)

//Nested Destructuring
const person = { name: 'Bob', address: { city: 'Mumbai', pin: 400001 } };
const { address: { city } } = person;  // city = 'Mumbai'
console.log(`city = ${city}`)

//Spread in Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const merged = [...arr1, ...arr2];  // [1, 2, 3, 4, 5]
console.log(`merged = ${merged}`)

//Spread in Objects
//Note: If properties overlap, the later one (b: 3 from obj2) overrides the previous.
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };  // { a: 1, b: 3, c: 4 }
console.log(`mergedObj = ${mergedObj}`)

//Spread in Function Arguments
const nums = [1, 2, 3];
console.log(Math.max(...nums));  // 3


//Rest in Arrays
const [first, ...others] = [1, 2, 3, 4];
console.log(first);  // 1
console.log(others);  // [2, 3, 4]

//Rest in Objects
const { a1, ...rest1 } = { a: 1, b: 2, c: 3 };
console.log(rest1);  // { b: 2, c: 3 }

//Rest in Function Parameters
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3));  // 6