// Sequence of characters
// there are three 3 ways to define string: '', "", ``
let fname = 'Mehran'; 
let lname = "Ullah"; 
let fullName = `My name is ${fname} ${lname}`;

console.log(fname);
console.log(lname);
console.log(fullName);

// string length
console.log(fname.length);

// access character in string through index
console.log(fname[2]);

// slice in string: accept negative index
let detail = `I learn "Javascript"`;
console.log(detail.slice(2,7));
console.log(detail.slice(-2));

//substring -> do not support negative index
console.log(detail.substring(2,7));

// trim remove extra spaces from start and end
// let username = prompt("Enter Your Name").trim();
// let username = prompt("Enter Your Name").trimStart();
// let username = prompt("Enter Your Name").trimEnd();
// if(username === "Mehran") {
//     console.log("True");
// } else {
//     console.log("False");
// }

// include
// let email = prompt("Enter your email");
// if(email.includes("@")) {
//     console.log("Correct Email");
// } else {
//     console.log("incorrect Email");
// }

let a = "hello hello";
// indexOf -> Not exist will result -1
console.log(a.indexOf("hello"));
console.log(a.endsWith("hello"));


// lastIndexOf
console.log(a.lastIndexOf("hello"));

// replace
a = a.replace("hello", "hi");
console.log(a);
