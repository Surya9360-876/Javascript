// // ### Q1: What is the difference between var, let, and const?

// var

// var age = 20;
// age = 21;       // allowed

// var age = 22;   // also allowed

// Importantly, var is function-scoped, not block-scoped:


// let

// let is block-scoped and allows reassignment.

// let score = 10;
// score = 20; // allowed

// But you can't redeclare it in the same scope:

// let score = 10;
// let score = 20; // SyntaxError

// And it stays inside {} blocks:


// const

// const is also block-scoped, but it cannot be reassigned.

// const name = "Alex";

// name = "Sam"; //  TypeError

// It also must have a value when declared:

// const age; //  SyntaxError

// One important detail: with objects and arrays, const prevents reassignment of the variable, not modification of the object itself.

// const user = {
//     name: "Alex"
// };

// user.name = "Sam"; //  allowed

// user = {}; //  not allowed




// // ### Q2: Can you re-declare a variable with var? What about let and const?

// var = can re-declare
// let & const = cannot re-declare





// ### Q3: What is the output of this code?

// var x = 5;
// let y = 10;
// const z = 15;

// x = 20; // alloewd
// y = 25; // allowed
// z = 30; // not allowed or error

// console.log(x, y, z);

// So console.log(x, y, z) will not run.




// ### Q4: What is the difference between declaring and initializing a variable?
 
// Declaring = Creating a variable without giving it a value.
// Initializing = Giving a variable its first value.

// let x;      // Declaration
// x = 10;     // Initialization
// let y = 20; // Declaration + Initialization




// ### Q5: What will be the output?

// let a;
// console.log(a); // undefined




// ### Q6: What is hoisting? Give an example.

// var x;
// console.log(x); // undefined
// x = 10;

// Hoisting = declaration is available before the line where it appears.




// ### Q7: What is the difference between null and undefined?

// undefined → A variable is declared but no value is assigned.
// null → We intentionally assign an empty value.

// let a;
// console.log(a); // undefined

// let b = null;
// console.log(b); // null




//  ### Q8: What will be the output?

// console.log(typeof null); // object
// console.log(typeof undefined); // undefined
// console.log(typeof []); // object
// console.log(typeof {}); // object





// ### Q9: What is the difference between == and ===?

// == (Loose Equality) → Compares only the value and can convert the data type.
// === (Strict Equality) → Compares both value and data type. No type conversion.

// console.log(5 == "5");   // true
// console.log(5 === "5");  // false





// ### Q10: What is the difference between ++i and i++?

// ++i → Pre-increment: increases first, then uses the value.
// i++ → Post-increment: uses the value first, then increases it.

// let i = 5;
// console.log(++i); // 6

// let a = 5;
// console.log(a++); // 5
// console.log(a);   // 6




// ### Q11: What will be the output?

// let x = 10; // number
// let y = "5"; // string
// console.log(x + y);  // 105  // String concatenation
// console.log(x - y);  // 5
// console.log(x * y);  // 50
// console.log(x / y); // 2




// ### Q12: What are logical operators? Explain with examples.

// Logical operators are used to combine or check multiple conditions.

// There are 3 main logical operators:

// 1. && — AND

// Returns true only when both conditions are true.

// let age = 25;

// console.log(age >= 18 && age <= 60); // true

// Both conditions are true, so the result is true.

// 2. || — OR

// Returns true when at least one condition is true.

// let age = 16;

// console.log(age >= 18 || age == 16); // true

// The second condition is true, so the result is true.

// 3. ! — NOT

// Reverses the result: true becomes false, and false becomes true.

// let isStudent = true;

// console.log(!isStudent); // false





// ### Q13: What will be the output?

// console.log(5 > 3 && 10 > 5); // True
// console.log(5 > 10 || 10 > 5); // True
// console.log(!(5 > 3));  // False





// ### Q14: What is the ternary operator? Give an example.

// The ternary operator is a short way to write an if...else condition.

// let age = 20;

// let result = age >= 18 ? "Eligible to vote" : "Not eligible to vote";

// console.log(result);





// ### Q15: What is the difference between implicit and explicit type casting?

// Implicit Type Casting:

// let x = "10";
// let y = 5;

// console.log(x - y); // 5

// Here, JavaScript automatically converts "10" from a string to number.


// Explicit Type Casting:

// let x = "10";

// let y = Number(x);

// console.log(y); // 10

// Here, we manually convert "10" from string to number using Number().





// ### Q16: What will be the output?

// console.log(Number("123")); // 123
// console.log(Number("hello")); // NaN
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Boolean(0)); // False
// console.log(Boolean("hello")); // True





