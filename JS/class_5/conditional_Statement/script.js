/*
Conditional Statements:
if
else
else if

Ternary Operator:
contion ? "Fullfiled" : "Failed"

Switch Statement:
switch (condition)
    case 1:
        log
    case 2:
        log
    default:
        message

*/

// let age = Number(prompt("Enter your age:", 18));
// let age = prompt("Enter your age:")
// let gender = prompt("Enter your gender:", "male");

// if(age >= 18) {
//     document.write("You are Eligable");
// } else {
//     document.write("You are not Eligable");
// }
// document.write(typeof(age));

// let result = age >= 18 ? "You are Eligable" : "You are not Eligable";
// document.write(result);

// if(age >= 18 && gender == "male") {
//     document.write("Please visit XYZ");
// } else if(age >= 18 && gender == "female"){
//     document.write("Please visit xyz");
// } else {
//     document.write("You are not eligable or Enter correct data");
// }

// console.log("Hi");

let marks = Number(prompt("Enter your marks out of 100"));

if(marks > 89 && marks < 101) {
    document.write("You got grade A")
} else if(marks > 79) {
    document.write("You got grade B")
} else if(marks > 69) {
    document.write("You got grade C")
} else if(marks > 59) {
    document.write("You got grade D")
} else if(marks > -1){
    document.write("You are Failed. Work Hard next time")
} else {
    document.write("Marks must be between 0 and 100");
}