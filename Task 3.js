// // // // Task 1

// var name = "Deva";
// var age = 27;
// let city = "Chennai";
// const college = "Harvard University";

// console.log("Name: " + name);
// console.log("Age: " + age);
// console.log("City: " + city);
// console.log("College: " + college);

// // Change the var value
// name = "Gowtham";
// console.log("Updated Name: " + name);

// // Change the let value
// city = "bangalore";
// console.log("Updated City: " + city);

// Change the const value
//  college = "Stanford University"; // This will cause type error because const variables cannot be reassigned
//  console.log("Updated College: " + college);

// Try redeclaring each variable and observe what happens.

// var name = "Alice";
// console.log("Redeclared Name: " + name);

// let city = "Miami";
// console.log("Redeclared City: " + city); // This will cause a SyntaxError.

// const college = "MIT";
// console.log("Redeclared College: " + college);// This will cause a TypeError.



// // // // Task 2

// // 1. console.log()
// console.log("Hello, JavaScript!");

// // 2. alert()
// alert("Welcome to my website!");

// // 3. confirm()
// confirm("Do you want to continue?");

// // 4. prompt()
// console.log(prompt("Enter your name:"));

// // 5. document.writeln()
// document.writeln("Hello! Welcome to JavaScript.");




// // // Task 3

// console.log(prompt("Enter your name:"));

// console.log(prompt("Enter your age:"));

// console.log(prompt("Enter your city:"));

// console.log(prompt("Enter your Qualification:"));



// // // Task 4

// let name = "JavaScript";
// let num1 = 100;
// let num2 = 99.5;
// let isAvailable = true;
// let isCompleted = false;
// let userName;
// let user = null;

// console.log(typeof name); // string
// console.log(typeof num1); // number
// console.log(typeof num2); // number
// console.log(typeof isAvailable); // boolean
// console.log(typeof isCompleted); // boolean
// console.log(typeof userName); // undefined
// console.log(typeof user); // object (null is considered an object in JavaScript)



// // // Task 5

// let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

// console.log("First Student: " + students[0]);
// console.log("Second Student: " + students[1]);
// console.log("Last Student: " + students[students.length - 1]);
// console.log("Total Students: " + students.length);



// // // Task 6

// let employee = {
//     name: "John Doe",
//     age: 30,
//     role: "Software Engineer",
//     skills: ["JavaScript", "React", "Node.js"],
//     isworking: true,
//     qualification: ["Bachelor's Degree", "Master's Degree"],
// };

// console.log("Employee Name: " + employee.name);
// console.log("Age: " + employee.age);
// console.log("Role: " + employee.role);
// console.log("First Skill: " + employee.skills[0]);
// console.log("Last Qualification: " + employee.qualification[employee.qualification.length - 1]);
// console.log("Working status: " + employee.isworking);



// // // Task 7

// let a = 20;
// let b = 5;

// // Addition
// let addition = a + b;
// console.log("Addition: " + addition);

// // Subtraction
// let subtraction = a - b;
// console.log("Subtraction: " + subtraction);

// // Multiplication
// let multiplication = a * b;
// console.log("Multiplication: " + multiplication);

// // Division
// let division = a / b;
// console.log("Division: " + division);

// // Modulus
// let modulus = a % b;
// console.log("Modulus: " + modulus);

// // Exponentiation
// let exponentiation = a ** b;
// console.log("Exponentiation: " + exponentiation);



// // // Task 8

// let shirt = 999;
// let pant = 1499;
// let shoes = 1999;
// let bag = 799;

// let totalprice = shirt + pant + shoes + bag;
// console.log("Total Price: " + totalprice);



// // // Task 9

// // A

// let a = 10;
// let b = a++;

// console.log(a); // 11
// console.log(b); // 10

// // B

// let c = 10;
// let d = ++c;

// console.log(c); // 11
// console.log(d); // 11

// // C

// let e = 10;
// let f = e--;

// console.log(e); // 9
// console.log(f); // 10

// // D

// let g = 10;
// let h = --g;

// console.log(g); // 9
// console.log(h); // 9




// // // // Task 10

// let num = 10;

// console.log(num += 5); // 15
// console.log(num -= 3); // 7
// console.log(num *= 2); // 20
// console.log(num /= 4); // 2.5
// console.log(num %= 3); // 1
// console.log(num **= 2); // 100




// // // Task 11

// console.log(10 > 5); // true
// console.log(10 < 5); // false
// console.log(10 >= 10); // true
// console.log(10 <= 9); // false

// console.log(5 == "5"); // true
// console.log(5 === "5"); // false

