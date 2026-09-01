// // Task-1

// var studentname = "Deva";
// studentname = "John";       

// let studentage = "27";
// studentage = "29";

// const collegename = "XYZ University";
// collegename = "ABC University";
// // Uncaught TypeError


// console.log(studentname);

// console.log(studentage);

// console.log(collegename);


// var studentname = "Arun";

// console.log(studentname);

// let studentage = "28";

// console.log(studentage);
// // Uncaught SyntaxError:



//Task-2

// let name = prompt("Enter your name: ");

// let age = prompt("Enter your age: ");

// const city = prompt("Enter your city: ");

// console.log("Name:", name);

// console.log("Age:", age);

// console.log("City:", city);



// // Task-3

// let name = prompt("Enter your name: ");

// alert("Welcome " + name + "!");


// // Task-4

// let birthYear = prompt("Enter your birth year: ");

// let currentyear = 2026;

// let age = currentyear - birthYear;

// console.log("Birth year: " + birthYear);

// console.log("Age: " + age);

// // Task-5

// var name ="John Doe";

// let marks = 100;

// let num = 25.5;

// let isStudent = true;

// let isGraduated = false;

// let country;

// let city = null;

// console.log(typeof(name));
// console.log(typeof(marks));
// console.log(typeof(num));
// console.log(typeof(isStudent));
// console.log(typeof(isGraduated));
// console.log(typeof(country));
// console.log(typeof(city));


// // Task-6

// let student = {
//     name: "Deva",
//     age: 27,
//     city: "Chennai",
//     qualification: "Bachelor's Degree",
//     isStudent:true,
// };

// console.log(student);
// console.log("Name:", student.name);
// console.log("Age:", student.age);
// console.log("Qualification:", student.qualification);
// console.log("Is Student:", student.isStudent);

// // Task-7

// let fruits = [
//     "Apple",
//     "Mango",
//     "Orange",
//     "Banana",
//     "Grapes",
//     "Papaya"
// ];

// console.log("First fruit:", fruits[0]);
// console.log("Second fruit:", fruits[1]);
// console.log("Last fruit:", fruits[fruits.length - 1]);
// console.log("Total number of fruits:", fruits.length);


// // Task-8

// let a = 20;
// let b = 5;

// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus:", a % b);
// console.log("Exponentiation:", a ** b);


// // Task-9

// let shirt = 999;
// let pant = 1499;
// let shoes = 1999;

// const totalAmount = shirt + pant + shoes;

// console.log("Total Amount:", totalAmount);


// // Task-10

// let tamil = 80;
// let english = 75;
// let maths = 90;

// const totalMarks = tamil + english + maths;
// const averageMarks = totalMarks / 3;

// console.log("Total Marks:", totalMarks);
// console.log("Average Marks:", averageMarks);


// // Task-11

// let a = 10;

// let b = a++;

// console.log(a); //output: 11
// console.log(b); //output: 10


// // Task-12

// let a = 10;

// let b = ++a;

// console.log(a); //output: 11
// console.log(b); //output: 11


// // Task-13

// let a = 20;

// let b = a--;

// console.log(a); //output: 19
// console.log(b); //output: 20


// // Task-14

// let a = 20;

// let b = --a;

// console.log(a); //output: 19
// console.log(b); //output: 19


// // Task-15

// let a = 5;

// let b = a++;

// let c = ++a;

// let d = b--;

// console.log(a); //output: 7
// console.log(b); //output: 4
// console.log(c); //output: 7
// console.log(d); //output: 5


// // Task-16

// let num = 10;

// num += 5;
// console.log(num); //output: 15

// num -= 5;
// console.log(num); //output: 10

// num *= 5;
// console.log(num); //output: 24

// num /= 5;
// console.log(num); //output: 6

// num %= 5;
// console.log(num); //output: 0

// num **= 5;
// console.log(num); //output: 0


// // Task-17

// let name = "Deva";
// let age = 27;
// let city = "Chennai";
// let college = "XYZ University";

// let subjects = [
//     "JavaScript",
//     "HTML",
//     "CSS",
//     "Python",
//     "SQL"
// ];

// let student = {
//     name: name,
//     age: age,
//     city: city,
//     subjects: subjects,
//     isStudent: true,
// };



// console.log("Student Name:", student.name);
// console.log("Student Age:", student.age);
// console.log("Student City:", student.city);
// console.log("First Subject:", student.subjects[0]);
// console.log("Last Subject:", student.subjects[student.subjects.length - 1]);
// console.log("Total Subjects:", student.subjects.length);
// console.log(student)


// Task-18

let num1 = Number(prompt("Enter the first number: "));

let num2 = Number(prompt("Enter the second number: "));

let addition = (num1+num2);
let subtraction = (num1-num2);
let multiplication = (num1*num2);
let division = (num1/num2);
let modulus = (num1%num2);
let power = (num1**num2);

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Power:", power);