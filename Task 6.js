// // // Task 1 — Student Result Analyzer

// function studentResult(name, department, mark1, mark2, mark3, mark4, mark5) {

//     let total = mark1 + mark2 + mark3 + mark4 + mark5;

//     let average = total / 5;

//     let result;
//     if (average >= 50) {
//         result = "Pass";
//     } else {
//         result = "Fail";
//     }

//     let grade;

//     if (average >= 90) {
//         grade = "A";
//     } else if (average >= 75) {
//         grade = "B";
//     } else if (average >= 60) {
//         grade = "C";
//     } else if (average >= 50) {
//         grade = "D";
//     } else {
//         grade = "Fail";
//     }

//     console.log("Student Name: " + name);
//     console.log("Department: " + department);
//     console.log("Total Marks: " + total);
//     console.log("Average: " + average);
//     console.log("Result: " + result);
//     console.log("Grade: " + grade);
// }

// studentResult("Ajith kumar", "Computer Science", 85, 90, 78, 88, 92);





// // // Task 2 — Employee Salary Calculator

// let employee = {
//     name: "Arun",
//     role: "Developer",
//     salary: 45000,
//     experience: 2
// };

// function calculateSalary(employee) {

//     let basicSalary = employee.salary;
//     let bonus;

//     if (employee.experience >= 5) {
//         bonus = basicSalary * 15 / 100;
//     } else if (employee.experience >= 2) {
//         bonus = basicSalary * 10 / 100;
//     } else {
//         bonus = 0;
//     }

//     let finalSalary = basicSalary + bonus;

//     console.log("Employee Name: " + employee.name);
//     console.log("Role: " + employee.role);
//     console.log("Basic Salary: " + basicSalary);
//     console.log("Bonus: " + bonus);
//     console.log("Final Salary: " + finalSalary);
// }

// calculateSalary(employee);





// // // Task 3 — Product Filter System

// let products = [
//     { name: "Laptop", price: 55000, category: "electronics" },
//     { name: "Mouse", price: 800, category: "electronics" },
//     { name: "Shirt", price: 1200, category: "fashion" },
//     { name: "Shoes", price: 2500, category: "fashion" },
//     { name: "Phone", price: 30000, category: "electronics" }
// ];


// // 1. Products above ₹2,000
// let above2000 = products.filter(product => product.price > 2000);
// console.log("Products above ₹2,000:");
// console.log(above2000);


// // 2. Only electronics
// let electronics = products.filter(product => product.category === "electronics");
// console.log("Electronics:");
// console.log(electronics);


// // 3. First product below ₹1,000
// let below1000 = products.find(product => product.price < 1000);
// console.log("First product below ₹1,000:");
// console.log(below1000);


// // 4. Total price of all products
// let totalPrice = products.reduce((total, product) => total + product.price, 0);
// console.log("Total Price: ₹" + totalPrice);


// // 5. Any product costs more than ₹50,000
// let expensiveProduct = products.some(product => product.price > 50000);
// console.log("Any product above ₹50,000: " + expensiveProduct);


// // 6. Every product has a price above ₹500
// let allAbove500 = products.every(product => product.price > 500);
// console.log("Every product above ₹500: " + allAbove500)




// // // Task 4 — Employee Management

// let employees = [
//     {
//         id: 101,
//         name: "Kavin",
//         role: "Frontend Developer",
//         salary: 40000
//     },
//     {
//         id: 102,
//         name: "Arun",
//         role: "Backend Developer",
//         salary: 45000
//     },
//     {
//         id: 103,
//         name: "Priya",
//         role: "UI Designer",
//         salary: 38000
//     },
//     {
//         id: 104,
//         name: "Rahul",
//         role: "DevOps Engineer",
//         salary: 55000
//     },
//     {
//         id: 105,
//         name: "Divya",
//         role: "Tester",
//         salary: 42000
//     },
//     {
//         id: 106,
//         name: "Vijay",
//         role: "Full Stack Developer",
//         salary: 60000
//     }
// ];


// // 1. Display all employee names
// let names = employees.map(employee => employee.name);

// console.log("Employee Names:");
// console.log(names);


