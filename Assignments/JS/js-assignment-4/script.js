// Logical AND (&&)
console.log("Logical AND (&&)");
let age = 18;
let fee_paid = false;
if (age >= 18 && fee_paid == true) {
    console.log("Allowed");
} else {
    console.log("Not allowed");
}
console.log("\n");


// Logical OR (||)
console.log("Logical OR (||)");
let email_correct = true;
let phone_correct = false;
if (email_correct || phone_correct) {
    console.log("Allowed");
} else {
    console.log("Not allowed");
}

console.log("\n");

// Logical NOT (!)
console.log("Logical NOT (!)");
let isBlocked = false;
console.log(!isBlocked);

console.log("\n");

// Combine Logical Operators
console.log("Combine Logical Operators");
let isLoggedIn = true;
let isPremium = false;
let hasCoupon = true;

// if will log because || operator is used and oneof them is true
if(isLoggedIn && (isPremium || hasCoupon)) {
    console.log("You got special discount");
} else {
    console.log("You are not eligible for special discount");
}

// else will log because && operator is used and isLoggedIn is false
console.log("Combine Logical Operators");
isLoggedIn = false;
isPremium = false;
hasCoupon = true;

if(isLoggedIn && (isPremium || hasCoupon)) {
    console.log("You got special discount");
} else {
    console.log("You are not eligible for special discount");
}
