// Arithmetic Operators
console.log('"Arithmetic Operators"');
let a = 10;
let b = 2;

console.log(`Addition: ${a} + ${b} = ${a + b}`);
console.log(`Subtraction: ${a} - ${b} = ${a - b}`);
console.log(`Multiplication: ${a} * ${b} = ${a * b}`);
console.log(`Division: ${a} / ${b} = ${a / b}`);
console.log(`Modulus: ${a} % ${b} = ${a % b}`);
console.log("\n");

// Assignment Operators
console.log('"Assignment Operators"');
let c = 4;
console.log("First value of c variable: " + c);


// c value inrement by 2
c += 2;
console.log("New Value of c variable after increment by 2: " + c);

// c value decrement by 1
c -= 1;
console.log("New Value of c variable after decrement by 1: " + c);

// c value after multiply with 3
c *= 5;
console.log("New Value of c variable after multiply with 5: " + c);

// c value after division by 5
c /= 5;
console.log("New Value of c variable after division by 5: " + c);
console.log("\n");
// Comparison Operators
console.log('"Comparison Operators"');

let d = 5;
let e = 8;

console.log(d == e); 
console.log(d === e);
console.log(d != e);
console.log(d > e);
console.log(d < e);
console.log(d >= e);
console.log(d <= e);
console.log("\n");

// Expressions
console.log('"Expressions"');

let sub_1_marks = 90;
let sub_2_marks = 94;
let sub_3_marks = 80;

console.log("Subject 1 marks:" + sub_1_marks);
console.log("Subject 2 marks:" + sub_2_marks);
console.log("Subject 3 marks:" + sub_3_marks);
console.log(`Total marks: ${sub_1_marks} + ${sub_2_marks} + ${sub_3_marks} = ${sub_1_marks +sub_2_marks + sub_3_marks}`);
console.log("\n");

console.log('"Task"');
let z = 4;
let v = "4";

console.log(z == v); // result will be true because == operator only check value

console.log(z === v); // resu;t will be falsebecause === operator also check datatype along with value