// // 2. Display employees earning above ₹40,000
// let above40000 = employees.filter(employee => employee.salary > 40000);

// console.log("Employees earning above ₹40,000:");
// console.log(above40000);


// // 3. Find employee with ID 103
// let employee103 = employees.find(employee => employee.id === 103);

// console.log("Employee with ID 103:");
// console.log(employee103);


// // 4. Calculate total salary
// let totalSalary = employees.reduce(
//     (total, employee) => total + employee.salary,
//     0
// );

// console.log("Total Salary: ₹" + totalSalary);


// // 5. Find highest-paid employee
// let highestPaid = employees.reduce((highest, employee) => {
//     return employee.salary > highest.salary ? employee : highest;
// });

// console.log("Highest Paid Employee:");
// console.log(highestPaid);


// // 6. Sort employees from highest salary to lowest
// let sortedEmployees = [...employees].sort(
//     (a, b) => b.salary - a.salary
// );

// console.log("Employees sorted by salary:");
// console.log(sortedEmployees);


// // 7. Create a new array containing only employee names
// let employeeNames = employees.map(employee => employee.name);

// console.log("Employee Names Array:");
// console.log(employeeNames);




// // // Task 5 — Shopping Cart

// let cart = [
//     { name: "Laptop", price: 50000, quantity: 1 },
//     { name: "Mouse", price: 1000, quantity: 2 },
//     { name: "Keyboard", price: 2000, quantity: 1 }
// ];

// function calculateCart(cart) {

//     // Calculate total cart value
//     let total = cart.reduce((sum, item) => {
//         return sum + (item.price * item.quantity);
//     }, 0);

//     // Calculate discount
//     let discount = 0;

//     if (total > 50000) {
//         discount = total * 10 / 100;
//     }

//     // Calculate final amount
//     let finalAmount = total - discount;

//     console.log("Total Cart Value: ₹" + total);
//     console.log("Discount: ₹" + discount);
//     console.log("Final Payable Amount: ₹" + finalAmount);
// }

// calculateCart(cart);





// // // Task 6 — Student Search System

// let students = [
//     { name: "Arun", age: 21, mark: 85 },
//     { name: "Priya", age: 22, mark: 92 },
//     { name: "Karthi", age: 20, mark: 67 },
//     { name: "Dinesh", age: 23, mark: 45 }
// ];


// // 1. Display all student names
// let names = students.map(student => student.name);

// console.log("Student Names:");
// console.log(names);


// // 2. Display students who scored above 80
// let above80 = students.filter(student => student.mark > 80);

// console.log("Students above 80:");
// console.log(above80);


// // 3. Find student named "Priya"
// let priya = students.find(student => student.name === "Priya");

// console.log("Student named Priya:");
// console.log(priya);


// // 4. Calculate average mark
// let totalMarks = students.reduce((total, student) => {
//     return total + student.mark;
// }, 0);

// let averageMark = totalMarks / students.length;

// console.log("Average Mark: " + averageMark);


// // 5. Check whether anyone failed
// let anyoneFailed = students.some(student => student.mark < 50);

// console.log("Anyone failed: " + anyoneFailed);


// // 6. Check whether everyone scored above 40
// let everyoneAbove40 = students.every(student => student.mark > 40);

// console.log("Everyone scored above 40: " + everyoneAbove40);


// // 7. Sort students by marks
// let sortedStudents = [...students].sort((a, b) => b.mark - a.mark);

// console.log("Students sorted by marks:");
// console.log(sortedStudents);




// // // Task 7 — Array Transformation Challenge

// let numbers = [12, 5, 8, 21, 44, 7, 30, 15];


// // 1. Numbers × 2
// let doubled = numbers.map(number => number * 2);

// console.log("Numbers × 2:");
// console.log(doubled);


// // 2. Even numbers
// let evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log("Even Numbers:");
// console.log(evenNumbers);


// // 3. Numbers greater than 15
// let greaterThan15 = numbers.filter(number => number > 15);

// console.log("Numbers greater than 15:");
// console.log(greaterThan15);


// // 4. First number greater than 20
// let firstGreater20 = numbers.find(number => number > 20);