// ### Q17: What is NaN? Give an example.

// NaN stands for Not a Number.
// It is a special value in JavaScript that means the result of an operation is not a valid number.

// let x = "hello";
// let y = Number(x);

// console.log(y);

// Output:

// NaN

// Because "hello" cannot be converted into a valid number.





// ### Q18: What is the difference between if-else and switch?

// if-else

    // Used for conditions and comparisons.
    // Can use >, <, >=, <=, &&, `	
    // Good for complex conditions.

// let age = 20;

// if (age >= 18) {
//     console.log("Eligible to vote");
// } else {
//     console.log("Not eligible to vote");
// }


// switch
    
    //  Used to check one value against multiple fixed cases.
    // Good for multiple exact choices.

// let day = 2;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     default:
//         console.log("Invalid day");
// }






// ### Q19: What will be the output?

// let age = 20;
// if(age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

// output    // Adult





// ### Q20: What is nested if? Give an example.

// A nested if means having an if statement inside another if statement.

// It is used when we need to check one condition after another.

// let age = 20;
// let hasID = true;

// if (age >= 18) {
//     if (hasID) {
//         console.log("You can enter");
//     }
// }

// Output:

// You can enter






// ### Q21: Write a program to check if a number is even or odd using ternary operator.

// let num = 10;

// let result = (num % 2 === 0) ? "Even" : "Odd";

// console.log(result);





// ### Q22: What is the difference between while and do-while?

// while

// Checks the condition before executing the loop.
// May execute zero times.
// Syntax starts with while.

// let i = 5;

// while (i < 5) {
//     console.log(i);
//     i++;
// }

// Output: Nothing, because the condition is false initially.

// do-while

// Executes the code first, then checks the condition.
// Executes at least once.
// Syntax starts with do.

// let i = 5;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);

// Output: 5




// ### Q23: What will be the output?

// for(let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// output: 
// 1 
// 2 
// 3 
// 4 
// 5 




// ### Q24: What is the difference between for-of and for-in?

// for...of

// Used to get values.
// Commonly used with arrays and strings.
// Example: apple, banana

// let fruits = ["apple", "banana", "mango"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// Output:
// apple
// banana
// mango


// for...in

// Used to get keys/indexes.
// Commonly used with objects.
// Example: name, age

// let student = {
//     name: "Arun",
//     age: 25
// };

// for (let key in student) {
//     console.log(key);
// }

// Output:
// name
// age





// ### Q25: Write a program to find sum of numbers from 1 to 100.

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum = sum + i;
// }

// console.log(sum);

// Output:
// 5050






// ### Q26: What is the difference between slice and splice?

// slice()

// Used to extract elements from an array.
// Does not change the original array.
// Returns a new array.

// let fruits = ["apple", "banana", "mango", "orange"];

// let result = fruits.slice(1,3);

// console.log(result);
// console.log(fruits);

// Output:

// ["banana", "mango"]
// ["apple", "banana", "mango", "orange"]

// splice()

// Used to add, remove, or replace elements.
// Changes the original array.
// Returns the removed elements.

// let fruits = ["apple", "banana", "mango", "orange"];

// fruits.splice(1, 2);

// console.log(fruits);

// Output:
// ["apple", "orange"]

// 1 = start from index 1
// 2 = remove 2 elements





// ### Q27: What will be the output?

// let arr = [1, 2, 3];
// arr.push(4);      // [1, 2, 3, 4]
// arr.pop();        // [1, 2, 3]
// arr.unshift(0);   // [0, 1, 2, 3]
// arr.shift();      // [1, 2, 3]
// console.log(arr); // (3) [1, 2, 3]






// ### Q28: What is the difference between function declaration and function expression?

// Function Declaration

// A function is declared using the function keyword.
// Can be called before it is defined.
// It is hoisted.

// function greet() {
//     console.log("Hello");
// }

// greet();

// You can also call it before the declaration:

// greet();

// function greet() {
//     console.log("Hello");
// }


// Function Expression

// A function is stored inside a variable.
// Usually must be defined before it is called.
// The variable is hoisted, but the function assignment is not available before initialization.

// let greet = function() {
//     console.log("Hello");
// };

// greet();

// Here, the function is assigned to the variable greet.





// ### Q29: What is an arrow function? Give an example.

// An arrow function is a shorter way to write a function in JavaScript. It uses the => (arrow) symbol.

// let greet = () => {
//     console.log("Hello");
// };

// greet();

// Output:

// Hello





// ### Q30: What will be the output?

// function greet() {
//     return "Hello";
// }
// let message = greet();
// console.log(message);

// output:
// Hello