// console.log(10 != "10"); // false
// console.log(10 !== "10"); // true




// // // // Task 12

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false



// // // // Task 13

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// // // // Task 14

// console.log(!true); // false
// console.log(!false); // true
// console.log(!(5 > 10)); // true
// console.log(!(10 > 5)); // false




// // // // Task 15

// console.log(5 == "5" && !(5 === 5) || 6 > 7); // false
// console.log(10 > 5 && 8 < 12 || 4 === "4"); // true
// console.log(7 === 7 && 10 != "10" || 5 >= 5); // true
// console.log(15 < 10 || 20 > 15 && 5 == "5"); // true



// // // // Task 16

// let age = 20;

// let result = age >= 18 ? "Eligible to vote" : "Not eligible";

// console.log(result);




// // // // Task 17

// let password = true;

// let result1 = password ? "login successful" : "Wrong password";

// console.log(result1)




// // // // Task 18

// let name = "Naveen";
// let age = 25;
// let city = "Trichy";

// console.log("My name is " + name + "." + " I am " + age + " years old. " + "I live in " + city + ".")

// console.log(`My name is ${name}. I am ${age} years old. i live in ${city}.`);



// // // // Task 19

// let a = String(100);
// let b = String(true);
// let c = String(undefined);
// let d = String(null);
// let e = String([1, 2]);

// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c);
// console.log(d, typeof d);
// console.log(e, typeof e);




// // // // Task 20

// console.log(Number());
// console.log(Number(""));
// console.log(Number("123"));
// console.log(Number("a1"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(undefined));
// console.log(Number(null));



// // // // Task 21

// console.log(Boolean());
// console.log(Boolean(""));
// console.log(Boolean("hello"));
// console.log(Boolean(123));
// console.log(Boolean(true));
// console.log(Boolean(false));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean([]));
// console.log(Boolean({}));



// // // // Task 22

// let age = prompt("Enter your age:");

// age = Number(age);

// if (age >= 18) {
//     console.log("You can vote");
// } 
// else {
//     console.log("You can't vote");
// }




// // // // Task 23

// let number = prompt("Enter any number: ");

// number = Number(number);

// if (number > 0) {
//     console.log("Positive");
// } else if (number < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }




// // // // Task 24

// let marks = prompt("Enter your marks: ");

// marks = Number(marks);

// if (marks < 0 || marks > 100) {
//     console.log("Invalid Marks");
// }
// else if (marks >= 90) {
//     console.log("A Grade");
// } 
// else if (marks >= 80) {
//     console.log("B Grade");
// } 
// else if (marks >= 70) {
//     console.log("C Grade");
// } 
// else if (marks >= 60) {
//     console.log("D Grade");
// } 
// else {
//     console.log("Fail");
// }



// // // // Task 25

// let age = Number(prompt("Enter your age:"));
// let height = Number(prompt("Enter your height:"));
// let weight = Number(prompt("Enter your weight:"));

// if (age >= 18 && height >= 160 && weight >= 60){
//     console.log("Congratulation ! You are selected");
// }
// else if(age < 18 && height < 160 && weight < 60){
//     console.log("Sorry ! You are not selected");
// }




// // // // Task 26

// let color = prompt("Enter traffic light color:");

// switch (color) {
//     case "red":
//         console.log("Stop");

//     case "yellow":
//         console.log("Ready");

//     case "green":
//         console.log("Go");

//     default:
//         console.log("Invalid color");
// }




// // // // Task 27

// let day = Number(prompt("Enter number:"));

// switch (day) {
//     case 1 :
//         console.log("monday");
//         break;
    
//     case 2 :
//         console.log("Tuesday");
//         break;

//     case 3 :
//         console.log("Wednesday");
//         break;

//     case 4 :
//         console.log("Thursday");
//         break;

//     case 5 :
//         console.log("Friday");
//         break;

//     case 6 :
//         console.log("Saturday");
//         break;

//     case 7 :
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Invalid day")
// }




// // // // Task 28

// Step 1 - Get student details
let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
let city = prompt("Enter your city:");

// Step 2 - Get marks
let tamil = Number(prompt("Enter Tamil marks:"));
let english = Number(prompt("Enter English marks:"));
let maths = Number(prompt("Enter Maths marks:"));

// Step 3 - Calculate Total and Average
let total = tamil + english + maths;
let average = total / 3;

// Step 4 - Check Grade
let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}

// Step 5 - Check Voting Eligibility
let voting;

if (age >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}

// Step 6 - Display Result
console.log(`
Name: ${name}
Age: ${age}
City: ${city}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);