// console.log("First number greater than 20:");
// console.log(firstGreater20);


// // 5. Total of all numbers
// let total = numbers.reduce((sum, number) => sum + number, 0);

// console.log("Total:");
// console.log(total);


// // 6. Check whether any number is greater than 40
// let anyGreater40 = numbers.some(number => number > 40);

// console.log("Any number greater than 40:");
// console.log(anyGreater40);


// // 7. Check whether every number is positive
// let allPositive = numbers.every(number => number > 0);

// console.log("Every number is positive:");
// console.log(allPositive);


// // 8. Sort from highest to lowest
// let sortedNumbers = [...numbers].sort((a, b) => b - a);

// console.log("Highest to Lowest:");
// console.log(sortedNumbers);





// // // Task 8 — String Analyzer

// let sentence = "JavaScript is very powerful";

// // 1. Total characters
// console.log("Total Characters:", sentence.length);

// // 2. Uppercase sentence
// console.log("Uppercase:", sentence.toUpperCase());

// // 3. Lowercase sentence
// console.log("Lowercase:", sentence.toLowerCase());

// // 4. Check whether it contains "JavaScript"
// console.log("Contains JavaScript:", sentence.includes("JavaScript"));

// // 5. First character
// console.log("First Character:", sentence.slice(0, 1));

// // 6. Last character
// console.log("Last Character:", sentence.slice(-1));

// // 7. Number of words
// let words = sentence.split(" ");
// console.log("Number of Words:", words.length);

// // 8. Replace JavaScript with Python
// console.log("Replaced Sentence:", sentence.replace("JavaScript", "Python"));

// // 9. Convert sentence into an array
// console.log("Sentence Array:", sentence.split(" "));





// // //  Final Mini Project — Employee Dashboard

let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// 1. Employee List
console.log("===== EMPLOYEE LIST =====");

employees.forEach(employee => {
    console.log(
        employee.id,
        employee.name,
        employee.department,
        employee.salary,
        employee.experience + " years"
    );
});


// 2. Search Employee by Name
function searchEmployee(name) {
    let result = employees.find(
        employee => employee.name.toLowerCase() === name.toLowerCase()
    );

    console.log("===== SEARCH RESULT =====");
    console.log(result);
}

searchEmployee("Priya");


// 3. Department Filter
function filterDepartment(department) {
    let result = employees.filter(
        employee => employee.department === department
    );

    console.log("===== DEPARTMENT FILTER =====");
    console.log(result);
}

filterDepartment("IT");


// 4. Salary Filter
let salaryFilter = employees.filter(
    employee => employee.salary > 50000
);

console.log("===== SALARY ABOVE ₹50,000 =====");
console.log(salaryFilter);


// 5. Total Company Salary
let totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("===== TOTAL COMPANY SALARY =====");
console.log("Total Salary: ₹" + totalSalary);


// 6. Highest Salary
let highestSalary = employees.reduce(
    (highest, employee) =>
        employee.salary > highest.salary ? employee : highest
);

console.log("===== HIGHEST SALARY =====");
console.log(highestSalary);


// 7. Employees with more than 3 years experience
let experiencedEmployees = employees.filter(
    employee => employee.experience > 3
);

console.log("===== EXPERIENCE ABOVE 3 YEARS =====");
console.log(experiencedEmployees);


// 8. Sort Salary Low → High
let lowToHigh = [...employees].sort(
    (a, b) => a.salary - b.salary
);

console.log("===== SALARY LOW → HIGH =====");
console.log(lowToHigh);


// Sort Salary High → Low
let highToLow = [...employees].sort(
    (a, b) => b.salary - a.salary
);

console.log("===== SALARY HIGH → LOW =====");
console.log(highToLow);


// 9. Statistics

let totalEmployees = employees.length;

let averageSalary = totalSalary / totalEmployees;

console.log("===== STATISTICS =====");
console.log("Total Employees: " + totalEmployees);
console.log("Total Salary: ₹" + totalSalary);
console.log("Highest Salary: ₹" + highestSalary.salary);
console.log("Average Salary: ₹" + Math.round(averageSalary));

