// // // // Task 1

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }



// // // // Task 2

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }



// // // // Task 3

// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }



// // // // Task 4

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }




// // // // Task 5

// let num = Number(prompt("Enter a number:"));

// for (let i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + (num * i));
// }




// // // // Task 6

// let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }




// // // // Task 7

// let i = 1;
// let sum = 0;

// while (i <= 10) {
//     sum = sum + i;
//     i++;
// }

// console.log(sum);




// // // // Task 8

// let i = 1;

// do {
//     console.log(i);
//     i++;
// } 
// while (i <= 5);



// // // // Task 9

// let a = 10;

// do {
//     console.log(a);  // Prints 10
//     a++;             // a becomes 11
// } while (a <= 5);    // 11 <= 5  = false




// // // // Task 10

// let name = "javascript";

// for (let char of name) {
//     console.log(char);
// }




// // // // Task 11

// let fruits = ["apple", "orange", "banana", "mango", "grapes"];

// for (let char of fruits) {
//     console.log(char)
// }



// // // // Task 12

// let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

// for (let student of students) {
//     console.log("Student: " + student);
// }



// // // // Task 13

// let employee = {
//     name: "Arun",
//     age: 25,
//     role: "Developer",
//     city: "Chennai"
// };

// for (let key in employee) {
//     console.log(key, employee[key]);
// }



// // // // Task 14

// let product = {
//     productName: "Laptop",
//     price: 50000,
//     brand: "Dell",
//     category: "Electronics",
//     stock: 10
// };

// for (let key in product) {
//     console.log(key + ": " + product[key]);
// }



// // // // Task 15

// function welcome() {
//     console.log("Welcome to JavaScript");
// }

// welcome();
// welcome();
// welcome();




// // // // Task 16

// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("Naveen");
// greet("Arun");
// greet("Priya");




// // // // Task 17

// function student(name, age, department) {
//     console.log("Name: " + name);
//     console.log("Age: " + age);
//     console.log("Department: " + department);
// }

// student("Naveen", 21, "Computer Science");
// student("Arun", 22, "Information Technology");
// student("Priya", 20, "Electronics");



// // // // Task 18

// function add(a, b) {
//     return a + b;
// }

// let result = add(10, 20);
// console.log(result);



// // // // Task 19

// function salary(amount) {
//     return amount;
// }

// let result = salary(25000);
// console.log(result);



// // // // Task 20

// function bonus(salary, bonusAmount) {
//     return salary + bonusAmount;
// }

// let total = bonus(50000, 5000);
// console.log(total);



// // // // Task 21

// function employee(name, role = "Developer") {
//     console.log("Name:", name);
//     console.log("Role:", role);
// }

// employee("Arun");
// employee("Priya", "Designer");




// // // // Task 22

// function square(number) {
//     console.log(number * number);
// }
// square(2);
// square(3);
// square(4);
// square(5);
// square(6);




// // // // Task 23

// let calculate = function(a, b) {
//      console.log(a + b);
// };
// calculate(2, 3);
// calculate(4, 3);
// calculate(6, 10);
// calculate(40, 20);
// calculate(78, 60);



// // // // Task 24

// let multiply = (a, b) => {
//     return a * b;
// };

// console.log(multiply(5, 10));




// // // // Task 25

// function test() {
//     if (true) {
//         var a = 10;
//         let b = 20;
//         const c = 30;

//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// test(); //Similarly, c also cannot be accessed outside the if block because it uses const.




// // // // Task 26

// console.log(a);

// var a = 10; // undefined



// // // // Task 27

// console.log(b);

// let b = 20; // ReferenceError




// // // // Task 28

// console.log(c);

// const c = 30; // ReferenceError

// let and const variables are hoisted, but they are not initialized before the declaration.

// var = undefined
// let = ReferenceError
// const = ReferenceError




// // // // Task 29

// (function () {
//     console.log("Welcome to JavaScript");
// })();

// (function (product, discount) {
//     console.log(product + " has a " + discount + "% discount");
// })("Laptop", 20);




// // // // Task 30

// function welcome() {
//     console.log("Welcome"); // Callback function
// }

// function execute(callback) {
//     callback();               
// }

// execute(welcome);    // Higher-Order Function




// // // // Task 31

// function* cashback() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }

// let result = cashback();

// for (let value of result) {
//     console.log(value);
// }



// // // // Task 32

let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Kumar",
        age: 28,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    }
];

// 2 for...of

console.log("----- Employee Details -----");

for (let employee of employees) {
    console.log(employee);
}

// 3 for...in

console.log("----- Keys and Values -----");

for (let employee of employees) {
    for (let key in employee) {
        console.log(key + ":", employee[key]);
    }
}

// 4 Function

function displayEmployee(name, age, department, role, salary) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
}

// 5. Function parameters

displayEmployee(
    employees[0].name,
    employees[0].age,
    employees[0].department,
    employees[0].role,
    employees[0].salary
);

// 6. Return - Function to return salary

function getSalary(employee) {
    return employee.salary;
}

let salary = getSalary(employees[0]);

console.log("Employee Salary:", salary);


// 7. Condition - Salary >= 40000

if (salary >= 40000) {
    console.log("Salary is 40000 or above");
} else {
    console.log("Salary is below 40000");
}


// 8. Arrow Function - Simple calculation

let annualSalary = (salary) => {
    return salary * 12;
};

console.log("Annual Salary:", annualSalary(salary));


// 9. Generator - Employee Benefits

function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let employeeBenefits = benefits();

console.log("----- Employee Benefits -----");

for (let benefit of employeeBenefits) {
    console.log(benefit);
}
