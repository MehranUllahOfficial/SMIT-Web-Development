// addition function
function add(a, b) {
    let result = a + b;
    console.log(`${a} + ${b} = ${result}`);
}
add(12, 32)
add(1, 2);

function introduce(name, age, city) {
    console.log(`My name is ${name}`);
    console.log(`I am ${age} years old`);
    console.log(`I am from ${city}`);
}
introduce("Mehran", 20, "Peshawar");

// Default parameters
function greet(name = "Guest") {
    console.log("Hello " + name);
}
greet();

function login(email, password, role = "Buyer") {
    console.log("Email " + email);
    console.log("Password " + password);
    console.log("Role " + role);
}
login("test@gmail.com", "test123");

function addThreeNums(a, b, c) {
    let result = a + b + c;
    console.log(result);
    
    return result;
}

console.log(addThreeNums(2, 3, 5));

// Function with condition
function findResult(percent) {
    if(percent >= 50 && percent <= 100) {
        console.log("Pass");
    } else if(percent < 50 && percent > 0) {
        console.log("Fail");
    } else {
        console.log("Invslid input");
    }
}
let studentPercent = prompt("Enter you percentage");
findResult(studentPercent);

const userDetails = {
    email: "admin@gmail.com",
    password: "admin123",
    role: "admin"
}

function checkAdminRole(email, password, role) {
    if(email == userDetails && password == userDetails.password && role == userDetails.role) {
        console.log("You are an Admin");
    } else {
        console.log("You are not an Admin"); 
    }
}
let email = prompt("Enter email:")
let password = prompt("Enter Password")
let role = prompt("Enter role")

checkAdminRole(email, password, role);