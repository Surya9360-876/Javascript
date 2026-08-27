// 1. What is a variable in JavaScript?
// variable is a container used to store data or values.


// 2. What are the three keywords used to create variables?
//  var, let, and const.


// 3. Syntax to create a variable using var
// var variableName = value;

//var name = "Deva";


// 4. Syntax to create a variable using let
// let variableName = value;

// let age = 27;


// 5. Syntax to create a variable using const
// const variableName = value;

// const pi = 3.14;


// 6. What is declaration?
// creating a variable without assigning a value.

//let marks;


// 7. What is initialization?
// assigning a value to a variable for the first time.

// let score = 90;


// 8. What is reassignment?
//changing the existing value of a variable.

// let number = 10;
// number = 20;


// 9. What is redeclaration?
// declaring the same variable again
// in the same scope.

// var city = "Chennai";
// var city = "Madurai";


// 10. Which keyword allows redeclaration?
// The 'var' keyword allows redeclaration.
// 'let' and 'const' do not allow redeclaration
// in the same scope.


// 11. Which keyword allows reassignment?
// var and let allow reassignment.
// const does not allow reassignment.


// 12. Which keyword requires initialization when declared?
// const requires initialization when declared.

// const age = 25;


// 13. Identify the declaration and initialization:
// let age = 25;

// Declaration → let age
// Initialization → age = 25


// 14. What is the value of a?
// Answer → 100

// var a = 100;
// console.log(a);


// 15. Change the value of this variable to 200:
// let number1 = 100;

// Reassignment:
// let number1 = 200;



// 16. What will be the output?
// Output → 10

// var a = 10;
// console.log(a);


// 17. What will be the output?
// Output → 20

// var a = 10;
// a = 20;
// console.log(a);


// 18. What will be the output?
// Output → 30

// var a = 10;
// var a = 30;
// console.log(a);


// 19. Write a var variable named name with the value "John".

// var name = "John";


// 20. Create a var variable named price with the value 500.

// var price = 500;

// 19. Reassign price from 500 to 1000.

// var price = 500;
// price = 1000;


// 20. What will be the output?

// var x = 50;
// x = 100;
// console.log(x);

// Output → 100


// 23. Can a var variable be reassigned?
// Yes


// 24. Can a var variable be redeclared?
// Yes


// 25. Write an example of var redeclaration.

// var name = "John";
// var name = "David";



// 26. Create a let variable named age with the value 25.

// let age1 = 25;


// 27. What will be the output?

// let age2 = 20;
// age2 = 30;
// console.log(age2);

// Output → 30


// 28. Can a let variable be reassigned?
// Yes


// 29. Can a let variable be redeclared?
// No



// 30. Find the error:

// let name = "John";
// let name = "David";

// Error → Identifier 'name' has already been declared.
// Because let does not allow redeclaration
// in the same scope.
 
// 31. Create a let variable called city and assign "Chennai".

// let city = "Chennai";


// 32. Change the value of city to "Salem".

// city = "Salem";


// 33. What will be the output?

// let x = 10;
// x = 50;
// console.log(x);

// Output → 50


// 34. Write a let variable called salary with the value 25000.

// let salary = 25000;


// 35. Reassign salary to 30000.

// salary = 30000;


// const

// 36. Create a const variable called pi with the value 3.14.

// const pi = 3.14;


// 37. Can a const variable be reassigned?
// No


// 38. Can a const variable be redeclared?
// No



// 39. What is wrong with this code?

// const age;
// Error → Missing initializer in const declaration.

// const must be initialized when it is declared.
// Correct:
// const age = 25;


// 40. What happens here?

// const price = 500;
// price = 1000;

// Error → Assignment to constant variable.

// A const variable cannot be reassigned.

// 41. Create a const variable called country with the value "India".

// const country = "India";


// 42. What will be the output?

// const x = 100;
// console.log(x);

// Output → 100


// 43. Which keyword should you use if the value should not be reassigned?
// Use the 'const' keyword.
// const does not allow reassignment.


// 44. What is the difference between let and const?
// let → The value can be reassigned.
// const → The value cannot be reassigned.

// Example:
// let age3 = 20;
// age3 = 25; // Allowed

// const pi = 3.14;
// pi = 3.15; // Error

 
// 45. What is the difference between var and const?
// var → Can be reassigned and redeclared.
// const → Cannot be reassigned or redeclared.

// Example:
// var price = 500;
// price = 1000;  // Allowed
// var price = 1500;  // Allowed

// const salary1 = 25000;
// salary1 = 30000; // Error
// const salary1 = 35000; // Error

// 46. Write JavaScript code to print "Hello World" using console.log().

//console.log("Hello World");


// 47. Write JavaScript code to print the number 500 using console.log().

//console.log(500);


// 48. What is the purpose of console.warn()?
// console.warn() is used to display warning messages
// in the browser console.

//console.warn("This is a warning");


// 49. What is the purpose of console.error()?
// console.error() is used to display error messages
// in the browser console.

//console.error("This is an error");


// 50. What is the purpose of each?

// alert()
// Used to display a message in a popup box.

// Example:
//alert("Alert Message !!");


// prompt()
// Used to get input from the user through a popup box.

// Example:
//prompt("Enter your name");


// confirm()
// Used to ask the user for confirmation.
// It returns true if OK is clicked and false if Cancel is clicked.

// Example:
//confirm("Are you sure?");


// document.writeln()
// Used to write content directly into the HTML document.

// Example:
//document.writeln("hi brother");


// console.log()
// Used to print messages or values in the browser console.

// Example:
//console.log("I Love JavaScript");


// console.log("---------------------------------------------------------------------------------------------------");

// PRACTICAL QUESTIONS


// 1. Create a variable for student name, age, and mark
// and print all three.

let studentName = "Deva";
let studentAge = 27;
let studentMark = 85;

console.log(studentName);
console.log(studentAge);
console.log(studentMark);


// 2. Ask the user's name using prompt()
// and display it using alert().

let userName = prompt("Enter your name");
alert(userName);


// 3. Ask the user's age using prompt()
// and print it using console.log().

let userAge = prompt("Enter your age");
console.log(userAge);


// 4. Ask the user a question using confirm().

let answer = confirm("Are you ready to learn JavaScript?");
console.log(answer);


// 5. Ask the user's name and display it on the webpage
// using document.writeln().

let name = prompt("Enter your name");
document.writeln(name);