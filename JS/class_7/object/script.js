/*
Student details:
name "test"
age 22
gender "male"
marks 880
class 12
contack "+923453445"
address "Peshawar"

object: 
-> key value pairs (age: 2)

*/

let student_details = {
    name: "Ali",
    age: 22,
    gender: "male",
    marks: 880,
    stu_class: 12,
    contact: "+923456789",
    address: [
        {city: "Peshwar", country: "Pakistan", street: "A123"},
        {city: "Lahore", country: "Pakistan", street: "B423"},
    ],
    skills: ["Html", "CSS", "JS"]
}

// console.log(student_details.address.country);
console.log(student_details.address[1].city);



console.log(student_details.age);
// console.log(student_details["contact"]);

console.log(student_details.skills[1]);


// update value of existing key
// student_details.age = 23;
// console.log(student_details.age);

// console.log(`Show all keys and their value ${student_details}`);

//Delete property -> delete object.key
// delete student_details.age;
// console.log(student_details);

