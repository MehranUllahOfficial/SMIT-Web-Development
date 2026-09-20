// Data Types
let name = "false";
let id = 804720;
let active = true;
let coming_task;
let completed_date = null;
let value = 1;

// Checking type of variable
console.log(typeof(name));
console.log(typeof(id));
console.log(typeof(active));
console.log(typeof(coming_task));
console.log(typeof(completed_date));


name = Number(name);
console.log(typeof(name));
console.log(name); // it will console NaN because there is no digits in name variable
id = String(id);
console.log(typeof(id));
console.log(id);
name = Boolean(name);
console.log(typeof(name));
console.log(name);

value = Boolean(value)
console.log(typeof(value));
console.log(value);



