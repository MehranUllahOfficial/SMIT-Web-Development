/*
Operator: (operator, operand)
Operator: +,-,%,*,/,**

Expression: Combination of operand & operator

= -> Assignment operator
== -> Equality operator (Do not check datatype)
=== -> Equality operator (Also check datatype)

Comparison Operators
> : greater than
< : less than
>= : greater than or equal
<= : less than or equal
!= : not equal (Do not check datatype)
!== : not equal (also check datatype)

*/



let a = 3;
let b = '3';
console.log(10 > 5); 
console.log(3 < 5);
console.log(5 >= 5);
console.log(2 <= 5); 
console.log(a == b);  
console.log(a === b);  
console.log(a != b);  
console.log(a !== b); 

let c = 3;
console.log(typeof(c));

let name = 'Ali';
console.log(typeof(name));

// let intro = "My name is 'Test'";
let intro = `My name is "Test"`;
console.log(intro);

// Template Literal
// Backtick : ``

console.log(`What is Your Name: ${intro}`);